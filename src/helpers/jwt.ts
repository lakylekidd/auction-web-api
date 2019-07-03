import * as jwt from 'jsonwebtoken';

// Some needed constants for token generation
const secret = process.env.JWT_SECRET || '9u8nnjksfdt98*(&*%T$#hsfjk'
const ttl = 3600 * 4 // our JWT tokens are valid for 4 hours

interface JwtPayload {
    id: number
}

/**
 * Signs a json payload and returns a token
 * @param data a valid json payload
 */
export const sign = (data: JwtPayload) =>
    jwt.sign({ data }, secret, { expiresIn: ttl })

/**
 * Verifies the validity of a token
 * @param token the token to verify
 */
export const verify = (token: string): { data: JwtPayload } =>
    jwt.verify(token, secret) as { data: JwtPayload }