const dataUrlToFile = (url: string, fileName: string) => {
  const [mediaType, data] = url.split(",");

  const mime = mediaType.match(/:(.*?);/)?.[0];

  var n = data.length;

  const arr = new Uint8Array(n);

  while (n--) {
    arr[n] = data.charCodeAt(n);
  }

  return new File([arr], fileName, { type: mime });
};

const dataUrlToFileUsingFetch = async (
  url: string,
  fileName: string,
  mimeType: string
) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();

  return new File([buffer], fileName, { type: mimeType });
};

declare var process: {
  env: {
    REACT_APP_BUCKET: string
    REACT_APP_REGION: string
    REACT_APP_ACCESS_KEY_ID: string
    REACT_APP_SECRET_ACCESS_KEY_ID: string
    REACT_APP_S3_URL: string
  }
}

const s3Config = {
  bucketName: process.env.REACT_APP_BUCKET,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY_ID,
  s3Url: process.env.REACT_APP_S3_URL,
}

export { dataUrlToFile, dataUrlToFileUsingFetch, s3Config };
