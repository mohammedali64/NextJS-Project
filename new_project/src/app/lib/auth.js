import { SignJWT, jwtVerify } from "jose";

const secretKey = new TextEncoder().encode("mdali");
const alg = "HS256";

export async function createJWT(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime("1h")
    .sign(secretKey);
}

export async function verifyJWT(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (err) {
    return null;
  }
}
