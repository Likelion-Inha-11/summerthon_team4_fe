import ApexChart from "react-apexcharts";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import KakaoMap from "./KakaoMap";

const Wrapper = styled(motion.div)`
  width: 375px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #faf9fe;
`;
const Title = styled.p`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 24px;
  padding-top: 40px;
`;
const Chart = styled(motion.div)`
  width: 100%;
  max-height: 33vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MidDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  div:first-child {
    grid-column: span 2;
  }
  width: 90%;
  column-gap: 10px;
  row-gap: 10px;
`;
const Detail = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  height: 70px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  p {
    font-family: "Noto Sans KR", sans-serif;\
    font-size: 15px;
  }
`;
const ShareDiv = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  height: 70px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
  }
`;
const OtherTest = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  height: 70px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
  }
`;
const Map = styled(motion.div)`
  width: 90%;
  height: 240px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  p {
    height: 20px;
    width: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 14px;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;
const MapContainer = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Box = styled(motion.div)`
  height: 200px;
  width: 300px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 700px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const BoxVariants = {
  initial: { y: 20, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
const detailTextVariants = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function ShowResult() {
  const [id, setId] = useState(null);

  return (
    <Wrapper>
      <Title>{} 검사 결과</Title>
      <Chart>
        <ApexChart
          style={{ placeSelf: "center" }}
          width={"100%"}
          height={"280px"}
          type="radar"
          series={[
            {
              name: "점수",
              data: [0, 5, 7.5, 10, 5],
            },
          ]}
          options={{
            chart: {
              height: 100,
              width: 100,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["red"],
                stops: [0, 100],
              },
            },
            yaxis: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 0,
            },
            markers: {
              size: 1,
            },
            xaxis: {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: false,
              },
              categories: [
                "집중도",
                "주의력부족",
                "업무 완성도",
                "산만스러움",
                "수다쟁이",
              ],
              labels: {
                show: true,
                style: {
                  fontSize: "11px",
                },
              },
            },
            tooltip: {},
          }}
        ></ApexChart>
      </Chart>
      <AnimatePresence>
        <MidDiv variants={BoxVariants} initial="initial" animate="end">
          <Detail layoutId={1 + ""} onClick={() => setId(1)}>
            <p>자세히보기</p>
          </Detail>
          <ShareDiv layoutId={2 + ""} onClick={() => setId(2)}>
            <p>공유하기</p>
          </ShareDiv>
          <OtherTest layoutId={3 + ""} onClick={() => setId(3)}>
            <p>다른 검사</p>
          </OtherTest>
        </MidDiv>
        <Map layoutId={4 + ""} onClick={() => setId(4)}>
          <p>인근 병원</p>
          <MapContainer>
            <KakaoMap />
          </MapContainer>
        </Map>
      </AnimatePresence>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={OverlayVariants}
            initial="initial"
            animate="end"
            exit="exit"
          >
            <Box variants={OverlayVariants} layoutId={id + ""}>
              {id === 1 ? (
                <p
                  initial="initial"
                  animate="end"
                  variants={detailTextVariants}
                >
                  나는 화가 정말 많습니다.
                </p>
              ) : null}
              {id === 2 ? (
                <p
                  initial="initial"
                  animate="end"
                  variants={detailTextVariants}
                >
                  공유하기
                </p>
              ) : null}
              {id === 3 ? (
                <p
                  initial="initial"
                  animate="end"
                  variants={detailTextVariants}
                >
                  다른검사
                </p>
              ) : null}
              {id === 4 ? (
                <p
                  initial="initial"
                  animate="end"
                  variants={detailTextVariants}
                >
                  카카오맵
                </p>
              ) : null}
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default ShowResult;
