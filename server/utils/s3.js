import { config } from "dotenv";
config();
import { S3Client } from "@aws-sdk/client-s3";

const accessKey = process.env.BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.BUCKET_SECRET_ACCESS_KEY;
const bucketRegion = process.env.BUCKET_REGION


const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
})


export default s3;