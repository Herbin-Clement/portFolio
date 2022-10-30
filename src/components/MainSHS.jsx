import { useState } from "react";

import Header from "./header/Header";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import Footer from "./footer/Footer";

const MainSHS = () => {
  
  const pages = [<Home key={0} isVideo={true}/>, <Resume key={1}/>];
  const pagenames = ["Home", "Resume"]

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
