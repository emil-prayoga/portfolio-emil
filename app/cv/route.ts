import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "components", "cv", "EMIL PRAYOGA ALBANI - CV FRONTEND & AI ENGINEER.pdf");
  const file = await readFile(filePath);
  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="EMIL PRAYOGA ALBANI - CV FRONTEND & AI ENGINEER.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
