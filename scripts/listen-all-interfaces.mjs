import { cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const standalone = path.join(root, ".next/standalone");
const file = path.join(standalone, "server.js");

let source;
try {
  source = await readFile(file, "utf8");
} catch {
  console.log("No hay servidor standalone que ajustar.");
  process.exit(0);
}

const next = source.replace(
  "const hostname = process.env.HOSTNAME || '0.0.0.0'",
  "const hostname = '0.0.0.0'",
);

if (next === source) {
  console.error("No pude fijar el host del servidor standalone.");
  process.exit(1);
}

await writeFile(file, next);
console.log("El servidor escuchará en 0.0.0.0.");

// El servidor standalone no incluye estos directorios. Sin ellos el HTML
// responde y el CSS, el JavaScript y public/ devuelven 404.
await cp(path.join(root, "public"), path.join(standalone, "public"), {
  recursive: true,
});
await cp(path.join(root, ".next/static"), path.join(standalone, ".next/static"), {
  recursive: true,
});
console.log("Se copiaron public/ y .next/static al servidor standalone.");
