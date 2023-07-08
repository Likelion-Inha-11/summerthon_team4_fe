import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Routes/Welcome";
import Main from "./Routes/Main";
import Result from "./Routes/Result";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/test" element={<Main />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
