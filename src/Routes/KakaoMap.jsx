import React, { useEffect } from "react";
import styled from "styled-components";

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
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
    <>
      <div
        id="map"
        style={{ width: "300px", height: "200px", borderRadius: "20px" }}
      ></div>
    </>
  );
}

export default KakaoMap;
