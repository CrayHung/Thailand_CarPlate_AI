// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LiveVideo.css";
// import ReactHlsPlayer from "react-hls-player";
// // import "antd/dist/antd.css";
// import MyModal from "./MyModal";
// // import LPR from "../lpr/LPR";
// import { FormattedMessage, useIntl } from "react-intl";

// const ip = window.location.host.split(":")[0];

// async function cam_update() {
//   const ip = window.location.host.split(":")[0];

//   // const res = await fetch("http://192.168.195.213:8080/lpr/cams/latest");
//   const res = await fetch(`http://${ip}:8080/lpr/cams/latest`);
//   const res_tmp = await res.json();
//   res_tmp.cam4.imagePath = res_tmp.cam4.imagePath.substring(1);
//   res_tmp.cam1.imagePath = res_tmp.cam1.imagePath.substring(1);
//   res_tmp.cam2.imagePath = res_tmp.cam2.imagePath.substring(1);
//   res_tmp.cam3.imagePath = res_tmp.cam3.imagePath.substring(1);

//   // add thumbnail path
//   // res_tmp.cam4.imagePath = addThumbnailPath(res_tmp.cam4.imagePath);
//   // res_tmp.cam1.imagePath = addThumbnailPath(res_tmp.cam1.imagePath);
//   // res_tmp.cam2.imagePath = addThumbnailPath(res_tmp.cam2.imagePath);
//   // res_tmp.cam3.imagePath = addThumbnailPath(res_tmp.cam3.imagePath);

//   // lpr image
//   const imgCam4 = document.getElementById("image-cam4");
//   const imgCam1 = document.getElementById("image-cam1");
//   const imgCam2 = document.getElementById("image-cam2");
//   const imgCam3 = document.getElementById("image-cam3");
//   // imgCam4.src = `http://${ip}:8080${res_tmp.cam4.imagePath}`;
//   // imgCam1.src = `http://${ip}:8080${res_tmp.cam1.imagePath}`;
//   // imgCam2.src = `http://${ip}:8080${res_tmp.cam2.imagePath}`;
//   // imgCam3.src = `http://${ip}:8080${res_tmp.cam3.imagePath}`;

//   // imgCam4.src = `http://192.168.195.213:8080${res_tmp.cam4.imagePath}`;
//   // imgCam1.src = `http://192.168.195.213:8080${res_tmp.cam1.imagePath}`;
//   // imgCam2.src = `http://192.168.195.213:8080${res_tmp.cam2.imagePath}`;
//   // imgCam3.src = `http://192.168.195.213:8080${res_tmp.cam3.imagePath}`;

//   // lpr number
//   const numberCam4 = document.getElementById("number-cam4");
//   const numberCam1 = document.getElementById("number-cam1");
//   const numberCam2 = document.getElementById("number-cam2");
//   const numberCam3 = document.getElementById("number-cam3");
//   numberCam4.innerHTML = res_tmp.cam4.plateNumber;
//   numberCam1.innerHTML = res_tmp.cam1.plateNumber;
//   numberCam2.innerHTML = res_tmp.cam2.plateNumber;
//   numberCam3.innerHTML = res_tmp.cam3.plateNumber;
// }

/*** 
 * /jpg/20221107/cam2/20221107_152254605_ABB-6603.jpg
 *  
 * to
 * 
 * /jpg/20221107/cam2/thumbnail/20221107_152254605_ABB-6603.jpg 
 ***/
//  function addThumbnailPath(path) {
//   const arr = path.split('/');
//   arr.splice(4, 0, 'thumbnail');
  
//   return arr.join('/');
// }

// export default function LiveVideo() {
//   //?????????URL

//   // const sourceMotor = "http://192.168.195.213:8081/stream/cam4/index.m3u8";
//   // const sourceCar1 = "http://192.168.195.213:8081/stream/cam1/index.m3u8";
//   // const sourceCar2 = "http://192.168.195.213:8081/stream/cam2/index.m3u8";
//   // const sourceCar3 = "http://192.168.195.213:8081/stream/cam3/index.m3u8";

