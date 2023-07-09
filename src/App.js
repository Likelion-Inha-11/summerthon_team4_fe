import Router from "./Router";
import GlobalStyle from "./Global";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <AnimatePresence>
          <Router></Router>
        </AnimatePresence>
      </RecoilRoot>
    </>
  );
}

export default App;
