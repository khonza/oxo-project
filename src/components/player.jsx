import { useState } from "react"

export default function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        seIstEditing(true);
    }

    return (
        <li>
            <span className="player">
                <span className="player-name">{playerName}</span>
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}