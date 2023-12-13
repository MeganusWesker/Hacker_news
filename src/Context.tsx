import {createContext,useState,useEffect} from 'react'
import axios from 'axios';
import { IContextType,IData,Theme } from './util/interface';

const initialContextValues: IContextType = {
  loading: false,
  setLoading: () => {},
  pageNo: 1,
  setPageNo: () => {},
  total: 1000,
  setTotal: () => {},
  keyword: "office",
  setKeyword: () => {},
  theme: Theme.Light,
  setTheme: () => {},
  data: [],
};

export const ContextProvider = createContext<IContextType>(initialContextValues);

export const server = "http://hn.algolia.com/api/v1";


const Context = ({children}:{children:JSX.Element}) => {


    const [loading, setLoading] = useState<boolean>(false);
    const [pageNo, setPageNo] = useState<number>(1);
    const [total, setTotal] = useState<number>(1000);
    const [keyword, setKeyword] = useState<string>("office");
    const [theme, setTheme] = useState<Theme>(Theme.Light);
    const [data, setData] = useState<IData[]>([]);

    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${server}/search?query=${keyword}&page=${3}`);
    
        setTotal(data.total)
        setData(data.hits);
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
    <ContextProvider.Provider value={{loading,setLoading,pageNo,total,keyword,setKeyword,theme,setTheme,setPageNo,setTotal,data}}>
    {children}
  </ContextProvider.Provider>
  )
}

export default Context