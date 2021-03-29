import './../../styling/theme.css';
import './FullPost.css';
import Comment from './../Comment/Comment';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './../Button/Button';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCommentsAction, addCommentAction } from './../../redux/store';


const FullPost = ({ location: { state: { post } } }) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);
  const [myComment, setMyComment] = useState('');
  const reduxComments = useSelector(state => state.comments);
  const userInSession = useSelector(state => state.userInSession);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMyComment(event.target.value)
  }

  const handleSubmit = ()=>{
    const comment = {
      id: comments.length,
      postId: post.id,
      name: userInSession.name,
      email: userInSession.email,
      body: myComment,
    }
    dispatch(addCommentAction(comment));
    setComments([...comments,comment]);
    setMyComment('');
  }

  useEffect(() => {

    reduxComments.length === 0 ?
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(result => {
          setComments(result.data.filter(e => e.postId === post.id));
          dispatch(setCommentsAction(result.data));
        })
        .catch(() => setError(true))
      :
      setComments(reduxComments.filter(e => e.postId === post.id));



  }, []);

  return (
    <div className='primary-color blog-item'>
      <Button onClick={() => history.push('/')} title='Go Back' />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {comments.map(e => (<Comment comment={e} />))}
      {error && <p className='header-font'>Error: Could not get data</p>}
      <div className='input-container'>
        <input className='input' value={myComment} onChange={handleChange} /> <Button onClick={handleSubmit} title='Submit' />
      </div>
    </div>
  );
};

export default FullPost;