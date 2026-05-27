import fs from "fs";
import path from "path";

const roots = ["app", "components"].map((d) => path.join(process.cwd(), d));
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === "scripts") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
}

for (const root of roots) {
  if (fs.existsSync(root)) walk(root);
}

for (const file of files) {
  if (file.includes("section-ribbon.tsx")) continue;

  let content = fs.readFileSync(file, "utf8");
  const original = content;

  content = content.replace(/<span className="idx">[^<]*<span class="num">/g, '<span className="idx"><span className="num">');
  content = content.replace(/<span class="num">/g, '<span className="num">');
  content = content.replace(/<span class="slash">/g, '<span className="slash">');
  content = content.replace(/<span class="idx">/g, '<span className="idx">');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log("fixed", path.relative(process.cwd(), file));
  }
}
