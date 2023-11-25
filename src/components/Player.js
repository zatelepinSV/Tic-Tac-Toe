import {useState} from "react";
import classes from "./Player.module.css";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(isEditing=> !isEditing);
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li>
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