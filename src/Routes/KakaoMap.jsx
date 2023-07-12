import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  width: 375px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #faf9fe;
`;
const Box = styled(motion.div)`
  width: 90%;
  max-height: 60vh;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchForm = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBar = styled(motion.input)`
  height: 40px;
  width: 85%;
  margin: 20px 0px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding-left: 15px;
`;
const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 26px;
  padding-top: 5px;
  margin-left: 7px;
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

function KakaoMap() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    getSearchWord();
  };
  const [center, setCenter] = useState([]);

  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(37.5341203159822, 126.897335759076),
      level: 4,
    };

    const map = new window.kakao.maps.Map(container, options);

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    const zoomControl = new window.kakao.maps.ZoomControl();

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    if (center?.length !== 0) {
      var moveLocation = new window.kakao.maps.LatLng(
        center?.length ? center[0]?.y : null,
        center?.length ? center[0]?.x : null
      );
      map.setCenter(moveLocation);

      var positions = center.map((item) => {
        return {
          title: item?.place_name,
          latlng: new window.kakao.maps.LatLng(item?.y, item?.x),
        };
      });

      for (let i = 0; i < positions.length; ++i) {
        var marker = new window.kakao.maps.Marker({
          map,
          position: positions[i]?.latlng,
          title: positions[i]?.title,
        });
      }
    }
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
    console.log(json.documents);

    setCenter(json.documents.slice(0, 6));
  };

  return (
    <AnimatePresence>
      <Wrapper
        variants={WrapperVariants}
        initial="load"
        animate="show"
        exit="exit"
      >
        <Box variants={BoxVariants} initial="initial" animate="end">
          <SearchForm onSubmit={(event) => handleSearch(event)}>
            <SearchBar
              onChange={(event) => setKeyword(event.target.value)}
              type="text"
              placeholder="검색"
            ></SearchBar>
            <SearchBtn type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </SearchBtn>
          </SearchForm>
          <div
            id="map"
            style={{ width: "90%", height: 330, borderRadius: 20 }}
          ></div>
          <BackBtn onClick={() => navigate("/result")}>Back</BackBtn>
        </Box>
      </Wrapper>
    </AnimatePresence>
  );
}

export default KakaoMap;
