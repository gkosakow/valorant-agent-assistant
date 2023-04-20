import Player from "./Player";
import { Card } from '@mui/material';

function PlayerWindow() {
    const players = [1, 2, 3, 4, 5];

    return (
        <Card className="player-window" sx={{ borderRadius: "16px" }} elevation={3} >
            {players.map(num => (<Player key={num} num={num} />))}
        </Card>
    )
}

export default PlayerWindow;