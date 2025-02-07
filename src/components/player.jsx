import { useState } from "react"

export default function Player({initialPlayerName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialPlayerName);
    const [isEditing, setIsEditing] = useState(false);

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing) onChangeName(symbol, playerName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editablePlayerName = <input type="text" placeholder="Enter player name" defaultValue={playerName} onChange={handleChange} required />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}