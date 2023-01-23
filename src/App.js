import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://www.reddit.com/r/refragcsgo.json')
    .then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);
      setPosts(newPosts);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <h1>REFRAG.GG Subreddit</h1>
      </header>
      <div className="List">
        <ul>
            {posts.map((post) => (
              <li key={post.id}> <img src={post.thumbnail} /> {post.author}:
                <a href={post.url}> {post.title}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
