import { useState, useEffect } from 'react';
import logo from './assets/img/newspaper.svg';
import './App.css';
import './styling/theme.css';
import PostItem from './components/PostItem/PostItem';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPostsAction } from './redux/store';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const reduxPosts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    reduxPosts.length === 0 ?
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
          setPosts(result.data);
          dispatch(setPostsAction(result.data));
        })
        .catch(() => setError(true))
      :
      setPosts(reduxPosts);
  }, []);
  return (
    <div className='App'>
      <header className='App-header '>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='header-font'>
          Blog Feed
        </h1>
      </header>

      {posts.map(e => (<PostItem post={e} key={e.id} />))}
      {error && <p className='header-font'>Error: Could not get data</p>}

    </div>
  );
}

export default App;
