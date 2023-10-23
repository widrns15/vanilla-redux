import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../routes/store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onClick}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
