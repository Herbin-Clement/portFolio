import { useState } from "react";

import Header from "./header/Header";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

const Main = () => {
  
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

export default Main;
