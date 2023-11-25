import {useState} from "react";
import classes from "./Player.module.css";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(isEditing=> !isEditing);
  }

  return (
    <li>
      <span className={classes.player}>
        {
          isEditing ? (
            <input type="text" required value={name} />
            ) : (
            <span className={classes.name}>{name}</span>
          )}
        <span className={classes.symbol}>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;