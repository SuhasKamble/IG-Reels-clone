import React, { useEffect, useState } from 'react'
import './App.css'
import db from './firebase';
import VideoCard from './VideoCard'
function App() {
  const [reels,setReels] = useState([]);

  useEffect(()=>{
    db.collection('reels').onSnapshot(snapshot=>{
      setReels(snapshot.docs.map(doc=>doc.data()))
    })
  },[])
  return (
    <div className="app">
  
      <div className="app__videos">

        {reels.map(reel=>(
        <VideoCard
        channel={reel.channel}
        avatarSrc={reel.avatarSrc}
        song={reel.song}
        likes={reel.likes}
        shares={reel.shares}
        url={reel.url}

        />
        ))}
      
     
      </div>
      
    </div>
  )
}

export default App