//   // //??????URL
//   const sourceMotor = `http://${ip}:8081/stream/cam4/index.m3u8`;
//   const sourceCar1 = `http://${ip}:8081/stream/cam1/index.m3u8`;
//   const sourceCar2 = `http://${ip}:8081/stream/cam2/index.m3u8`;
//   const sourceCar3 = `http://${ip}:8081/stream/cam3/index.m3u8`;

//   // console.log(sourceMotor);

//   useEffect(() => {
//     cam_update();

//     // const wsUrl = `ws://192.168.195.213:8080/ws`;
//     const wsUrl = `ws://${ip}:8080/ws`;

//     const ws = new WebSocket(wsUrl);

//     ws.onopen = () => {
//       console.log(`connected to ${wsUrl}`);
//     };

//     ws.onmessage = (msg) => {
//       const data = msg.data;
//       if (data === "update") {
//         // console.log(data);
//         cam_update();
//       }
//     };
//   }, []);

//   //antd Modal


//   return (
//     <div>

      
//       <div className="grid-item grid-title">
//       <FormattedMessage id="menu-live" />
//       </div>

//       <div className="grid">
//         <div className="grid-item item3">
//           <div className="col">
//             <ReactHlsPlayer
//               src={sourceMotor}
//               autoPlay={true}
//               muted={true}
//               width={"100%"}
//               height={"100%"}
//             />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <ReactHlsPlayer
//               src={sourceCar1}
//               autoPlay={true}
//               muted={true}
//               width={"100%"}
//               height={"100%"}
//             />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <ReactHlsPlayer
//               src={sourceCar2}
//               autoPlay={true}
//               muted={true}
//               width={"100%"}
//               height={"100%"}
//             />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <ReactHlsPlayer
//               src={sourceCar3}
//               autoPlay={true}
//               muted={true}
//               width={"100%"}
//               height={"100%"}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="grid-item grid-title">
//         {/* <div className="col">????????????</div> */}
//         <FormattedMessage id="visitor-plateNumber" />
//       </div>
//       {/* <div className="grid">
//         <div className="grid-item item1">
//           <div className="col">????????????</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">???????????????</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">???????????????</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">????????????????????????</div>
//         </div>
//       </div> */}
//       <div className="grid">
//         <div
//           className="grid-item item3"
//           style={{ width: "100%", height: "100%" }}
//         >
//           <div>
//             {/* document.getElementById("image-cam4").src */}
//             <MyModal imageId={"image-cam4"} />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <MyModal imageId={"image-cam1"} />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <MyModal imageId={"image-cam2"} />
//           </div>
//         </div>
//         <div className="grid-item item4">
//           <div className="col">
//             <MyModal imageId={"image-cam3"} />
//           </div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col" id="number-cam4"></div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col" id="number-cam1"></div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col" id="number-cam2"></div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col" id="number-cam3"></div>
//         </div>
//       </div>
//     </div>
//   );


import React, { useEffect, useState ,useRef} from "react";
import ReactHlsPlayer from "react-hls-player";
import MyModal from "./MyModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";
import { FormattedMessage, useIntl } from "react-intl";



