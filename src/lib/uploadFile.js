import { s3Client } from "@/utils/aws";
import { PutObjectAclCommand, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: "devdynamos-lidya",
        Key: `/${folder}/${key}`,
        ContentType: body.type,
        Body: buffer,
      })
    );

    console.log("Upload OK");
  } catch (error) {
    console.log(error);
  }
}
