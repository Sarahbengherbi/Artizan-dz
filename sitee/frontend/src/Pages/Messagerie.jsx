// import React, { useRef, useState, useEffect } from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// function getUrlParams(url = window.location.href) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// function Messagerie() {
//   const roomIDRef = useRef(getUrlParams().get('roomID') || randomID(5));
//   const [kitToken, setKitToken] = useState(null);
//   const [zp, setZp] = useState(null);

//   useEffect(() => {
//     const appID = 1286590578;
//     const serverSecret = "d7b1c17d1b0c620763207ea4859534c7";

//     const generateToken = async () => {
//       const newKitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//         appID,
//         serverSecret,
//         roomIDRef.current,
//         randomID(5),
//         randomID(5)
//       );
//       setKitToken(newKitToken);
//     };

//     generateToken();
//   }, []);

//   const myMeeting = async (element) => {
//     if (!kitToken) return;

//     const zpInstance = ZegoUIKitPrebuilt.create(kitToken);
//     setZp(zpInstance);

//     zpInstance.joinRoom({
//       container: element,
//       sharedLinks: [
//         {
//           name: 'Copy link',
//           url:
//             window.location.protocol +
//             '//' +
//             window.location.host +
//             window.location.pathname +
//             '?roomID=' +
//             roomIDRef.current,
//         },
//       ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.GroupCall, // For 1-on-1 calls, use ZegoUIKitPrebuilt.OneONoneCall
//       },
//     });
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         <h1 className="text-xl font-bold">Messagerie</h1>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
//           Rejoindre la réunion
//         </button>
//       </header>
//       <div className="flex-grow overflow-hidden">
//         <div ref={myMeeting} className="flex-grow" />
//       </div>
//     </div>
//   );
// }

// export default Messagerie;
import React from 'react'

const Messagerie = () => {
  return (
    <div>Messagerie</div>
  )
}

export default Messagerie