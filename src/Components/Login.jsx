import React, { useEffect } from "react";
import LetraLogo from "../assets/LetraLogo.png";

export default function Login() {
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
    for (var y = 0; y < inputs.length; y++) {
      inputs[y].addEventListener("keyup", function () {
        toggleInputContainer(this);
      });
      toggleInputContainer(inputs[y]);
    }
  });
  return (
    <div className="z-20 h-full w-screen bg-gray-500 absolute top-0 left-0 bg-opacity-25 pt-16 pb-8 px-8">
      <div className="h-full w-full bg-white p-8">
        <img src={LetraLogo} alt="Logo" className="h-12 flex mx-auto mb-8" />

        <div className="mb-2 relative w-full">
          <input
            className="input text-xs h-9 pt-3 border border-gray-200 appearance-none rounded w-full px-2 focus:border-gray-400 focus:outline-none active:outline-none active:border-gray-400"
            id="email"
            type="text"
          />
          <label
            htmlFor="email"
            className="label absolute pl-2 mt-1 leading-tighter text-gray-400 text-xs cursor-text"
          >
            Teléfono, usuario o correo electrónico
          </label>
        </div>
        <div class="mb-4 relative w-full">
          <input
            className="input text-xs h-9 pt-3 border border-gray-200 appearance-none rounded w-full px-2 focus:border-gray-400 focus:outline-none active:outline-none active:border-gray-400"
            id="password"
            type="password"
          />
          <label
            htmlFor="password"
            className="label absolute pl-2 mt-1 leading-tighter text-gray-400 text-xs cursor-text"
          >
            Contraseña
          </label>
        </div>
        <button
          type="button"
          className="buttonInstagram w-full text-sm py-1 text-white rounded px-4 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-4"
        >
          Iniciar Sesión
        </button>
        <div className="flex flex-row items-center">
          <div className="h-px bg-gray-300 w-2/5"></div>
          <div className="mx-auto text-gray-400 text-lg mb-1">o</div>
          <div className="h-px bg-gray-300 w-2/5"></div>
        </div>
        <div className="flex flex-col">
          <h5 className="mx-auto linkInstagram2 mb-4 text-sm font-medium">Iniciar sesión con Facebook</h5>
          <h5 className="mx-auto mb-16 linkInstagram2 text-xs">¿Olvidaste tu contraseña?</h5>
          <div className="flex flex-row mb-4">
            <span className="ml-auto text-sm mr-1">¿No tienes una cuenta? </span>{" "}
            <a
              className="mr-auto linkInstagram text-sm"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Regístrate
            </a>
          </div>
          <h5 className="mx-auto my-5 text-sm">Descargar app</h5>
          <div className="grid grid-cols-2 gap-2">
            <img
              className="mx-auto"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_spanish_latinamerica_mexico.png/e2247c4f90de.png"
              alt=""
            />
            <img
              className="mx-auto"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_spanish_latinamerica_mexico-es_LA.png/3cd8a27083c0.png"
              alt=""
            />
          </div>
          <div className="text-sm text-gray-400 flex flex-wrap justify-center mt-8 mb-4">
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
          <div className="flex flex-row text-xs text-gray-400">
              <span className="mr-2">Español</span>
              <span>© 2021 Instagram from Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}
