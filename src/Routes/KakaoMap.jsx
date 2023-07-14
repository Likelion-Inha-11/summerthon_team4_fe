import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillPhone } from "react-icons/ai";
import KakaoPlaceShare from "./KakakPlaceShare";

const Wrapper = styled(motion.div)`
  width: 768px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #faf9fe;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Box = styled(motion.div)`
  width: 90%;
  max-height: 75vh;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const SearchForm = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SearchBar = styled(motion.input)`
  height: 40px;
  width: 100%;
  margin: 20px 0px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding-left: 15px;
  position: relative;
`;
const SearchBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1.1rem;
  color: black;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  padding-top: 5px;
  margin-left: 7px;
`;
const SearchHeader = styled.form`
  width: 60%;
  position: relative;
`;
const WrapperVariants = {
  load: { opacity: 0 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};
const BoxVariants = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};
const BackBtn = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const MarkerDetail = styled(motion.div)`
  width: 70%;
  height: 5rem;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: -5rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MarkerVariants = {
  initial: { y: -20, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};
const Phone = styled.a``;
const Placename = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  color: blue;
`;
const PlaceCategory = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.9rem;
  position: absolute;
  height: auto;
  left: 0;
  bottom: -1rem;
  opacity: 0.8;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-left: 3rem;
  margin-bottom: 1rem;
`;
const ImgBox = styled.div`
  display: flex;
  width: 20%;
  font-size: 2rem;
  margin-right: 2rem;
`;
const ShareBox = styled.div`
  width: 2rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

function KakaoMap() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [placeInfo, setPlaceInfo] = useState({});
  const [center, setCenter] = useState([]);
  const [markerClicked, setMarkerClicked] = useState(false);
  const [placeshareInfo, setPlaceshareInfo] = useState({});

  const handleSearch = (event) => {
    event.preventDefault();
    getSearchWord();
  };

  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(37.5341203159822, 126.897335759076),
      level: 4,
    };

    const map = new window.kakao.maps.Map(container, options);

    var marker = new window.kakao.maps.Marker({
      map,
      position: new window.kakao.maps.LatLng(
        37.5341203159822,
        126.897335759076
      ),
    });
    marker.setClickable(true);
    window.kakao.maps.event.addListener(marker, "click", function () {
      setMarkerClicked((prev) => !prev);
    });
    setPlaceInfo({ phone: "", place_name: "이레빌딩", category: "기업, 빌딩" });
    setPlaceshareInfo({
      place_name: "이레빌딩",
      address: "서울 영등포구 선유동2로 57",
      placeurl: "https://place.map.kakao.com/1578959890",
    });
    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    const zoomControl = new window.kakao.maps.ZoomControl();

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    // place_name, address_name, place_url

    if (center?.length !== 0) {
      var moveLocation = new window.kakao.maps.LatLng(
        center?.length ? center[0]?.y : null,
        center?.length ? center[0]?.x : null
      );
      map.setCenter(moveLocation);

      var positions = center?.map((item) => {
        return {
          place_name: item?.place_name,
          latlng: new window.kakao.maps.LatLng(item?.y, item?.x),
          phone: item?.phone,
          category: item?.category_group_name,
          address: item?.address_name,
          placeurl: item?.place_url,
        };
      });

      console.log(positions);

      for (let i = 0; i < positions?.length; ++i) {
        var markers = new window.kakao.maps.Marker({
          map,
          position: positions[i]?.latlng,
          place_name: positions[i]?.place_name,
        });
        markers.setClickable(true);
        window.kakao.maps.event.addListener(markers, "click", function () {
          setMarkerClicked((prev) => !prev);
          setPlaceInfo({
            phone: positions[i]?.phone,
            place_name: positions[i]?.place_name,
            category: positions[i]?.category,
          });
          setPlaceshareInfo({
            place_name: positions[i]?.place_name,
            address: positions[i]?.address,
            placeurl: positions[i]?.placeurl,
          });
        });
      }
    }
    console.log(placeshareInfo);
  }, center);
  const getSearchWord = async () => {
    const key = process.env.REACT_APP_REST_API;
    const query = encodeURIComponent(keyword);
    const response = await await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${key}`,
        },
      }
    );
    const json = await response.json();
    console.log(json)
    console.log(json?.documents.slice(0, 6));

    setCenter(json?.documents?.slice(0, 6));
  };

  const phonecall = () => {
    navigate(`tel:+1-${placeInfo?.phone}`);
  };

  return (
    <AnimatePresence>
      <Wrapper
        isMarkerClicked={markerClicked}
        variants={WrapperVariants}
        initial="load"
        animate="show"
        exit="exit"
      >
        <Box variants={BoxVariants} initial="initial" animate="end">
          <SearchForm>
            <SearchHeader onSubmit={(event) => handleSearch(event)}>
              <SearchBar
                onChange={(event) => setKeyword(event.target.value)}
                type="text"
                placeholder="검색"
              ></SearchBar>
              <SearchBtn type="submit">
                <AiOutlineSearch />
              </SearchBtn>
            </SearchHeader>
          </SearchForm>
          <div
            id="map"
            style={{ width: "90%", height: 330, borderRadius: 20 }}
          ></div>
          <BackBtn onClick={() => navigate("/result")}>Back</BackBtn>
          <AnimatePresence>
            {markerClicked ? (
              <MarkerDetail
                variants={MarkerVariants}
                initial="initial"
                animate="end"
                exit="exit"
              >
                <InfoBox>
                  <Placename>{placeInfo?.place_name}</Placename>
                  <PlaceCategory>{placeInfo?.category}</PlaceCategory>
                </InfoBox>
                <ImgBox>
                  <a
                    href={"tel:+1" + placeInfo?.phone}
                    style={{ color: "black" }}
                  >
                    <AiFillPhone style={{ marginRight: 20 }} />
                  </a>
                  <ShareBox>
                    
                    <KakaoPlaceShare
                      placename={placeshareInfo?.place_name}
                      placeurl={placeshareInfo?.placeurl}
                      address={placeshareInfo?.address}
                    ></KakaoPlaceShare>
                  </ShareBox>
                </ImgBox>
                {/* <Phone href={"tel:+1" + placeInfo?.phone}>
                  {placeInfo?.phone}
                </Phone> */}
              </MarkerDetail>
            ) : null}
          </AnimatePresence>
        </Box>
      </Wrapper>
    </AnimatePresence>
  );
}

export default KakaoMap;
