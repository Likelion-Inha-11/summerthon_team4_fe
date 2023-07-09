import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Routes/Welcome";
import Main from "./Routes/Main";
import ShowResult from "./Routes/ShowResult";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/test" element={<Main />}></Route>
        <Route path="/result" element={<ShowResult />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
