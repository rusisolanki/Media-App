import React from 'react'
import classes from './CurrentSong.module.css'

const CurrentSong = () => {
  return (
    <div className={classes.container}>
      <audio controls className={classes.audio}>
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav" controls/>
      </audio>
    </div>
  )
}

export default CurrentSong
