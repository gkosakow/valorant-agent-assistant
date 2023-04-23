import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Player } from "../components/Player";

export const savePlayerToFirestore = async (user: any, playerNum: number, player: Player) => {
    const docRef = doc(db, "Users", `${user.uid}`, "Players", `player${playerNum}`);

    await setDoc(docRef, { ...player, riotID: player.riotID, tagline: player.tagline }, { merge: true });
}