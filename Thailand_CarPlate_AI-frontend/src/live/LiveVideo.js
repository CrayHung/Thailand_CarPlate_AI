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
//   //開發用URL

//   // const sourceMotor = "http://192.168.195.213:8081/stream/cam4/index.m3u8";
//   // const sourceCar1 = "http://192.168.195.213:8081/stream/cam1/index.m3u8";
//   // const sourceCar2 = "http://192.168.195.213:8081/stream/cam2/index.m3u8";
//   // const sourceCar3 = "http://192.168.195.213:8081/stream/cam3/index.m3u8";

//   // //現場URL
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
//         {/* <div className="col">車辨畫面</div> */}
//         <FormattedMessage id="visitor-plateNumber" />
//       </div>
//       {/* <div className="grid">
//         <div className="grid-item item1">
//           <div className="col">機車鏡頭</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">汽車鏡頭左</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">汽車鏡頭右</div>
//         </div>
//         <div className="grid-item item1">
//           <div className="col">汽車鏡頭（車尾）</div>
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


  /*************************docker hls作法 START****************************** */

const ip_win = window.location.host.split(":")[0];
//console.log("ip_win="+ip_win);
/**啟動docker hls的port位置8081  */
const ip = "http://localhost:8081"
 //const ip = window.location.host.split(":")[0];  //localhost


/**docker啟動rtsp轉換的command */
const rtspUrl = `http://localhost:8081/start`;

/*測試用rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4*/
// const rtspUrl1 = "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4";
// const rtspUrl2 = "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4";

/** 現場RTSP URi */  
const rtspUrl1 = "rtsp://admin:123456@192.168.2.43:554/media/media.amp?streamprofile=Profile1&audio=0";
// const rtspUrl2 = "rtsp://admin:123456@192.168.2.43:554/media/media.amp?streamprofile=Profile1&audio=0";


/**儲存轉換成react-Hls-player可以播放的檔案路徑 */
const [hlsuri1, setHlsUri1] = useState([]);
//const [hlsuri2, setHlsUri2] = useState([]);


/**把現場RTSP URi餵給要POST給docker 的rtsp資料 */
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


/**一開始就丟串流進入docker container */
useEffect(() => {
  postRtsp1();
},[]);

/*************************docker hls作法 END ****************************** */


/*************************websocket作法 START ****************************** */

// var ws = React.useRef(new WebSocket('ws://localhost:8080/ws')).current;

  /**儲存新車牌號碼 , 更新於網頁 */
  const [cam1plate, setCam1plate] = useState({});
  /**儲存照片路徑 */
  const [cam1image, setCam1image] = useState({});
  /**儲存照片日期 */
  const [cam1date, setCam1date] = useState({});

  /**用來儲存wd連線 */
  // const [ws, setWs] = useState(null);
  // const [message, setMessage] = useState('')


/**當前端確實接收到websocket傳來的"update"後 , call此func抓新車牌 */
async function catchPlateNumber(){
  /**連到server取得最新的所有資料 (或只要取車牌資料)  */
  const res = await fetch("http://localhost:8080/lpr/cams/latest");
  const res_tmp = await res.json();

  console.log(res_tmp.cam1);
  const tmp_date = (res_tmp.cam1.recognitionTimeStr).substr(0,10);

  setCam1date(tmp_date);
  setCam1plate(res_tmp.cam1.plateNumber);
  setCam1image(res_tmp.cam1.imagePath);
}


/**websocket 進入點 */
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

/**websocket 結束點 */



/**當lpr有丟新車號時 , 執行抓新車牌 */
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
              src={"D:/workspace/ThaiLPR/jpg/"+{cam1date}+"/cam1"+{cam1image}}
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
