import { useEffect } from "react";
import ShowResult from "./ShowResult";
import { useRecoilValue } from "recoil";
import { testName } from "../atom";
import styled from "styled-components";
import { LiaShareSquareSolid } from "react-icons/lia";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const { Kakao } = window;

function KakaoPlaceShare({ placename, placeurl, address }) {
  // 배포한 웹 사이트 주소 나중에 넣을 것
  const realUrl = "https://tkfkdtkfkdgoyo.github.io/hiMakeum/";
  const resultUrl = "http://localhost:3000/result";

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("95b3e189034a38db86ef0291efef7585");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: placename,
        description: address,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "자세히 보기",
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
      <LiaShareSquareSolid />
    </Container>
  );
}

export default KakaoPlaceShare;
