import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../routes/store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default ToDo;
