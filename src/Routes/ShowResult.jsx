import ApexCharts from "apexcharts";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 375px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  background-color: #faf9fe;
`;
const Chart = styled(motion.div)``;
const MidDiv = styled.div``;
const Map = styled(motion.div)``;
function ShowResult() {
  return (
    <Wrapper>
      <Chart></Chart>
      <MidDiv></MidDiv>
      <Map></Map>
    </Wrapper>
  );
}
export default ShowResult;
