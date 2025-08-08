import '../App.css';
import { Link } from 'react-router-dom';


// ListItem.js
function ListItem({ imageSrc, title, date, likes, onLike, linkUrl }) {
  return (
    <div className='list'>
      <div className="thumb_box">
        <Link to={linkUrl}><img src={imageSrc} alt="이미지삽입" title='이미지삽입' /> </Link>
      </div>
      <div className="text_box">
        <h4 style={{ height: "30px"}}>
          <Link to={linkUrl} className='text_title'>{title}</Link>
          <span onClick={onLike} style={{ paddingLeft: "8px", cursor: "pointer" }}>👍</span>
          <span className='tx_point'>{likes}</span>
        </h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default ListItem;
