import React, { useEffect, useRef } from "react";
import Deviceful from "deviceful";
import styles from './App.module.scss';

function App() {

  
    const parent = useRef();
    const device = new Deviceful({
      screenshot: "http://localhost:3000/redgarden.jpg",
      screenshotHeight: 2402,
      path: "./deviceful",
    });

    useEffect(() => {
      device.mount(parent.current);
    }, []);

    return (
      <>
        <div ref={parent} className={styles.laptop}>

        </div>
  
        <div className={styles.flex}>
          <button onClick={() => device.swivel()}>Swivel</button>
          <button onClick={() => device.swivel({ to: 0 })}>Center</button>
        </div>
      </>
    );

}

export default App;