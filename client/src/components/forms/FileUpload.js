import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";

const FileUpload = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
          },
          "base64"
        );
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  return (
    <div className="row">
      <label className="btn btn-primary">
        Choose File
        <input
          type="file"
          multiple
          hidden
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
};




  //Resizer.imageFileResizer(
  //file, // Is the file of the image which will resized.
   //maxWidth, // Is the maxWidth of the resized new image.
    //maxHeight, // Is the maxHeight of the resized new image.
  //compressFormat, // Is the compressFormat of the resized new image.
  //quality, // Is the quality of the resized new image.
  //rotation, // Is the degree of clockwise rotation to apply to uploaded image. 
  //responseUriFunc,  // Is the callBack function of the resized new image URI.
  //outputType,  // Is the output type of the resized new image.
  //minWidth, // Is the minWidth of the resized new image.
  //minHeight, // Is the minHeight of the resized new image.
  //);

export default FileUpload;
