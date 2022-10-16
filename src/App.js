import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  
  const pages = [<Home key={0}/>, <Resume key={1}/>, <Projects key={2}/>];
  const pagenames = ["Home", "Resume", "Projects"]

  const [currentPage, setCurrentPage] = useState(0);

  const ChangePage = (n) => {
    setCurrentPage(n);
    document.title = `${pagenames[n]} | Herbin`;
  }

  return (
    <div className="App">
      <Header callback={ChangePage} id={currentPage}/>
      {
        pages.map((page, n) => {
          return n === currentPage && page;
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
