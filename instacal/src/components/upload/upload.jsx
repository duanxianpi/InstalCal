import React from 'react';
import "./upload.css";
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { HiOutlineUpload } from 'react-icons/hi';
import { Progress } from 'antd';
import PubSub from 'pubsub-js'



export default function Upload() {


  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);


  const inputRef = useRef(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const onUploadProgress = (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total);
    if (percent < 100) {
      setProgress(percent);
    }
  };

  const uploadFile = (file) => {
    const url = "http://35.227.88.74:5002/upload";
    const formData = new FormData();
    formData.append("file", file);
    
    if (file === undefined) {
      return undefined;
    }

    return axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    }).then(()=>{setProgress(100);})
  };

  // const getFoodInfo = (file) => {
  //   const url = "https://api.logmeal.es/v2/image/recognition/type/v1.0";
  //   const formData = new FormData();
  //   formData.append("image", file);
    
  //   if (file === undefined) {
  //     return undefined;
  //   }

  //   return axios.post(url, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       'accept': 'application/json',
  //       'Authorization': 'Bearer cfe8e59521ef50fb3a3b5b568d85244f4be47290'
  //     },
  //     onUploadProgress,
  //   }).then((response) => {
  // })
  // };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
    setFileURL(URL.createObjectURL(e.target.files[0]));

    setUploaded(true);
  };

  useEffect(()=>{ uploadFile(file);},[file]);



  return (
    <div className="Upload">
      <button onClick={handleUploadClick} className="Button" style={{visibility:uploaded ? "hidden" : "visible",display:uploaded ? "none" : "block"}}>
      <div className="btn_ele">
      <HiOutlineUpload size={96} className="upload_icon" color="#23333390"/>
      Upload an Image Here (png, jpg)
      (Max Size: 20MB)
      </div>
      </button>

      <img src={fileURL} onClick={handleUploadClick} className="img" style={{display:uploaded ? "block" : "none"}}/>

      {/* 👇 Notice the `display: hidden` on the input */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/png, image/jpeg"
      />

      <Progress percent={progress} strokeWidth = {20} strokeColor={{ from: '#f0c27b', to: '#4b1248' }} className='progress_bar'/>


    </div>

  )

}