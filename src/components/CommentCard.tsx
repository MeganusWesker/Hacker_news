import { ICommentType } from '../util/interface'
import './commentCard.css'

const CommentCard = ({author,points,story_id,title,children,id,created_at,parent_id}:ICommentType) => {
    console.log(title);
  return (
    <div className='commnetCardContainer'>
        <div className="first">
            <div className='centerItemsVertically'>
              <h3>{author}</h3>
              <p>{title}</p>
            </div>
        </div>

    </div>
  )
}

export default CommentCard