import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Map } from "../components/Maps";

export const addMapToFirestore = async (user: any, map: Map) => {
    await setDoc(doc(db, "Users", `${user.uid}`, "Maps", `${map.name}`), {
        agent1: "",
        agent2: "",
        agent3: "",
        agent4: "",
        agent5: ""
    });
}