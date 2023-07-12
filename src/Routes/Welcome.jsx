import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
`;
const Svg = styled.svg`
  width: 90%;
  path {
    stroke: gold;
    stroke-width: 4;
  }
`;
const svg = {
  start: {
    fill: "rgba(255,201,0,0)",
    pathLength: 0,
  },
  end: {
    fill: "rgba(255,201,0,1)",
    pathLength: 1,
  },
};
const TestBtn = styled.button`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 80%;
  background-color: #ffc900;
  height: 50px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  color: white;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`;
const KakaoBtn = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  color: #5a94f5;
  font-size: 16px;
  margin-top: 10px;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
  img {
    width: 40px;
    height: 80%;
  }
  p {
    font-weight: 600;
    margin-left: 15px;
  }
`;
const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 140px;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
function Welcome() {
  const navigate = useNavigate();
  const biggerboxref = useRef < HTMLDivElement > null;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  useMotionValueEvent(x, "change", (i) => {
    console.log(i);
  });
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(90deg, #f79d00, #64f38c)",
      "linear-gradient(90deg, #2C3E50, #4CA1AF)",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{}}>
      <Video autoPlay loop muted>
        <source src="bubble.mp4" type="video/mp4" />
      </Video>
      <Svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 793 747"
      >
        <motion.path
          fill="#FAC602"
          opacity="1.000000"
          stroke="gold"
          variants={svg}
          initial={"start"}
          animate={"end"}
          strokeWidth="2"
          transition={{
            default: {
              duration: 2,
            },
            fill: {
              duration: 2,
              delay: 4,
            },
          }}
          d="
M156.127869,548.952148 
   C123.906265,507.480103 104.450706,461.063110 97.781883,409.298096 
   C88.771225,339.355164 103.676743,274.584290 142.310867,215.974197 
   C188.164230,146.412125 253.046524,104.356102 335.289337,91.027039 
   C422.030060,76.968987 499.709045,99.360687 566.664368,155.801041 
   C623.074158,203.351944 656.116211,264.998138 664.407776,338.178162 
   C675.544495,436.469238 643.298218,519.838562 570.360352,586.452271 
   C526.991760,626.060486 475.057312,649.020874 416.630280,656.021667 
   C334.425812,665.871521 261.105896,643.944702 197.421387,591.347717 
   C182.388901,578.932434 169.967270,563.356018 156.127869,548.952148 
M640.785339,322.954895 
   C640.527649,321.818695 640.262146,320.684204 640.013428,319.546051 
   C626.356079,257.050323 595.572327,204.864029 544.936401,165.444580 
   C483.672119,117.751053 414.195343,99.428093 337.411346,112.037781 
   C276.796082,121.992203 225.253281,149.848267 184.500168,195.962570 
   C131.111694,256.374481 108.923187,327.158203 119.020126,407.227020 
   C127.157066,471.752930 155.740524,526.544189 204.512756,569.438477 
   C268.165649,625.420105 342.896088,647.942810 426.573456,632.762878 
   C520.125854,615.791565 586.079224,561.944824 624.587646,475.013123 
   C637.664429,445.492615 644.185974,414.286438 645.105286,381.955933 
   C645.660645,362.424957 644.495117,343.028351 640.785339,322.954895 
z"
        />
        <motion.path
          fill="#FAC502"
          opacity="1.000000"
          stroke="gold"
          variants={svg}
          initial={"start"}
          animate={"end"}
          strokeWidth="2"
          transition={{
            default: {
              duration: 1.5,
              delay: 2,
            },
            fill: {
              duration: 2,
              delay: 4,
            },
          }}
          d="
M392.185059,524.886597 
   C428.689545,525.378906 461.414093,513.832764 492.467041,496.858978 
   C505.449463,489.762695 517.808350,481.514618 530.353394,473.635284 
   C534.693909,470.909088 538.928040,469.935425 543.383423,472.938934 
   C549.760071,477.237671 549.830078,485.919067 543.001404,490.532410 
   C531.971497,497.984070 520.816284,505.323700 509.249695,511.893127 
   C481.407898,527.706299 452.104065,539.652893 420.100281,544.196716 
   C375.720459,550.497681 335.912689,539.615295 300.288300,512.786011 
   C284.914734,501.207947 271.646820,487.454193 259.544556,472.534790 
   C257.413300,469.907532 255.049622,467.468781 252.902023,465.064697 
   C249.312683,468.483795 246.310425,471.617462 243.021652,474.414246 
   C237.692886,478.945770 231.604218,478.698639 227.486115,474.050293 
   C223.362259,469.395508 224.185257,463.072296 229.410919,458.075012 
   C238.097778,449.767853 244.533676,439.980194 248.272903,428.519073 
   C249.040283,426.166992 249.449875,423.684143 249.866913,421.234741 
   C250.783203,415.853058 254.966293,412.025909 260.062897,412.033875 
   C265.258484,412.041992 270.320679,415.638092 270.367737,420.964417 
   C270.416473,426.478241 269.502045,432.337250 267.481750,437.440704 
   C265.338776,442.853973 266.191071,446.571259 269.566589,450.981445 
   C289.339661,476.815552 311.839905,499.362640 341.984100,513.084839 
   C357.799683,520.284424 374.442719,523.860352 392.185059,524.886597 
z"
        />
        <motion.path
          fill="#F8C402"
          opacity="1.000000"
          stroke="white"
          variants={svg}
          initial={"start"}
          animate={"end"}
          strokeWidth="2"
          transition={{
            default: {
              duration: 1,
              delay: 1,
            },
            fill: {
              duration: 2,
              delay: 4,
            },
          }}
          d="
M530.748779,286.379944 
   C531.239563,290.412476 532.235107,294.251709 531.643738,297.828522 
   C530.674622,303.689850 528.825867,309.427490 527.065796,315.130188 
   C525.333435,320.743225 519.811340,323.994751 514.802734,322.706329 
   C508.876343,321.181824 505.422272,315.897125 506.715088,309.804321 
   C508.156586,303.010986 509.867981,296.273834 511.526062,289.528015 
   C512.522705,285.473053 515.041931,282.858246 519.167114,281.869568 
   C523.901367,280.734985 527.626526,282.293549 530.748779,286.379944 
z"
        />
        <motion.path
          fill="#F8C402"
          opacity="1.000000"
          stroke="white"
          variants={svg}
          initial={"start"}
          animate={"end"}
          strokeWidth="2"
          transition={{
            default: {
              duration: 1,
              delay: 1,
            },
            fill: {
              duration: 2,
              delay: 4,
            },
          }}
          d="
M450.004395,290.997131 
   C450.789795,301.718933 446.160522,310.474976 441.269989,318.952301 
   C438.839539,323.165314 432.881897,323.984650 428.748962,321.819672 
   C423.898865,319.279083 421.596283,314.096527 423.377716,308.667480 
   C425.498993,302.202850 427.928070,295.835358 430.359192,289.477600 
   C431.982117,285.233398 435.630432,283.252411 439.784058,283.230347 
   C444.636658,283.204529 448.333466,285.704254 450.004395,290.997131 
z"
        />
      </Svg>
      <BottomWrap>
        <TestBtn onClick={() => navigate("/test")}>Test</TestBtn>
        <KakaoBtn onClick={() => navigate("/login")}>
          <img alt="#" src="img/KakaoLogo.png" />
          <p>Login in with Kakao</p>
        </KakaoBtn>
      </BottomWrap>
    </Wrapper>
  );
}

export default Welcome;
