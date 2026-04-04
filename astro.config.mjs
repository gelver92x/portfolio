import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const [owner = "", repo = ""] = repository ? repository.split("/") : [];
const isUserSite = owner !== "" && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const site = owner ? `https://${owner}.github.io` : undefined;
const base = repo && !isUserSite ? `/${repo}/` : "/";

export default defineConfig({
  output: "static",
  site,
  base
});
