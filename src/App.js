import Main from "./components/Main";
import MainSHS from "./components/MainSHS";

import "./App.css";

const isMain = false;

const App = () => {
  return (
    <>
      {isMain && <Main/>}
      {!isMain && <MainSHS/>}
    </>
  )
}

export default App;