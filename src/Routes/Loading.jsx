import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { testResult } from "../atom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #faf9fe;
`;

function Loading() {
  const { state } = useLocation();
  const { score7, score8, score9, score10 } = state;

  const navigate = useNavigate();

  const setResult = useSetRecoilState(testResult);

  const nextPage = () => {
    navigate("/result");
  };

  useEffect(() => {
    setResult((obj) =>
      obj.map((item) => {
        if (item?.idx === 7) {
          return {
            ...item,
            score: score7,
          };
        } else if (item?.idx === 8) {
          return {
            ...item,
            score: score8,
          };
        } else if (item?.idx === 9) {
          return {
            ...item,
            score: score9,
          };
        } else if (item?.idx === 10) {
          return {
            ...item,
            score: score10,
          };
        }
        return item;
      })
    );
    setTimeout(nextPage(), 3000);
  });

  return <Wrapper></Wrapper>;
}
export default Loading;
