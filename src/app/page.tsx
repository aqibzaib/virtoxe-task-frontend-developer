// import ChromeWindow from "./components/ChromeWindow";

// export default function Home() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#e5e5e5",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <ChromeWindow />
//     </div>
//   );
// }
import React from "react";
import "./globals.css";
import BrowserWindow from "./components/BrowserWindow/BrowserWindow";

export default function Home() {
  return (
    <div className="app-container">
      <BrowserWindow />
    </div>
  );
}
