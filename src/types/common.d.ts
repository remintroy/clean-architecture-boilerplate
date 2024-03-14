// to show entire type structure
type Prettify<T> = { [K in keyof T]: T[K] } & NonNullable<unknown>;

// global variables
declare const utils: import("../adaptor/utils").default;
declare const config: ReturnType<import("../config").default>;

// Configs
interface Configs {
  server: {
    name: string;
    id: string;
    port: number;
    baseUrl: string;
  };
  mongodb: {
    url: string;
    db: string;
  };
  cors: import("cors").CorsOptions; // types from cors library
}

// For express request and response with custom attributes
declare namespace Express {
  interface Request {
    user: {
      // Define the properties you want to add to the `user` object
      userId: string;
      username: string;
      // Add any other custom properties
    };
  }
}
