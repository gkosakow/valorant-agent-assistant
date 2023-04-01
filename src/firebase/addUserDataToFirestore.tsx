import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addUserDataToFirestore = async (user: any) => {
    const docRef = doc(db, "Users", user.uid);

    await setDoc(docRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        created: user.metadata.creationTime
    })
}