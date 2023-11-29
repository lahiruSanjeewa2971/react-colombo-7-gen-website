import React from 'react'
import './Watch.css'
export default function Watch() {
  return (
    <div className='watch-container'>
        <div className="video-container">
            <video className='video' width="70%" height="45%" controls>
                <source src='https://player.vimeo.com/external/207270541.hd.mp4?s=1aa5c1029321cde93a8481812b8b80f5cfd2e230&profile_id=119' type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}
