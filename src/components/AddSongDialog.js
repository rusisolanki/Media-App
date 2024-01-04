import React, { useState } from "react";
import classes from "./AddSongDialog.module.css";
import { GoUpload } from "react-icons/go";

const AddSongDialog = ({dialogHandler, addedSong}) => {
  const [file, setFile] = useState()
  const [formField, setFormField] = useState({
    id: Math.random() + 1,
    name: '',
    link: '',
    source: '',
    img: '',
    date: new Date().toLocaleDateString()
  })


  const imgUploadHandler = (e) => {

    setFile(e.target.files[0])
    
    setFormField(prevField => ({
      ...prevField,
      img: e.target.files[0].name
    }))
  }


  const inputHandler = (e) => {
    
    // console.log(e.target.value)
    
    setFormField(prevField => ({
      ...prevField,
      [e.target.name] : e.target.value,
    }))
    // console.log(typeof file?.name)
  }


  const clickHandler = (e) => {
    e.preventDefault()
    addedSong(formField)
    dialogHandler()
  }

  const uploadHandler = (e) => {
    e.preventDefault()
    document.getElementById('contained-button-file').click()
  }

  return (
    <>
    <div className={classes.wrapper}></div>
      <form className={classes.form}>
      <h4>Add Song</h4>
        <div className={classes.container}>
          <div className={classes.formField}>
            <label htmlFor="name">Song Name</label>
            <input type="text" id="name" name="name" placeholder="Song Name" onChange={inputHandler}/>
          </div>
          <div className={classes.formField}>
            <label htmlFor="link">Song Link</label>
            <input type="url" id="link" name="link" placeholder="URL" onChange={inputHandler} />
          </div>
          <div className={classes.formField}>
            <label htmlFor="source">Song Source</label>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="Source Name"
              onChange={inputHandler}
            />
          </div>
          <div className={classes.formField}>
            <input
              type="file"
              accept="image/*"
              id="contained-button-file"
              name="img"
              className={classes.input}
              onChange={imgUploadHandler}
            />
            <button className={classes.upload} onClick={uploadHandler}>
              <GoUpload />
              Click to Upload Profile Thumbnail
            </button>
            {file ? (<div className={classes.uploadedFile}>
              <img src={URL.createObjectURL(file)} alt='Uploaded File' width={50} height={50}/>
              <p>{file.name}</p>
            </div>) : ''}
            <p className={classes.para}>Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels</p>
          </div>
          
        </div>
        <div className={classes.btns}>
          <button className={classes.cancel} onClick={dialogHandler}>Cancel</button>
          <button className={classes.add} onClick={clickHandler}>Add</button>
        </div>
      </form>
      </>
  );
};

export default AddSongDialog;
