import { expect, test, type Page } from "@playwright/test";

const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"] as const;

const waitForScrollSettled = async (page: Page) => {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let lastY = window.scrollY;
      let stableFrames = 0;

      const tick = () => {
        const currentY = window.scrollY;
        if (Math.abs(currentY - lastY) < 1) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }

        lastY = currentY;

        if (stableFrames >= 8) {
          resolve();
          return;
        }

        window.requestAnimationFrame(tick);
      };

      window.requestAnimationFrame(tick);
    });
  });
};

test("desktop sections stay aligned and menu anchors do not leave excessive gap", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.locator(".navbar")).toBeVisible();
  await waitForScrollSettled(page);
  await expect(page.locator(".hero-copy")).toBeInViewport();
  await expect(page.locator(".hero-visual")).toBeInViewport();

  const initialMetrics = await page.evaluate(() => {
    const navbar = document.querySelector(".navbar");
    const hero = document.getElementById("hero");

    if (!(navbar instanceof HTMLElement) || !(hero instanceof HTMLElement)) {
      return null;
    }

    const navbarRect = navbar.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    const heroStyle = window.getComputedStyle(hero);

    return {
      heroTop: heroRect.top,
      heroPaddingTop: heroStyle.paddingTop,
      navbarBottom: navbarRect.bottom
    };
  });

  test.info().annotations.push({
    type: "hero-metrics",
    description: JSON.stringify(initialMetrics)
  });

  for (const sectionId of sectionIds.slice(1)) {
    await page.locator(`[data-nav-link="${sectionId}"]`).click();
    await page.waitForFunction(
      (id) => window.location.hash === `#${id}`,
      sectionId
    );
    await waitForScrollSettled(page);

    const metrics = await page.evaluate((id) => {
      const navbar = document.querySelector(".navbar");
      const section = document.getElementById(id);

      if (!(navbar instanceof HTMLElement) || !(section instanceof HTMLElement)) {
        return null;
      }

      const navbarRect = navbar.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const styles = window.getComputedStyle(section);

      return {
        id,
        sectionTop: Math.round(sectionRect.top),
        navbarBottom: Math.round(navbarRect.bottom),
        gapToNavbar: Math.round(sectionRect.top - navbarRect.bottom),
        paddingTop: styles.paddingTop,
        marginTop: styles.marginTop,
        scrollMarginTop: styles.scrollMarginTop,
        reachedPageEnd:
          Math.ceil(window.scrollY + window.innerHeight) >=
          document.documentElement.scrollHeight - 2
      };
    }, sectionId);

    console.log(`section metrics ${sectionId}: ${JSON.stringify(metrics)}`);

    test.info().annotations.push({
      type: `section-${sectionId}`,
      description: JSON.stringify(metrics)
    });

    expect(metrics).not.toBeNull();

    if (metrics!.reachedPageEnd) {
      await expect(page.locator(`#${sectionId} .section-title`)).toBeInViewport();
      continue;
    }

    expect(Math.abs(metrics!.gapToNavbar)).toBeLessThanOrEqual(24);
  }
});
