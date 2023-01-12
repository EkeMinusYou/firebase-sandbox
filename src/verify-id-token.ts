import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json"),
});

export async function verifyIdToken(token: string) {
  const decodedToken = await admin.auth().verifyIdToken(token);
  console.log(decodedToken);
}
