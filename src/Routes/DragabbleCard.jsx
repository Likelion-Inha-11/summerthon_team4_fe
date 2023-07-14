import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { toDoText } from "../atom";

const Card = styled(motion.div)`
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0.3rem;
  background-color: ${(props) => (props.isDragging ? "tomato" : "white")};
  display: flex;
  justify-content: center;
  width: ${(props) => (props.id ? "55%" : "100%")};
`;

const SimgeumCard = styled.div`
  display: flex;
  align-items: center;
`;
const CardVariants = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(1) {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 6px;
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

function DragabbleCard({ toDo, index, boardId }) {
  const texts = useRecoilValue(toDoText);

  console.log(toDo, "has been rendered");
  console.log(boardId);
  const getId = () => {
    if (boardId === "심금이들") {
      return true;
    } else {
      return false;
    }
  };

  const toDoNum = toDo.slice(9, 10);

  console.log(toDoNum);

  return (
    <AnimatePresence>
      <Draggable
        variants={CardVariants}
        initial="initial"
        animate="end"
        key={toDo}
        draggableId={toDo}
        index={index}
      >
        {(magic, snapshot) => (
          <Card
            id={getId()}
            isDragging={snapshot.isDragging}
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {getId() ? (
              <img alt="심금" src={toDo} width="80" height="80"></img>
            ) : (
              <SimgeumCard>
                <img alt="심금" src={toDo} width="70" height="70"></img>
                <TextDiv>
                  <p>{texts[toDoNum - 1]?.title}</p>
                  <p>{texts[toDoNum - 1]?.content}</p>
                </TextDiv>
              </SimgeumCard>
            )}
          </Card>
        )}
      </Draggable>
    </AnimatePresence>
  );
}

export default React.memo(DragabbleCard);
