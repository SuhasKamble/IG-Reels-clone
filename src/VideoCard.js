import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'
function VideoCard({channel,avatarSrc,song,likes,shares,url}) {
    const [isPlayingVideo,setIsVideoPlaying] = useState(false)
    const videoPlay = useRef(null)

    const playPauseVideo=()=>{
        if(isPlayingVideo){
            //stop
            videoPlay.current.pause()
            setIsVideoPlaying(false)
        }
        else{
            videoPlay.current.play()
            setIsVideoPlaying(true)
        }
        
    }

    return (
        <div className='videoCard'>
            <VideoHeader/>
            <video className="videoCard__video" 
            ref={videoPlay}
            onClick={playPauseVideo}
            src={url} loop></video>
        <VideoFooter
        channel={channel}
        song={song}
        likes={likes}
        avatarSrc={avatarSrc}
        shares={shares}

        />
        </div>
    )
}

export default VideoCard
