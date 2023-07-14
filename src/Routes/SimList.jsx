import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkState, toDoState } from "../atom";
import Board from "./Board";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 768px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #faf9fe;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Boards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;
const WrapperVariants = {
  initial: { x: 500, opacity: 0 },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
  },
};

function SimList() {
  const isDark = useRecoilValue(isDarkState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info) => {
    const { draggableId, destination, source } = info;
    console.log(info);
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const targetBoard = [...allBoards[destination.droppableId]];

        sourceBoard.splice(source.index, 1);
        targetBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: targetBoard,
        };
      });
    }
  };
  return (
    <AnimatePresence>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper
          variants={WrapperVariants}
          initial="initial"
          animate="end"
          exit="exit"
          isDark={isDark}
        >
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </AnimatePresence>
  );
}
export default SimList;
