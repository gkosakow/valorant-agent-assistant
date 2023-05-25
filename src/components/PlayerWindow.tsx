import Player from "./Player";

function PlayerWindow() {
    const players: number[] = [1, 2, 3, 4, 5];
    const subs: number[] = [6, 7];

    return (
        <>
            <div className="player-window-container">
                <div className="player-window">
                    <div className="roster-container-main">
                        <div className="roster-label">MAIN ROSTER</div>
                        {players.map(num => (<Player key={num} num={num} />))}
                    </div>
                    <div className="roster-container-sub">
                        <div className="roster-label">SUB ROSTER</div>
                        {subs.map(num => (<Player key={num} num={num} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerWindow;