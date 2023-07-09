import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { testObj } from "../atom";

const Wrapper = styled(motion.div)`
  width: 375px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;
const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const AskDiv = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 203, 160, 0.8),
    rgba(221, 87, 137, 0.8),
    rgba(155, 91, 230, 0.8)
  );
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 80%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
`;
const Dragdiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const DragZone = styled(motion.div)`
  width: 120px;
  height: 100px;
  border: ;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScoreGrid = styled(motion.div)`
  display: grid;
  width: 70%;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;
`;
const ScoreBox = styled(motion.div)`
  width: 120px;
  height: 100px;
  background: linear-gradient(
    135deg,
    rgba(255, 203, 160, 0.8),
    rgba(221, 87, 137, 0.8),
    rgba(155, 91, 230, 0.8)
  );
  border-radius: 20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  place-self: center;
`;
const AskContent = styled.p`
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  padding: 0px 10px;
`;
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  padding: 30px 30px 0px 30px;
  height: 100px;
  position: fixed;
  z-index: 1;
  border-bottom: 1.5px solid rgba(221, 87, 137, 0.8);
  background-color: rgba(255, 255, 255, 1);
  div i,
  div p {
    &:hover {
      cursor: pointer;
    }
  }
`;
const Footer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding: 38px;
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0) 1px,
    rgba(255, 255, 255, 1) 1.5px
  );
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(1px);
`;
const ScoreBoxVariants = {
  hover: { rotateZ: 180, transition: { duration: 0.3 } },
  tap: { rotateZ: -180, transition: { duration: 0.3 } },
  initial: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
  },
};
const DragZoneVariants = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};
const NextButton = styled.button``;

function Page1({ id }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress: progressY } = useScroll();
  const { scrollYProgress: scrollMandatory } = useScroll({ target: ref });
  const y = useTransform(scrollMandatory, [0, 0.5, 1], [-300, 0, 300]);

  const [isDropped, setIsDropped] = useState([]);
  useEffect(() => {
    setIsDropped([
      {
        id: 1,
        checked: false,
        scorenum: [
          {
            num: 1,
            dropped: false,
          },
          {
            num: 2,
            dropped: false,
          },
          {
            num: 3,
            dropped: false,
          },
          {
            num: 4,
            dropped: false,
          },
        ],
      },
      {
        id: 2,
        checked: false,
        scorenum: [
          {
            num: 1,
            dropped: false,
          },
          {
            num: 2,
            dropped: false,
          },
          {
            num: 3,
            dropped: false,
          },
          {
            num: 4,
            dropped: false,
          },
        ],
      },
      {
        id: 3,
        checked: false,
        scorenum: [
          {
            num: 1,
            dropped: false,
          },
          {
            num: 2,
            dropped: false,
          },
          {
            num: 3,
            dropped: false,
          },
          {
            num: 4,
            dropped: false,
          },
        ],
      },
    ]);
  }, []);

  const [quest, setQuest] = useRecoilState(testObj);
  const getObjectById = (id) => {
    return quest.find((item) => item.testid === parseInt(id)) || {};
  };
  const testObject = getObjectById(id);
  const { questions } = testObject;

  const scaleX = useSpring(progressY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const DragandDrop = (x, y, itemid, num) => {
    if (x >= 530 && x <= 630) {
      setIsDropped((obj) => {
        return obj.map((obj) => {
          if (obj.id === itemid) {
            return {
              ...obj,
              checked: true,
              scorenum: obj.scorenum.map((scoreobj) => {
                if (scoreobj.num === num) {
                  return {
                    ...scoreobj,
                    dropped: true,
                  };
                }
                return scoreobj;
              }),
            };
          }
          return obj;
        });
      });
    }
  };

  const nextPage = () => {
    navigate("/page2");
  };

  return (
    <Wrapper
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        duration: 0.2,
      }}
      id={id}
      ref={ref}
    >
      <HeaderDiv>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i class="fa-solid fa-arrow-left"></i>
          <p
            onClick={() => {
              window.location.reload();
            }}
            style={{ marginLeft: 10 }}
          >
            Back
          </p>
        </div>
        <svg id="totalprogress" width="70" height="70" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            id="indicator"
            style={{ pathLength: progressY }}
          />
        </svg>
      </HeaderDiv>
      {questions.slice(0, 3).map((item) => (
        <Container
          style={{
            paddingBottom: item.id === 3 ? "180px" : 0,
          }}
        >
          <AskDiv layoutId={item.id === 1 ? id + "" : null}>
            <AskContent>{item.question}</AskContent>
          </AskDiv>
          <Dragdiv>
            <DragZone
              variants={DragZoneVariants}
              initial="initial"
              animate="end"
              style={{
                background: isDropped[item.id - 1]?.checked
                  ? "linear-gradient(135deg, rgba(255, 203, 160, 0.8), rgba(221, 87, 137, 0.8), rgba(155, 91, 230, 0.8))"
                  : "rgba(255,255,255,1)",
                border: isDropped[item.id - 1]?.checked
                  ? "none"
                  : "4px dotted rgba(221, 87, 137, 0.8)",
              }}
            >
              <p>Drag</p>
            </DragZone>
          </Dragdiv>
          <ScoreGrid>
            <ScoreBox
              onPanEnd={(e, info) => {
                console.log(isDropped[item.id - 1]);
                DragandDrop(info.point.x, info.point.y, item.id, 1);
              }}
              style={{
                visibility: isDropped[item.id - 1]?.scorenum[0]?.dropped
                  ? "hidden"
                  : "block",
              }}
              variants={ScoreBoxVariants}
              drag
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              animate="end"
              dragSnapToOrigin={true}
            ></ScoreBox>
            <ScoreBox
              onPanEnd={(e, info) => {
                console.log(isDropped[item.id - 1]);
                DragandDrop(info.point.x, info.point.y, item.id, 2);
              }}
              style={{
                visibility: isDropped[item.id - 1]?.scorenum[1]?.dropped
                  ? "hidden"
                  : "block",
              }}
              variants={ScoreBoxVariants}
              drag
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              animate="end"
              dragSnapToOrigin={true}
            ></ScoreBox>
            <ScoreBox
              onPanEnd={(e, info) => {
                console.log(isDropped[item.id - 1]);
                DragandDrop(info.point.x, info.point.y, item.id, 3);
              }}
              style={{
                visibility: isDropped[item.id - 1]?.scorenum[2]?.dropped
                  ? "hidden"
                  : "block",
              }}
              variants={ScoreBoxVariants}
              drag
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              animate="end"
              dragSnapToOrigin={true}
            ></ScoreBox>
            <ScoreBox
              onPanEnd={(e, info) => {
                console.log(isDropped[item.id - 1]);
                DragandDrop(info.point.x, info.point.y, item.id, 4);
                if (item.id === 3) {
                  nextPage();
                }
              }}
              style={{
                visibility: isDropped[item.id - 1]?.scorenum[3]?.dropped
                  ? "hidden"
                  : "block",
              }}
              variants={ScoreBoxVariants}
              drag
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              animate="end"
              dragSnapToOrigin={true}
            ></ScoreBox>
          </ScoreGrid>
        </Container>
      ))}
      <motion.div id="progressY" style={{ scaleX }}></motion.div>
      <Footer>
        <NextButton onClick={() => navigate("/page2")}>
          <span>다음</span>
        </NextButton>
      </Footer>
    </Wrapper>
  );
}
export default Page1;
