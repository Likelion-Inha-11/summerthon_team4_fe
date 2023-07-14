import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { useState } from "react";

const Wrapper = styled.div`
  width: ${(props) => (props.id ? "40%" : "80%")};
  padding-top: 10px;
  background-color: #d7d2cc;
  border-radius: 20px;
  flex-direction: column;
  max-width: 768px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 25px;
`;

const Area = styled.div`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.draggingFromThisWith
      ? "#b2bec3"
      : "transparent"};

  transition: all 0.5s ease-in-out;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Board({ toDos, boardId }) {
  const getBoard = () => {
    if (boardId === "심금이들") {
      return true;
    } else if (boardId === "Who is This") {
      return false;
    }
  };
  return (
    <Wrapper id={getBoard()}>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            id={getBoard()}
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard
                drag
                boardId={boardId}
                key={toDo}
                index={index}
                toDo={toDo}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
