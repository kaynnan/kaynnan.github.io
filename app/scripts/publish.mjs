import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const app = resolve(here, "..");
const root = resolve(app, "..");
const dist = join(app, "dist");

console.log("building app...");
execSync("npm run build", { cwd: app, stdio: "inherit" });

for (const name of ["index.html", "assets", "credits.html"]) {
  const target = join(root, name);
  if (existsSync(target)) rmSync(target, { recursive: true, force: true });
}

mkdirSync(root, { recursive: true });
for (const entry of readdirSync(dist)) {
  cpSync(join(dist, entry), join(root, entry), { recursive: true });
}

console.log("published to", root);
console.log(readdirSync(root).filter((n) => !n.startsWith(".")).join("\n"));
