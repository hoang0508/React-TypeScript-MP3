import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0GHag3gFhli03N_svZiB3DHKkrgxCaK8h6hcIlN1iw-8ySgcmfoR4KUUA`
      );
      console.log(response.data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
