import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const id = useParams().id;
  const toDo = useSelector((state) =>
    state.find((toDo) => toDo.id === parseInt(id))
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
