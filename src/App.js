import React, { useEffect, useState } from "react";
import Galeria from "./Components/Galeria";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import "./assets/main.css";
import axios from "axios";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const navigator = window.navigator;
      console.log(navigator)
      var data = {
        lenguaje : navigator.language,
        lenguajes : navigator.languages,
        platform : navigator.platform,
        appVersion : navigator.appVersion,
        tipoRed : navigator.connection.effectiveType,
        userAgent : navigator.userAgent,
      }

      axios.post(`http://192.168.0.8:4000/setData`, data )
      .then(res => {
        console.log(res)
      })

      function disableScroll() {
        window.scrollTo(0, 0);
      }
      disableScroll();
      window.addEventListener("scroll", disableScroll);
      setIsModal(true);
    }, 5000);
  }, []);

  return (
    <div className="relative h-screen">
      <NavBar />
      <Galeria />
      {isModal && <Login />}
    </div>
  );
}
