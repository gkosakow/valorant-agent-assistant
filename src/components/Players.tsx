import { useState } from "react";
import agents from "./api/Agents";

interface Player {
    name: string;
    riotID: string;
}

const playerNames = () => {
    const [players, setPlayers] = useState<Player[]>(
        [{ name: "Player 1", riotID: "" },
        { name: "Player 2", riotID: "" },
        { name: "Player 3", riotID: "" },
        { name: "Player 4", riotID: "" },
        { name: "Player 5", riotID: "" }]);

    console.log("Players:", players);

    return (
        <div>Players imported</div>
    )
}

export default playerNames;