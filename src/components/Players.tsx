import { ChangeEvent, useState } from "react";
import agents from "./api/AgentList";
import { Container, Stack, TextField } from "@mui/material";

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


    function handleChangeUser() {

    }

    return (
        <Container className="container">
            <Stack spacing={2}>
                <TextField fullWidth onChange={() => handleChangeUser} label="Player 1" size="small" />
                <TextField fullWidth label="Player 2" size="small" />
                <TextField fullWidth label="Player 3" size="small" />
                <TextField fullWidth label="Player 4" size="small" />
                <TextField fullWidth label="Player 5" size="small" />
            </Stack>
        </Container>
    )
}

export default playerNames;