import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios';

export const ContextProvider =createContext(null);

export const server = "http://hn.algolia.com/api/v1";

enum Theme {
    Dark = 'dark',
    Light = 'light',
}
const Context = ({children}:{children:JSX.Element}) => {


    const [loading, setLoading] = useState<boolean>(false);
    const [pageNo, setPageNo] = useState<number>(1);
    const [total, setTotal] = useState<number>(1000);
    const [keyword, setKeyword] = useState<string>("office");
    const [theme, setTheme] = useState<Theme>(Theme.Light);


    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${server}/search?query=${keyword}&page=${3}`);
    
        console.log(data);
        setTotal(data.total)
        setLoading(false);
      
      } catch (error) {
        console.log(error);
      }
    };

    
  useEffect(() => {
    // debouncing
    const timeOut = setTimeout(() => {
      if (keyword !== "") {
            (async () => {
              await fetchData();
            })();
      }
    }, 2000); // minimum wait time will be 2 sec

    return () => {
      console.log("changing")
      clearTimeout(timeOut); // cleanUp request which no longer needed on commentUnmount
    };
  }, [keyword,pageNo]);

  return (
    <ContextProvider.Provider value={{loading,setLoading,pageNo,total,keyword,setKeyword,theme,setTheme,setPageNo,setTotal}}>
    {children}
  </ContextProvider.Provider>
  )
}

export default Context