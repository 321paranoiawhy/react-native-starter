import {DEVELOPMENT, TEST, PRODUCTION} from '@constants/env';

// type process.env
// interface ProcessEnv {
//   NODE_ENV: DEVELOPMENT | TEST | PRODUCTION;
//   // ****** custom env ******
//   WMS_ENV: DEVELOPMENT | TEST | PRODUCTION;
//   BASE_URL: string;
//   STORYBOOK_ENABLED: boolean;
// }

namespace NodeJS {
  // type process.env
  interface ProcessEnv {
    NODE_ENV: DEVELOPMENT | TEST | PRODUCTION;
    // ****** custom env ******
    WMS_ENV: DEVELOPMENT | TEST | PRODUCTION;
    BASE_URL: string;
    STORYBOOK_ENABLED: boolean;
  }
}

declare module '@env' {
  export const WMS_ENV: DEVELOPMENT | TEST | PRODUCTION;
  export const BASE_URL: string;
  export const STORYBOOK_ENABLED: boolean;
}
