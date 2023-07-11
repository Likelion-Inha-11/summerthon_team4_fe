import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Routes/Welcome";
import Main from "./Routes/Main";
import ShowResult from "./Routes/ShowResult";
import Page2 from "./Routes/Page2";
import Page3 from "./Routes/Page3";
import KakaoMap from "./Routes/KakaoMap";
import Loading from "./Routes/Loading";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/test" element={<Main />}></Route>
        <Route path="/result" element={<ShowResult />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/load" element={<Loading />}></Route>
        <Route path="/map" element={<KakaoMap />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
