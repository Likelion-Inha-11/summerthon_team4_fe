import ApexChart from "react-apexcharts";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import KakaoMap from "./KakaoMap";
import KakaoShare from "./KakaoShare";
import { useLocation, useNavigate } from "react-router-dom";
import { testName, testResult } from "../atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Wrapper = styled(motion.div)`
  width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #faf9fe;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.p`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 2rem;
`;
const Chart = styled(motion.div)`
  width: 100%;
  height: 12rem;
  margin-left: 15px;
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
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;
const Detail = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  height: 3.7rem;
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
  height: 3.7rem;
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
  height: 3.7rem;
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
  height: 90%;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  p {
    height: 1rem;
    width: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    margin-left: 30px;
    margin-top: 13px;
  }
`;
const MapContainer = styled(motion.div)`
  width: 100%;
  padding: 1rem 1rem;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
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
  overflow: scroll-y;
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
const Img = styled.img`
  width: 50%;
  height: 140px;
`;
const ResultDetail = styled.div``;
const ResultText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-top: 15px;
  width: 100%;
  height: 30px;
  text-align: center;
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
const Status = styled.div`
  background: url("img/sim${(props) => props.status}.png");
  width: 100px;
  height: 50px;
  background-color: transparent;
  margin-bottom: 10px;
`;
const StatusTitle = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`;
const StatusDetail = styled.p`
  padding: 0px 23px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-family: "Noto Sans KR", sans-serif;
