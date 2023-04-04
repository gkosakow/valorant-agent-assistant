import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { Map } from "../components/MapsPanel";
import { Agent } from "../components/AgentsRow"

export const loadAgentFromFirestore = (user: any, agentNum: number, map: Map, agent: Agent) => {
    const docRef = doc(db, "Users", `${user.uid}`, "Maps", `${map.name}`);
    let loadedAgent: string;

    const unsub = onSnapshot(docRef, (doc) => {
        loadedAgent = doc.get(`agent${agentNum}`);
        return loadedAgent;
    });
}