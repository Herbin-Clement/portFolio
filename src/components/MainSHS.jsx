import { useState } from "react";

import Header from "./header/Header";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import Civic from "./civic/Civic";
import Project from "./projects/Projects";
import Footer from "./footer/Footer";

const MainSHS = () => {
  
  const pages = [<Home key={0} isVideo={true}/>, <Resume key={1}/>, <Civic key={2}/>, <Project key={3}/>];
  const pagenames = ["Home", "Resume", "Civic engagement","Project"]

  const [currentPage, setCurrentPage] = useState(0);

  const ChangePage = (n) => {
    setCurrentPage(n);
    document.title = `${pagenames[n]} | Herbin`;
  }

  return (
    <div className="App">
      <Header callback={ChangePage} id={currentPage} pages={pagenames}/>
      {
        pages.map((page, n) => {
          return n === currentPage && page;
        })
      }
      <Footer/>
    </div>
  );
}

export default MainSHS;
