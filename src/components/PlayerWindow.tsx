import Player from "./Player";

function PlayerWindow() {
    const players: number[] = [1, 2, 3, 4, 5];
    const subs: number[] = [6, 7];

    return (
        <>
            <div className="player-window-container">
                <div className="player-window">
                    {players.map(num => (<Player key={num} num={num} />))}
                    {subs.map(num => (<Player key={num} num={num} />))}
                </div>
            </div>
        </>
    )
}

export default PlayerWindow;