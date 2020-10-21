import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from 'react-ticker';
function VideoFooter({channel,song,likes,shares,avatarSrc}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc}/>
    <h3>{channel}</h3>
                <Button>Follow</Button>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__some"/>
             
                <Ticker mode="smooth">
        {({ index }) => (
            <>
                <h1>{song}</h1>
            </>
        )}
    </Ticker>
            </div>
            <div className="videoFooter__icons">
            <div className="videoFooter__stat">
                <FavoriteIcon/>
                <ModeCommentIcon/>
                <SendIcon/>
                <MoreHorizIcon/>
            </div>
            <div className="videoFooter__stat">
            <div className="videoFooter__fav">
                <FavoriteIcon/>
        <p>{likes}</p>
            </div>
            <div className="videoFooter__fav">
                <ModeCommentIcon/>
        <p>{shares}</p>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default VideoFooter
