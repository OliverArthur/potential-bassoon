export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      BASE_URL: string;
      PWD: string;
    }
    interface ImportMetaEnv {
      VITE_APP_TITLE: string;
      VITE_APP_PORT: number;
      VITE_APP_API: string;
    }
  }
}
