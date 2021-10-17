import React, {useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './VideoSideBar.css';


/*props: properties of constructure */
function VideoSideBar({likes, shares, messages }) {

    const [liked, setLiked ] = useState(false);

    return <div className="videoSideBar">
        <div className="videoSideBar__button">
            {liked ? (
                <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
            ) : (
                <FavoriteBorderIcon 
                    fontSize="large" 
                    onClick={(e) =>setLiked(true)} />
            )}
            <p>{liked ? likes + 1: likes}</p>
        </div>
        <div className="videoSideBar__button">
           <MessageIcon fontSize="large"></MessageIcon> 
            <p>{ messages }</p>
        </div>
        <div className="videoSideBar__button">
            <ShareIcon fontSize="large"></ShareIcon>
            <p>{ shares }</p>
        </div>
    </div>
}


export default VideoSideBar;