import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json"),
});

export async function createUserProviderToLink(params: {
  providerId: string;
  providerUid: string;
}) {
  const user = await admin.auth().createUser({
    providerToLink: {
      providerId: params.providerId,
      uid: params.providerUid,
    },
  });
  console.log(JSON.stringify(user));
  const response = await admin.auth().updateUser(user.uid, {
    providerToLink: {
      providerId: params.providerId,
      uid: params.providerUid,
    },
  });
  console.log(JSON.stringify(response));
}
