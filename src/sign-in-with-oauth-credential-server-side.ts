// See https://cloud.google.com/identity-platform/docs/use-rest-api#section-sign-in-with-oauth-credential

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY ?? "";
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${FIREBASE_API_KEY}`;

export async function signInWithCredential(
  idToken: string,
  providerId: string,
  requestUri: string
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postBody: `id_token=${idToken}&providerId=${providerId}`,
      returnSecureToken: true,
      requestUri,
    }),
  });
  console.log(await response.json());
  return;
}
