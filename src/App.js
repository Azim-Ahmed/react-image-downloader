import React from 'react';
import { Input, version } from "antd";

import "antd/dist/antd.css";
import "./index.css";
import './App.css';

// library definitions
const donw_l = require('image-downloader');
// const imageDownloader = require('node-image-downloader');

// theme search definition
const { Search } = Input;

function donwloadFucntion(i_url) {
  const opt = {
    url: i_url,
    dest: 'donwloads'
  }

  donw_l.image(opt)
    .then(({ filename, image }) => {
      console.log('saved to :', filename);
      return filename.toString(2);
    })
    .catch(function(error){
      console.log(error);
    })

  return false;
}

// function failSafe(evt){
//   imageDownloader({
//     imgs: [
//       {
//         uri: evt,
//         filename: 'my-image-file-name'
//       },
//       {
//         uri: evt // in this case filename will be kiwi.svg
//       }
//     ],
//     dest: './downloads', //destination folder
//   })
//   .then((info)=>{
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log({error: err});
//   })
// }

function App() {
  return (
    <div className="App">
      <h1>React Image Downloder version: 0.0.1</h1>

      <Search placeholder="Enter Image Url" 
        onSearch={donwloadFucntion.bind(this)} 
              style={{width: '50%'}}
              enterButton="download"/>

    <footer>
      <small> Designed wiht Antd version: {version} | &copy; suubitech.com | edmondsylar</small>
    </footer>
    </div>
  );
}

export default App;
