import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "components",
    "cv",
    "EMIL PRAYOGA ALBANI - CV FRONTEND & AI ENGINEER.pdf"
  );
  const buffer = await readFile(filePath);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="EMIL-Prayoga-Albani-CV.pdf"',
      "Content-Length": String(buffer.byteLength),
    },
  });
}
