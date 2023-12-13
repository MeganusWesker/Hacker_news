import { useContext} from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import { ContextProvider } from "../Context";

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const Home = () => {

  const {theme,setTheme,keyword,setKeyword,pageNo,setPageNo,total}=useContext(ContextProvider);

  const toggleTheme = () => {

    setTheme((prev)=> prev===Theme.Light ? Theme.Dark :Theme.Light);
     const bodyElement = document.body;
      bodyElement.classList.toggle("dark-mode");
  };

  const increment=async()=>{
    console.log(pageNo);
    setPageNo((prev)=> (prev+1) % total)
  }

  const decrement=()=>{
    setPageNo((prev)=> (prev-1) % total)
  }

  return (
    <>
      <Navbar
        setKeyword={setKeyword}
        keyword={keyword}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      {/* banner  */}

      <div id="banner">
        <div>
          <h1>Get High Quality News by Creators</h1>
          <p> Get You're Daily News by our talented Community</p>
        </div>
      </div>



      <div className="paginationConatiner">
        <button onClick={decrement} disabled={pageNo <=1 ? true:false}>prev</button>
        <div className="centerItemsVertically" id="paginationInputDiv">
          <p>Current Page No# {pageNo}</p>
          {/* <input type="number" /> */}
        </div>
  
        <button onClick={increment}>next</button>
      </div>
    </>
  );
};

export default Home;
