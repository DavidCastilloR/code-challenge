import './Comment.css'
import "./../../styling/theme.css";

const Comment = ({comment})=>{
  return (
    <div className='comment-container secondary-color'>
      <p className='user-info'>{comment.name} <br/> ({comment.email})</p>
      <hr className='divider'/>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;