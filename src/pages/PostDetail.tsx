import { useParams } from "react-router-dom";
import axios from "axios";
import { ContextProvider, server } from "../Context";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { IPostType, Theme } from "../util/interface";
import "./PostDetail.css";
import TimeAgo from "javascript-time-ago";

// // English.
import en from "javascript-time-ago/locale/en";
import CommentCard from "../components/CommentCard";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

const initialPostValue: IPostType = {
  title:"",
  author:"",
  points:0,
  type:"",
  created_at:String (new Date()),
  children:[]
};

const PostDetail = () => {
  const { theme, keyword, setKeyword, setTheme } = useContext(ContextProvider);

  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<IPostType>(initialPostValue);

  let { id } = useParams();

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light));
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`${server}/items/${id}`);
      console.log(data);
      setPost(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar
        setKeyword={setKeyword}
        keyword={keyword}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="postDetailMainContaner">
          <h1 className="postInfoTitle centerItemsVertically">
            Post D<p>etails</p>
          </h1>
          <div className="postDetailInfoContiner">
            <h1>#{post.title}</h1>

            <div className="centerItemsVertically cardInfo">
              <p>Author:</p>
              <p>{post.author}</p>
            </div>

            <div className="centerItemsVertically cardInfo">
              <p>Points:</p>
              <p>{post.points}</p>
            </div>

            <div className="centerItemsVertically cardInfo">
              <p>Type:</p>
              <p>{post.type}</p>
            </div>

            {post.created_at !== undefined && (
              <div className="centerItemsVertically cardInfo">
                <p>Posted:</p>
                <p>{timeAgo.format(new Date(post.created_at))}</p>
              </div>
            )}

            <div className="commentsContainer">
               <h1>Comments</h1>
               {post.children?.length> 0 && post.children.map((item)=>(
                 <CommentCard
                    author={item.author}
                    children={item.children}
                    created_at={item.created_at}
                    story_id={item.story_id}
                    id={item.id}
                    text={item.text}
                    points={item.points}
                    parent_id={item.parent_id}
                    type={item.type}
                 />
               ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
