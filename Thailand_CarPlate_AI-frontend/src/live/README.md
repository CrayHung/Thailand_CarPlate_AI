# React 播放 RTSP
https://github.com/foxford/react-hls
https://github.com/Roverr/rtsp-stream/blob/master/docs/api/README.md#post-start
https://github.com/video-dev/hls.js/

## Docker Go RTSP to HLS 端

# 安裝
#   npm install --save react-hls-player --legacy-peer-deps
#   choco install httpie

啟動 docker container
<!-- 
"pwd" is a valid Unix command to access current directory, but it is not valid in Windows 
docker run -v `pwd`/rtsp-stream.yml:/app/rtsp-stream.yml \
            -p 8080:8080 -d \
           --name rtsp \
           roverr/rtsp-stream:2
-->
1.用cmd輸入以下指令啟動docker container 
  利用本機的8081port對應到docker container裡面的8080port
```
docker run -v "C:\Users\Cray.Hung\Desktop\tailand_frontend\Thailand_CarPlate_AI-frontend\src\live\rtsp-stream.yml:/app/rtsp-stream.yml" -p 8081:8080 -d --name rtsp roverr/rtsp-stream:2
```


2.用 http Post method把現場rtsp的url post給docker container
```

url=http://localhost:8081/start
body :  {
            "uri": "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
            "alias": "camera1"
        };
```


3.會得到一串可由本機前端撥放的hls格式的url , 如/stream/camera1/index.m3u8
 再把前面加上http://localhost:8081/stream/camera1/index.m3u8 
 即是前端可撥放的hls URL
```
```



查看 rtsp to hls 串流清單
```javascript
http :8081/list
{
    "alias": "cam2",
    "id": "59ef9f53-af44-4dfe-b795-f2176af5e86b",
    "running": true,
    "uri": "/stream/cam2/index.m3u8"
}


// output
[
    {
        "alias": "cam2",
        "id": "102bc2f2-bc68-4a30-9ef2-5fbff7f53b29",
        "running": false,
        "uri": "/stream/cam2/index.m3u8"
    }
]
```

hls 串流網址：
<!--下載http  https://httpie.io/ -->
```
http://192.168.195.213:8081/stream/cam2/index.m3u8
```

> 重啟需要重架服務，可以用代號讓網址不變

## React 端

安裝
```
yarn add react-hls-player
```

替換 App.js 的 source 變數成你的 hls url，像是：

App.js
```javascript
function App() {
  const source = "http://localhost:8080/stream/0465f684-8278-4e5d-ac8d-4a7fb4557898/index.m3u8";

  ...


}
```