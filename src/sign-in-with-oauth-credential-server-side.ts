// See https://cloud.google.com/identity-platform/docs/use-rest-api#section-sign-in-with-oauth-credential

const API_KEY = process.env.API_KEY ?? "";
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${API_KEY}`;

export async function signInWithCredential(params: {
  idToken: string;
  providerId: string;
  requestUri: string;
}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postBody: `id_token=${params.idToken}&providerId=${params.providerId}`,
      returnSecureToken: true,
      requestUri: params.requestUri,
    }),
  });
  console.log(await response.json());
  return;
}
