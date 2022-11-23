import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '3eb177ea43fec7f046e0878c885c4d96997101a5', queries });
export default client;
  