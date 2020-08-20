import React, { useEffect, useRef, useState } from "react";
import Deviceful from "deviceful";
import styles from './App.module.scss';

function App() {
  const [screenshot, setScreenshot] = useState('/alansiqueira.png')

  const driveIn = [
    {
      object: "model", // Swivel the device from -30 to 0 degrees
      move: "rotation",
      axis: "y",
      duration: 1500,
      easing: "swingTo",
      from: -30,
    },
    {
      object: "camera", // Move the camera down by 3 units
      move: "position",
      axis: "y",
      duration: 2000,
      easing: "easeOutQuad",
      from: 3,
    },
    {
      object: "camera", // Move the camera forward by 20 units
      move: "position",
      axis: "z",
      duration: 2000,
      easing: "easeOutQuad",
      from: 20,
    },
    {
      object: "camera", // Rotate the camera on the X axis from -5 to 0 degrees
      move: "rotation",
      axis: "x",
      duration: 2000,
      easing: "easeOutQuad",
      from: -5,
    },
  ]

  const parent = useRef();
  const device = new Deviceful({
    screenshot: screenshot,
    screenshotHeight: 2402,
    path: "./deviceful",
    onLoadAnimation: driveIn,
  });



  useEffect(() => {
    device.mount(parent.current);
  }, []);



  return (
    <div className={styles.container}>
      <div onMouseLeave={() => device.swivel({ to: 0 })} onMouseEnter={() => device.swivel()} ref={parent} className={styles.laptop}>

      </div>

    </div>
  );

}

export default App;