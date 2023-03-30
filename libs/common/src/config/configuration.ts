import Config from './config.type';

export default (): Config => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  tcpPort: parseInt(process.env.TCP_PORT, 10) || 4000,
  tcpHost: process.env.TCP_HOST || '',
  gateway: {
    url: process.env.GATEWAY_URL || '',
  },
  database: {
    connectionString: process.env.MONGODB_URI.toString(),
    port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID.toString(),
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY.toString(),
    region: process.env.AWS_REGION.toString(),
    bucketName: process.env.AWS_BUCKET_NAME.toString(),
  },
  ASCD: {
    acc_id: parseInt(process.env.ACC_ID, 10),
    cust_id: parseInt(process.env.CUST_ID, 10),
    eCommerce_key: process.env.ECOMMERCE_KEY.toString(),
    url: process.env.URL.toString(),
  },
  elastic_search_url: process.env.ELASTIC_SEARCH_URL,
  accredible_api_key: process.env.ACCREDIBLE_API_KEY,
  log_level: process.env.LOG_LEVEL,
  mailer: {
    mail_host: process.env.MAIL_HOST,
    mail_sender: process.env.MAIL_SENDER,
    mail_password: process.env.MAIL_PASSWORD,
  },
  crypto_encrypted_key: process.env.CRYPTO_ENCRYPTED_KEY,
  dsn: process.env.SENTRY_DSN,
  traceSampleRate: Number(process.env.SENTRY_TRACE_SAMPLE_RATE || 1),
});
