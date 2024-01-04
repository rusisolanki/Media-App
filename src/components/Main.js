import React, { useEffect, useRef, useState } from "react";
import classes from "./Main.module.css";
import Navbar from "./Navbar";
import { AiOutlineDelete } from "react-icons/ai";
import AddSongDialog from "./AddSongDialog";


const Main = () => {
  
  const [songList, setSongList] = useState([
    {
      id: Math.random() + 1,
      img: "../festival.jpg",
      name: "Song 1",
      link:
      "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
      source: "Youtube",
      date: new Date().toLocaleDateString(),
    },
    {
      id: Math.random() + 1,
      img: "../music.jpeg",
      name: "Song 2",
      link:
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav",
      source: "Youtube",
      date: new Date().toLocaleDateString(),
    },
  ])
  const [showDialog, setShowDialog] = useState(false)
  const [playSong, setPlaySong] = useState(true)
  const audioElement = useRef();


  // useEffect(()=>{
  //     const song = {...addedSong, date: new Date().toLocaleDateString()}
  //     const tempList = [...songList]
  //     tempList.push(song)
  //     setSongList(tempList)

  // }, [addedSong, songList])

  const addedSongHandler = (formField) => {
    console.log(formField)
      setSongList(prevState => {
        return [...prevState, formField]
      })
  }


  const dialogHandler = () => {
    setShowDialog(prevState => !prevState)
  }
  const playAudio = () => {
    // console.log(audioElement)
    if(playSong === true){
      audioElement.current.play();
    }
    else{
      audioElement.current.pause();
    }
    setPlaySong(prevState => !prevState)
  };
  return (
    
    <main className={classes.main}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.header}>
          <h3>Songs</h3>
          <button className={classes.add} onClick={dialogHandler}>Add Song</button>
        </div>
        <div className={classes.main}>
          <table>
            <tr className={classes.tableHeading}>
              <th>SONG</th>
              <th>SOURCE</th>
              <th>ADDED ON</th>
              <th>PLAY</th>
              <th></th>
            </tr>
            {songList.map((item) => (
              <tr key={item.id} className={classes.tableData}>
                <td className={classes.song}>
                  <img src={item.img} alt="song" height={60} width={60} />
                  <p>{item.name}</p>
                </td>
                <td>{item.source}</td>
                <td>{item.date}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM15 29V11L29 20L15 29Z"
                      fill="#FDB927"
                      onClick={playAudio}
                    />
                  </svg>
                  <audio
                    className="audio"
                    ref={audioElement}
                    src={item.link}
                  />
                </td>
                <td className={classes.delete}> <AiOutlineDelete/></td>
              </tr>
            ))}
          </table>
        </div>
        {/* <CurrentSong/> */}
      </div>
      
      {showDialog && <AddSongDialog dialogHandler={dialogHandler} addedSong={addedSongHandler}/>}
      
    </main>
    
  );
};

export default Main;
