import AWS from "aws-sdk";
import { s3Config } from './utils';

AWS.config.update({
  accessKeyId: s3Config.accessKeyId,
  secretAccessKey: s3Config.secretAccessKey,
});

const bucket = new AWS.S3({
  params: { Bucket: s3Config.bucketName },
  region: s3Config.region,
});

export async function uploadImage(file: File) {
  console.log(file);
  if (file) {
    console.log(s3Config);
    const filename = `${file.name}.${file.type.split('/')[1]}`;

    const params = {
      Body: file,
      Bucket: s3Config.bucketName,
      Key: filename,
    };

    bucket
      .putObject(params)
      .send((err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      });
  }
}

export async function deleteImage(file: string) {
  const params = {
    Bucket: s3Config.bucketName,
    Key: file,
  };

  bucket
    .deleteObject(params)
    .send((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
}