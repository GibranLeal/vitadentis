import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), ".next/standalone/server.js");

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
