import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Page1 from "./Page1";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkState } from "../atom";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent;
  background-image: url("img/BlueBubble.gif");
  background-size: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TestList = styled(motion.p)`
  font-size: 40px;
  color: black;
  padding-top: 5rem;
  font-family: "Seymour One", sans-serif;
`;
const TestGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  width: 100%;
  padding: 2rem;
  height: 60%;
  margin-top: 1rem;
`;
const ItemBox = styled(motion.div)`
  position: relative;
  width: 100%;
  div {
    width: 100%;
    height: 60%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  p {
    width: 100%;
    height: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
const Cf = styled.span`
  position: absolute;
  right: 5px;
  text-align: end;
  bottom: 0.3rem;
  font-size: 0.6rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
`;
const TestListVariants = {
  start: { scale: 0 },
  end: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 5,
    },
  },
};
const TestGridVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      delayChildren: 0.5,
      StaggerChildren: 0.3,
    },
  },
};
const ItemVariants = {
  start: {
    y: 20,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
  hover: { scale: 1.08, zIndex: 1 },
};
const Overlay = styled(motion.div)`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
`;
const OverlayVariants = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const WrapperVariants = {
  load: { opacity: 0, x: 500 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -500 },
};

function Main() {
  const isDark = useRecoilValue(isDarkState);
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  return (
    <Wrapper
      isDark={isDark}
      variants={WrapperVariants}
      initial="load"
      animate="show"
    >
      <TestList variants={TestListVariants} initial="start" animate="end">
        Test List
      </TestList>
      <TestGrid variants={TestGridVariants} initial="start" animate="end">
        <ItemBox
          layoutId={1 + ""}
          onClick={() => {
            setId(1 + "");
          }}
          variants={ItemVariants}
          initial="start"
          animate="end"
          whileHover="hover"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(255,203,160), rgba(221,87,137), rgba(155,91,230))",
                "linear-gradient(135deg, rgba(155,91,230), rgba(221,87,137), rgba(255,203,160))",
                "linear-gradient(135deg, rgba(255,203,160), rgba(221,87,137), rgba(155,91,230))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
          <p>ADHD</p>
          <Cf>
            <i class="fa-solid fa-square-check"></i>주의력결핍 과잉행동장애
          </Cf>
        </ItemBox>
        <ItemBox
          layoutId={2 + ""}
          onClick={() => {
            setId(2 + "");
          }}
          variants={ItemVariants}
          initial="start"
          animate="end"
          whileHover="hover"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(255,195,113), rgba(255,95,109))",
                "linear-gradient(135deg, rgba(255,95,109), rgba(255,195,113))",
                "linear-gradient(135deg, rgba(255,195,113), rgba(255,95,109))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
          <p>IED</p>
          <Cf>
            <i class="fa-solid fa-square-check"></i>분노조절장애
          </Cf>
        </ItemBox>
        <ItemBox
          layoutId={3 + ""}
          onClick={() => {
            setId(3 + "");
          }}
          variants={ItemVariants}
          initial="start"
          animate="end"
          whileHover="hover"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(161, 255, 139), rgba(63, 147, 255))",
                "linear-gradient(135deg, rgba(63, 147, 255), rgba(161, 255, 139))",
                "linear-gradient(135deg, rgba(161, 255, 139), rgba(63, 147, 255))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
          <p>Alcoholism</p>
          <Cf>
            <i class="fa-solid fa-square-check"></i>알코올 중독
          </Cf>
        </ItemBox>
        <ItemBox
          layoutId={4 + ""}
          onClick={() => {
            setId(4 + "");
          }}
          variants={ItemVariants}
          initial="start"
          animate="end"
          whileHover="hover"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(213, 218, 240), rgba(121, 160, 231), rgba(41, 110, 223))",
                "linear-gradient(135deg, rgba(41, 110, 223), rgba(121, 160, 231), rgba(213, 218, 240))",
                "linear-gradient(135deg, rgba(213, 218, 240), rgba(121, 160, 231), rgba(41, 110, 223))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
          <p>Depression</p>
          <Cf>
            <i class="fa-solid fa-square-check"></i>우울증
          </Cf>
        </ItemBox>
      </TestGrid>
      <AnimatePresence>
        {id ? (
          <Overlay
            id={id}
            variants={OverlayVariants}
            initial="initial"
            animate="end"
          >
            <Page1 variants={OverlayVariants} id={id}></Page1>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default Main;
