import { APP_NAME, DEFAULT_CURRENCY } from "@/constants";

const appConfig = {
  env: process.env.APP_ENV || process.env.NODE_ENV,
  debug: process.env.DEBUG,
  appName: process.env.APP_NAME || APP_NAME,
  appUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  authApiBaseUrl: process.env.NEXT_PUBLIC_AUTH_API_BASE_URL,
  assetsPrefixUrl: process.env.NEXT_PUBLIC_ASSETS_PREFIX_URL,
  defaultCurrency: DEFAULT_CURRENCY,
};

export default appConfig;
