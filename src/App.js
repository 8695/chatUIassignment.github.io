import React, { useState } from "react";
import styles from './css/app.module.css';
import Sidebar from "./Component/sidebar";
import ChatSection from "./Component/chatSection";

function App() {
 

  return (

    <div className={styles.App}>
     <Sidebar />
     <ChatSection />
    </div>
  );
}

export default App;
