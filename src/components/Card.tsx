import TimeAgo from 'javascript-time-ago'
import "./card.css"
import { ICardProps } from '../util/interface'
import { Link } from 'react-router-dom'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

const Card = ({objectId,author,points,storyId,title,index,numComments,createdAt,updatedAt}:ICardProps) => {
  return (
    <Link to={`/${objectId}`} className='card'>
      <h1>{title}</h1>
      <div className='centerItemsVertically cardInfo'>
        <p>Author:</p>
        <p>{author}</p>
      </div>

      <div className='centerItemsVertically cardInfo'>
        <p>Points:</p>
        <p>{points}</p>
      </div>

      <div className='centerItemsVertically cardInfo'>
        <p>Comments:</p>
        <p>{numComments}</p>
      </div>

      <div className='centerItemsVertically cardInfo'>
        <p>Posted:</p>
        <p>{timeAgo.format(new Date(createdAt))}</p>
      </div>

      <div className='centerItemsVertically cardInfo'>
        <p>Modified:</p>
        <p>{timeAgo.format(new Date(updatedAt))}</p>
      </div>


    </Link>
  )
}

export default Card