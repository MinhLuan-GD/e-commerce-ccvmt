declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;

    JWT_SECRET: string;
    JWT_EXPIRATION: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_SECRET: string;

    RABBIT_MQ_URI: string;

    ORIGIN: string;
  }
}
