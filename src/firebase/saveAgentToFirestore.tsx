import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Map } from "../components/MapsPanel";
import { Agent } from "../components/AgentsRow"

export const saveAgentToFirestore = async (user: any, agentNum: number, map: Map, agent: Agent) => {
    const docRef = doc(db, "Users", `${user.uid}`, "Maps", `${map.name}`);

    await setDoc(docRef, { [`agent${agentNum}`]: agent.name }, { merge: true });
}