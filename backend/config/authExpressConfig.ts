import { type AuthConfig } from "@auth/core";

export const authConfig: AuthConfig = {
    providers: [],
    secret: process.env.TOKEN_SECRET as string,
};
