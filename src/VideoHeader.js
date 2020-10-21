import React from 'react'
import './VideoHeader.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIcon/>
            <h3>SK Reels</h3>
            <CameraAltOutlinedIcon/>
        </div>
    )
}

export default VideoHeader
