import React from 'react';
import "./upload.css";
import { ChangeEvent, useRef, useState } from 'react';
import { HiOutlineUpload } from 'react-icons/hi';


export default function Upload() {


  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const [uploaded, setUploaded] = useState(false);

  const inputRef = useRef(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
    setFileURL(URL.createObjectURL(e.target.files[0]));

    setUploaded(true);
    // 🚩 do the file upload here normally...
  };
  return (
    <div className="Upload">
      <button onClick={handleUploadClick} className="Button" style={{visibility:uploaded ? "hidden" : "visible"}}>
      <HiOutlineUpload size={96} color="#2f2f2f"/>
      <div style={{position:"absolute"}}>
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
      />
    </div>

  )

}


