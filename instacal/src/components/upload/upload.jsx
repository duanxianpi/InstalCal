import React from 'react';
import "./upload.css";
import { ChangeEvent, useRef, useState } from 'react';


export default function Upload() {


    const [file, setFile] = useState();
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

      // 🚩 do the file upload here normally...
    };
  return (
    <div className="Upload">
      <div>Upload a file:</div>

      {/* 👇 Our custom button to select and upload a file */}
      <button onClick={handleUploadClick}>
        {file ? `${file.name}` : 'Click to select'}
      </button>

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


