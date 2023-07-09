import ApexChart from "react-apexcharts";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import KakaoMap from "./KakaoMap";
import { useNavigate } from "react-router-dom";

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
  overflow: scroll;
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
const Img = styled.img``;
const ResultDetail = styled.div``;
const ResultText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 15px;
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
  exit: { opacity: 0 },
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
const GoTestQuestion = styled.p`
  font-family: "Noto Sans KR", sans-serif;
`;
const GoTestBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  margin-top: 10px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

function ShowResult() {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([2.5, 5, 5, 10, 7.5, 10, 7.5, 10, 2.5, 7.5]);
  });

  useEffect(() => {
    const container = document.querySelector(".map");
    const options = {
      center: new window.kakao.maps.LatLng(37.566535, 126.9779692),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    const zoomControl = new window.kakao.maps.ZoomControl();

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <Wrapper>
      <Title>IED 검사 결과</Title>
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
              height: 600,
              width: 600,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            colors: ["blue"],
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
              width: 4,
            },
            markers: {
              size: 0.5,
              hover: {
                size: 1,
                sizeOffset: 3,
              },
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
            tooltip: {
              marker: {
                show: false,
              },
            },
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
            <div
              className="map"
              style={{ width: "300px", height: "200px", borderRadius: "20px" }}
            ></div>
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
            {id === 1 ? (
              <Box
                style={{
                  width: 330,
                  height: 500,
                  zIndex: 90,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                variants={OverlayVariants}
                layoutId={id + ""}
              >
                <ResultText>각 문제의 채점 결과입니다.</ResultText>
                <div style={{ height: 400, width: 340 }}>
                  <ApexChart
                    type="line"
                    series={[
                      {
                        name: "점수",
                        // data: data?.map((price) => price.close) ?? [],
                        data: data,
                      },
                    ]}
                    options={{
                      chart: {
                        height: "100%",
                        width: "100%",
                        background: "transparent",
                        toolbar: {
                          show: false,
                        },
                      },
                      yaxis: {
                        show: true,
                      },
                      fill: {
                        type: "gradient",
                        gradient: {
                          gradientToColors: ["blue"],
                          stops: [0, 100],
                        },
                      },
                      colors: ["red"],
                      stroke: {
                        curve: "smooth",
                        width: 2,
                      },
                      xaxis: {
                        axisTicks: {
                          show: true,
                        },
                        axisBorder: { show: true },
                        labels: { show: true },
                        // categories: data?.map((data) =>
                        //   new Date(parseInt(data.time_close) * 1000)
                        //     .toISOString()
                        //     .substring(0, 10)
                        // ),
                        categories: data.map((item, index) => index + 1 + "번"),
                      },
                      tooltip: {
                        y: {
                          // formatter: (value) => `$${value.toFixed(2)}`,
                        },
                      },
                    }}
                  />
                </div>
                <Img></Img>
                <ResultDetail></ResultDetail>
              </Box>
            ) : null}
            {id === 2 ? (
              <Box variants={OverlayVariants} layoutId={id + ""}></Box>
            ) : null}
            {id === 3 ? (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                variants={OverlayVariants}
                layoutId={id + ""}
              >
                <img width="120" height="120" src="img/sim2.png"></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <GoTestQuestion>다음 검사를 원하시나요?</GoTestQuestion>
                  <GoTestBtn onClick={() => navigate("/test")}>Go</GoTestBtn>
                </div>
              </Box>
            ) : null}
            {id === 4 ? (
              <Box
                style={{ width: 330, height: 500 }}
                variants={OverlayVariants}
                layoutId={id + ""}
              >
                <div
                  className="map"
                  style={{
                    width: "400px",
                    height: "600px",
                    position: "absolute",
                    borderRadius: "20px",
                  }}
                ></div>
              </Box>
            ) : null}
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default ShowResult;
