import {useState} from "react";
import classes from "./Player.module.css";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(isEditing=> !isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? classes.active : undefined}>
      <span className={classes.player}>
        {
          isEditing ? (
            <input type="text"
                   required
                   value={playerName}
                   onChange={handleChange}
            />
            ) : (
            <span className={classes.name}>{playerName}</span>
          )}
        <span className={classes.symbol}>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;