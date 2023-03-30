export default interface IConfig {
  port: number;
  tcpPort: number;
  tcpHost: string;
  gateway: {
    url: string;
  };
  database: {
    connectionString: string;
    port: number;
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    bucketName: string;
  };
  ASCD: {
    acc_id: number;
    cust_id: number;
    eCommerce_key: string;
    url: string;
  };
  elastic_search_url: string;
  accredible_api_key: string;
  log_level: string;
  mailer: {
    mail_host: string;
    mail_sender: string;
    mail_password: string;
  };
  crypto_encrypted_key: string;
  dsn: string;
  traceSampleRate: number;
}
