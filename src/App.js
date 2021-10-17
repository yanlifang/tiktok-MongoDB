import React, { useState, useEffect } from 'react';
import axios from './axios';
import Video from "./Video";

import './App.css';

function App() {

  const [videos, setVideos ] = useState([]);

  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares }) => (
          <Video url={url}
          channel= {channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        ))}
        
      </div>
      
    </div>
  );
}

export default App;
