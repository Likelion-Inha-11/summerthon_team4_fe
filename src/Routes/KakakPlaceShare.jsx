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
  const realUrl = "https://simgeum-test.pages.dev/";
  const resultUrl = "http://localhost:3000/result";

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("10e2c939c093277cef801d187d6fe6e9");
    console.log(Kakao.isInitialized());
  }, []);
  const placeId = placeurl.split("/").pop();
  const shareKakao = () => {
    const shareData = {
      objectType: "feed",
      content: {
        imageUrl: `https://hello-world-weathered-boat-a268.pssfrdvhx5.workers.dev/?id=${placeId}`,
        title: placename,
        description: address,
        link: {
          mobileWebUrl: placeurl,
          webUrl: placeurl,
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: placeurl,
            webUrl: placeurl,
          },
        },
      ],
    };
    console.log(shareData);
    Kakao.Share.sendDefault(shareData);
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
