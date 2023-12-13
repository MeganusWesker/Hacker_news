import { useContext} from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import { ContextProvider } from "../Context";
import Card from "../components/Card";
import { IData } from "../util/interface";

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const Home = () => {

  const {theme,setTheme,keyword,setKeyword,pageNo,setPageNo,total,data}=useContext(ContextProvider);

  console.log(data)
 

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

      <div className="cardContainer">
        {data && data.map((item:IData,index:number)=>(
            <Card
              title={item.title}
              key={item.objectID}
              objectId={item.objectID}
              author={item.author}
              numComments={item.num_comments}
              createdAt={item.created_at}
              updatedAt={item.updated_at}
              storyId={item.story_id}
              points={item.points}
              index={index}
            />
        ))}
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
