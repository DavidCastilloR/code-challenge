import './PostItem.css';
import './../../styling/theme.css';
import Button from './../Button/Button';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


const PostItem = ({ post }) => {
  const history = useHistory();
  return (
    <div className='primary-color blog-item'>
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>

      <Button onClick={() => history.push({ pathname: 'viewPost', state: { post: post } })} title='View' />

    </div>);

};

PostItem.defaultProps = {
  post: {},
};

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;