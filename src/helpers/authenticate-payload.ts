import { IsString } from "class-validator";

/**
 * Defines an authentication payload
 */
export class AuthenticatePayload {
    @IsString()
    email: string;

    @IsString()
    password: string;
}