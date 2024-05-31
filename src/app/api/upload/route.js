import { uploadFile } from "@/lib/uploadFile";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  await uploadFile({ key: file.name, folder: "test", body: file });

  return Response.json({ message: "Done!" });
}
