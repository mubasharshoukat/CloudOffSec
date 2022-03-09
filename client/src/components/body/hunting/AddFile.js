import { useState } from "react";
import axios from "axios";
import Header2 from './Header'
import { sendDetails } from "../../../redux/actions/sendDetails";
import "./hunting.css";

export const Hunting = () => {
  
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  



  return (
    <div className="container">
        <Header2/>
      <h1>Upload</h1>
      <span className="message"></span>
      <form encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="fileName">File Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter File Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fileVersion">Version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="form-control"
            placeholder="Enter System Version"
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose File</label>
          <input
            type="file"
            filename="fileImage"
            className="form-control-file"
            //onChange={onChangeFile}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Hunting;
