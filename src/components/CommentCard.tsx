import { useState } from "react";
import { ICommentType } from "../util/interface";
import "./commentCard.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export enum ReplyEnum {
  Show = "View Replies",
  Hide = "Hide Replies",
}

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

const CommentCard = ({
  author,
  points,
  text,
  children,
  created_at,
  type,
}: ICommentType) => {
  const [isRepliesOn, setRepliesToggle] = useState<boolean>(false);
  const [replyToggle, setReplyToggle] = useState<ReplyEnum>(ReplyEnum.Show);

  const commentToggleHandler = () => {
    setRepliesToggle((prev) => !prev);
    setReplyToggle((prev) =>
      prev === ReplyEnum.Show ? ReplyEnum.Hide : ReplyEnum.Show
    );
  };

  return (
    <div className="commnetCardContainer">
      <div className="first">
        <div className="centerItemsVertically">
          <p className="commentAuthorAndText">
            <span className="commentAuthor">{author}</span> {text}
          </p>
        </div>
      </div>

      <div className="second">
        <p>{timeAgo.format(new Date(created_at))}</p>
        {points != null && <p>{points} points</p>}
        <p>type:{type}</p>
      </div>

      {children.length > 0 && (
        <div className="third">
          <div></div>
          <p onClick={commentToggleHandler}>
            {replyToggle} ({children.length})
          </p>
        </div>
      )}

      {isRepliesOn &&
        children.map((item) => (
          <CommentCard
            author={item.author}
            children={item.children}
            created_at={item.created_at}
            text={item.text}
            points={item.points}
            type={item.type}
            key={item.id}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default CommentCard;
