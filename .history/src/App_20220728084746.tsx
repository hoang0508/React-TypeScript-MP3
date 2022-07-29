import React, { useEffect } from "react";
import { MusicApi } from "./apis/MusicApi";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: "IwAR0GHag3gFhli03N_svZiB3DHKkrgxCaK8h6hcIlN1iw-8ySgcmfoR4KUUA",
      });
      console.log(response.data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
