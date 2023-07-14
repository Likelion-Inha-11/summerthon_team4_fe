import { useEffect } from "react";
import ShowResult from "./ShowResult";
import { useRecoilValue } from "recoil";
import { testName } from "../atom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    margin-left: 0.3rem;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;
const { Kakao } = window;

function KakaoShare({ totalscore }) {
  // 배포한 웹 사이트 주소 나중에 넣을 것
  const realUrl = "https://tkfkdtkfkdgoyo.github.io/hiMakeum/";
  const resultUrl = "http://localhost:3000/result";

  const testId = useRecoilValue(testName);

  function gettestName() {
    if (testId === 1) {
      return "ADHD";
    } else if (testId === 2) {
      return "분노 조절 장애";
    } else if (testId === 3) {
      return "알코올 중독";
    } else if (testId === 4) {
      return "우울증";
    }
  }

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("10e2c939c093277cef801d187d6fe6e9");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 심금 테스트",
        description: `나는 ${gettestName()} 테스트를 해봤는데\n${totalscore}점이 나왔어 !!`, //자신이 진행한 검사에 대한 설명 조금 const로 적어야 할까?
        imageUrl:
          "https://raw.githubusercontent.com/Likelion-Inha-11/summerthon_team4_fe/main/public/img/simfinally.jpg",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "너도 해볼래?",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <Container
      onClick={() => {
        shareKakao();
      }}
    >
      <img src="img/Kakao3D.png"></img>
      <p>공유하기</p>
    </Container>
  );
}

export default KakaoShare;