export default function LiveVideo(){


  /*************************docker hls?????? START****************************** */

const ip_win = window.location.host.split(":")[0];
//console.log("ip_win="+ip_win);
/**??????docker hls???port??????8081  */
const ip = "http://localhost:8081"
 //const ip = window.location.host.split(":")[0];  //localhost


/**docker??????rtsp?????????command */
const rtspUrl = `http://localhost:8081/start`;

/*?????????rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4*/
// const rtspUrl1 = "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4";


/** ??????RTSP URi */  
const rtspUrl1 = "rtsp://admin:123456@192.168.2.36:554/media/media.amp?streamprofile=Profile1&audio=0";



/**???????????????react-Hls-player??????????????????????????? */
const [hlsuri1, setHlsUri1] = useState([]);
//const [hlsuri2, setHlsUri2] = useState([]);


/**?????????RTSP URi?????????POST???docker ???rtsp?????? */
const rtspData1 = {"uri": rtspUrl1,"alias": "camera1"};
//const rtspData2 = {"uri": rtspUrl2,"alias": "camera2"};
/** */
function postRtsp1() {
  fetch(rtspUrl, {
    method: 'POST',
    body: JSON.stringify(rtspData1)
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      setHlsUri1(ip+response.uri);
  });
}


/**???????????????????????????docker container */
useEffect(() => {
  postRtsp1();
},[]);

/*************************docker hls?????? END ****************************** */


/*************************websocket?????? START ****************************** */

// var ws = React.useRef(new WebSocket('ws://localhost:8080/ws')).current;

  /**????????????????????? , ??????????????? */
  const [cam1plate, setCam1plate] = useState('');
  /**?????????????????? */
  const [cam1image, setCam1image] = useState('');
  /**?????????????????? */
  const [cam1date, setCam1date] = useState('');

  /**????????????wd?????? */
  // const [ws, setWs] = useState(null);
  // const [message, setMessage] = useState('')


/**????????????????????????websocket?????????"update"??? , call???func???????????? */
async function catchPlateNumber(){
  /**??????server??????????????????????????? (????????????????????????)  */
  const res = await fetch("http://localhost:8080/lpr/cams/latest");
  const res_tmp = await res.json();

  console.log(res_tmp.cam1);
  const tmp_date = (res_tmp.cam1.recognitionTimeStr).substr(0,10);

  setCam1date(tmp_date);
  setCam1plate(res_tmp.cam1.plateNumber);
  setCam1image(res_tmp.cam1.imagePath);
}


/**websocket ????????? */
useEffect(()=>{
  catchPlateNumber();
  const wsUrl = "ws://127.0.0.1:8080/ws";
  const ws = new WebSocket(wsUrl);
  ws.onopen = () => {
    //console.log(`connected to ${wsUrl}`);
  };
  ws.onerror = (e) => {
    console.log(e.message);
  };
  ws.onmessage = (msg) => {
    const data = msg.data;
    console.log(data);
    if (data === "update") {
      catchPlateNumber();
    }
  };
},[])

/**websocket ????????? */



/**???lpr?????????????????? , ?????????????????? */
// useEffect(()=>{
//   catchPlateNumber();
// },[plate1])

// useEffect(()=>{
//   catchPlateNumber();
// },[plate1,plate2])

   return (
    <div>
    <div className="grid-item grid-title">
    <FormattedMessage id="menu-live" />
    </div>

     <div className="grid">
      <div className="grid-item item1">
        <div className="col">
          <ReactHlsPlayer
            src={hlsuri1}
            autoPlay={true}
            muted={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      {/* <div className="grid-item item2">
        <div className="col">
          <ReactHlsPlayer
            src={hlsuri2}
            autoPlay={true}
            muted={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div> */}
    </div> 

    <div className="grid-item grid-title">
      <FormattedMessage id="visitor-plateNumber" />
    </div>

    <div className="grid">
        <div
          className="grid-item item1"
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            <img
              alt=""
              src={cam1image}
              // src="SLAM_DUNK_2022.jpg"
              width={"100%"}
            ></img>
          </div>
        </div>
        {/* <div className="grid-item item2">
          <div className="col">
            <img
              alt=""
              src={"http://192.168.195.213:8080" + cam1.imagePath}
              src={`http://${ip}:8080${cam2.imagePath}`}
              width={"100%"}
            ></img>
          </div>
        </div> */}
        
      <div>
        <div className="grid-item item1">
          <div className="grid">{cam1plate}</div>
        </div>
        {/* <div className="grid-item item2">
          <div className="col">{cam2.plateNumber}</div>
        </div> */}
        </div>
      </div>
  </div>
);
 }