`;
const DetailBox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  overflow: scroll;
  border-radius: 30px;
  width: 330px;
  max-height: 60vh;
  box-sizing: border-box;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ShowResult() {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const [map, setMap] = useState(null);

  const testId = useRecoilValue(testName); // STRING
  const [result, setResult] = useRecoilState(testResult);
  const [detailimg, setDetailimg] = useState("");

  // 각 Test의 총합 점수 => 양호, 주의, 의심, 위험 판단
  // 각 Content의 점수합 필요

  const [totalscore, setTotalScore] = useState(0);
  const [status, setStatus] = useState("");
  const [detailstatus, setDetailstatus] = useState("");

  const [detailTitle, setDetailTitle] = useState([]);
  const [detailresult, setDetailresult] = useState([]);

  useEffect(() => {
    handleAll();
    handleDetail();
    console.log(result);
  }, []);
  const handleDetail = async () => {
    let f = 0;
    let ff = 0;
    let fff = 0;
    let ffff = 0;
    let fffff = 0;
    for (let i = 0; i < result.length; ++i) {
      if (i < 2) {
        f += result[i]?.score;
      } else if (i < 4) {
        ff += result[i]?.score;
      } else if (i < 6) {
        fff += result[i]?.score;
      } else if (i < 8) {
        ffff += result[i]?.score;
      } else if (i < 10) {
        fffff += result[i]?.score;
      }
    }
    setDetailresult([f, ff, fff, ffff, fffff]);
    console.log(detailresult);
  };
  const handleAll = () => {
    let sum = 0;
    result?.map((item) => (sum += item?.score));
    setTotalScore(sum);

    if (testId === 1) {
      setDetailTitle([
        "집중도",
        "주의력 부족",
        "업무 완성도",
        "산만스러움",
        "수다쟁이",
      ]);
    } else if (testId === 2) {
      setDetailTitle([
        "참을성 부족",
        "충동성",
        "관용 부족",
        "폭력성",
        "수용력 부족",
      ]);
    } else if (testId === 3) {
      setDetailTitle([
        "의존성",
        "욕구 통제불가",
        "참을성 부족",
        "사회 영향",
        "증상발현 위험",
      ]);
    } else {
      setDetailTitle([
        "에너지 부족",
        "신체적인 변화",
        "자기 통제 불가",
        "피로감",
        "무기력증",
      ]);
    }

    if (sum < 40) {
      setStatus("양호");
      setDetailimg("img/sim1.png");
      if (testId === 1) {
        setDetailstatus(
          "당신은 매사 침착함을 유지하며 일상생활을 꾸려 나갈 수 있는 사람이군요! 차분하게 주어진 일을 해결할 줄도 알고, 자기 일에 집중할 수 있는 사람입니다. 건강한 성격으로 하루하루 활기차게 보내시길 바랍니다. "
        );
      } else if (testId === 2) {
        setDetailstatus(
          "분노조절장애 검사 결과가 양호하게 나왔습니다! 이는 당신이 자신의 감정을 더 잘 이해하고, 효과적으로 조절하는 방법을 터득한 사람이라는 것입니다. 안정적인 성격으로 하루하루 활기차게 보내시길 바랍니다. "
        );
      } else if (testId === 3) {
        setDetailstatus(
          "알코올 중독은 극도로 어려운 과제일 수 있으며, 이를 양호하게 이겨내다니 정말로 자랑스러운 일입니다. 이제부터 더 건강하고 균형 잡힌 삶을 즐길 수 있을 것입니다. 당신은 용기와 결단력을 가진 사람으로서 자신의 변화와 성장을 이뤄냈습니다."
        );
      } else {
        setDetailstatus(
          "당신은 매사 긍정적이고 행복한 하루하루를 살아가고 있는 사람이군요. 차분하게 주어진 일을 해결할 줄도 알고, 활기차게 자신의 일상에 집중할 수 있는 사람입니다. 건강한 성격으로 더욱 밝은 나날들을 보냈으면 좋겠어요! "
        );
      }
    } else if (sum < 60) {
      setStatus("주의");
      setDetailimg("img/sim2.png");
      if (testId === 1) {
        setDetailstatus(
          "평소에 자신이 조금 산만한 사람인 것 같다고 느끼는 순간이 있지 않나요? 집중하고 싶은 일에 쉽게 몰입하지 못해서 속상한 적이 있을 것 같아요. 업무의 완성도가 떨어지거나 지나치게 말이 많아진 적은 없는지 자기의 행동을 돌아보는 건 어떨까요!"
        );
      } else if (testId === 2) {
        setDetailstatus(
          "자신이 참을성이 부족하다고 느끼거나 폭력적인 면모를 드러낼 때가 가끔 있지 않나요? 분노를 쉽게 조절하지 못해서 속상했을 때가 있었으리라 생각해요. 결과를 통해 더 나은 감정 조절과 적절한 대처 방법을 배우고 성장할 기회로 만들었으면 좋겠어요!"
        );
      } else if (testId === 3) {
        setDetailstatus(
          "술을 그만 마셔야 하는데 참지 못하고 더 마실 때가 가끔 있지 않나요? 자신이 술에 의존적인 사람일 수도 있다는 생각을 한 번 정도 했을 거예요. 검사 결과를 통해서 알코올 중독에 있어서 주의를 받아서 의기소침해질 수 있지만, 자신을 조금 더 들여본다면 분명 더 나은 삶을 영위할 수 있다고 생각해요. "
        );
      } else {
        setDetailstatus(
          "평소에 에너지가 부족하거나 쉽게 피로감을 느낀 적이 있지 않나요? 우울증의 먹구름이 조금씩 당신의 일상을 침투하고 있지만, 너무 좌절하지 말아요! 이미 자신을 돌아보려고 하는 용기에서부터 당신은 천천히 달라지는 중이랍니다. "
        );
      }
    } else if (sum < 80) {
      setStatus("의심");
      setDetailimg("img/sim3.png");
      if (testId === 1) {
        setDetailstatus(
          "당신은 해야 할 일은 많은데 쉽게 집중하지 못하고, 산만한 성격으로 일의 완성도가 현저히 떨어질 때가 종종 있는 것 같아요. 성인 ADHA가 의심스럽다는 사실이 처음에는 조금 불안하고, 혼란스러울 수 있습니다. 하지만 이는 당신의 성장과 변화를 위한 기회라고 생각하면 좋을 것 같아요!"
        );
      } else if (testId === 2) {
        setDetailstatus(
          "화를 참지 못하는 자기의 모습 때문에 속상한 적이 많았을 거예요. 한 번의 검사 결과로 자신의 모든 것을 판단하지 않았으면 분노조절장애가 의심된다는 사실을 당신의 성장과 변화를 위한 기회라고 생각하면 좋을 것 같아요!"
        );
      } else if (testId === 3) {
        setDetailstatus(
          "술로 인해서 손이 떨리거나 취기로 인해 일상생활이 힘든 적이 있었나요? 알코올 앞에서 자제력을 쉽게 잃는 자기 모습을 보면 속상한 적이 있을 거예요. 술과 관련된 고민을 해결하고 싶다면 자신을 조금 더 살펴보면 좋을 것 같아요! "
        );
      } else {
        setDetailstatus(
          "매사 무기력하다고 느끼거나 갑자기 우울감이 밀려오진 않나요? 우울증 의심이라는 결과를 보았을 때도 자신이 조금 작아진다고 느낄 수도 있었을 것 같아요. 그래도 자신의 우울한 면을 돌보려고 하는 것 자체가 큰 도전이라고 생각해요!"
        );
      }
    } else if (sum < 100) {
      setStatus("위험");
      setDetailimg("img/sim4.png");
      if (testId === 1) {
        setDetailstatus(
          "업무의 완성도나 일상생활에서의 집중력이 부족해서 속상한 적이 많았을 거예요. 성인 ADHD 검사 결과가 위험으로 판단된다면 그것은 당신에게 큰 부담일 수 있습니다. 하지만, 이 결과가 당신의 모든 것을 판단하는 것은 아니기에 용기를 내서 자기 행복과 안정을 위해 치료의 과정을 밟는 것은 어떨까요? "
        );
      } else if (testId === 2) {
        setDetailstatus(
          "이러한 결과를 받아서 매우 혼란스러울 수도 있을 것 같아요. 분노조절장애 검사 결과가 위험으로 판단된다면 그것은 상당한 충격일 수도 있겠지만, 당신의  가치나 인격에 대해 모든 걸 말해주진 않아요. 그렇지만, 분노 조절에 있어서 스트레스를 받는다면 한 번쯤은 자신의 상태에 대해 고민해봐도 좋을 것 같아요!"
        );
      } else if (testId === 3) {
        setDetailstatus(
          "술에 너무 의존하는 자기 모습을 보고 한심하다고 느껴본 적이 있으신가요? 술 앞에서 통제력을 잃고, 일상생활까지 부정적인 영향을 끼칠 때 속이 많이 상했을 것 같아요. 알코올 중독 위험이라는 결과가 당신의 모든 것을 말해주진 않지만, 조금 더 나은 내일을 위해서 자신의 상태를 직면하는 용기를 가지는 건 어떨까요? "
        );
      } else {
        setDetailstatus(
          "우울증 증상이 심해져서 몸무게 줄어들었거나 무기력하고, 피로감을 일상에 안고 살아간다고 느끼지 않나요? 위험이라는 결과를 보았을 때 자신의 상태가 막막하다고 생각할 수 있을 것 같아요. 그런데도 현재를 마주하려는 용기는 당신의 더 나은 내일을 위해 꼭 필요했다고 생각해요!"
        );
      }
    }

    console.log(result);
  };
  function WhatStatus() {
    if (status === "양호") {
      return 1;
    } else if (status === "주의") {
      return 2;
    } else if (status === "의심") {
      return 3;
    } else if (status === "위험") {
      return 4;
    }
  }

  const testTitle = ["ADHD", "IED", "Alcoholism", "Depression"];

  return (
    <Wrapper>
      <Title>{testTitle[testId - 1]} 검사 결과</Title>
      <Chart>
        <ApexChart
          style={{ placeSelf: "center", zIndex: 10 }}
          width={"100%"}
          height={"280px"}
          type="radar"
          series={[
            {
              name: "점수",
              data: detailresult.map((v) => v),
            },
          ]}
          options={{
            chart: {
              height: 600,
              width: "100%",
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
              size: 0,
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
              categories: detailTitle.map((item) => item),
              labels: {
                show: true,
                style: {
                  fontSize: "8px",
                  fontWeight: 600,
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
      <MidDiv variants={BoxVariants} initial="initial" animate="end">
        <Detail
          layoutId={1 + ""}
          onClick={() => {
            setId(1);
          }}
        >
          <p>자세히보기</p>
        </Detail>
        <ShareDiv>
          <KakaoShare />
        </ShareDiv>
        <OtherTest layoutId={3 + ""} onClick={() => setId(3)}>
          <p>다른 검사</p>
        </OtherTest>
      </MidDiv>
      <Map layoutId={4 + ""} onClick={() => setId(4)}>
        <p>인근 병원</p>
        <MapContainer>
          <img src="img/map.png" width="100%" alt="Map" height="100%"></img>
        </MapContainer>
      </Map>
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
              <DetailBox variants={OverlayVariants} layoutId={id + ""}>
                <ResultText>채점 결과 총합 {totalscore}점 입니다.</ResultText>
                <div style={{ height: 340, width: 340 }}>
                  <ApexChart
                    type="line"
                    series={[
                      {
                        name: "점수",
                        // data: data?.map((price) => price.close) ?? [],
                        data: result?.map((item) => item?.score),
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
                        categories: result?.map(
                          (item, index) => index + 1 + "번"
                        ),
                      },
                      tooltip: {
                        // y: {
                        //   // formatter: (value) => `$${value.toFixed(2)}`,
                        // },
                      },
                    }}
                  ></ApexChart>
                </div>
                <Img src={detailimg}></Img>
                <StatusTitle>만족</StatusTitle>
                <StatusDetail>{detailstatus}</StatusDetail>
                <ResultDetail></ResultDetail>
              </DetailBox>
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
                <img
                  alt="심금"
                  width="120"
                  height="120"
                  src="img/sim2.png"
                ></img>
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
            {id === 4
              ? navigate("/map", {
                  state: {
                    id: id,
                  },
                })
              : null}
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default ShowResult;
