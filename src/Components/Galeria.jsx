import React from "react";

export default function Galeria() {
  return (
    <div className="max-w-screen-lg mx-auto mt-8 px-5">
      <div
        className={
          "w-full h-96 bg-cover bg-center z-10 bg-gray-500 bg-opacity-50"
        }
        style={{
          backgroundImage: `url( https://picsum.photos/200/300?random=1 )`,
        }}
      ></div>

      <div
        className={
          "w-full h-96 bg-cover bg-center z-10 bg-gray-500 bg-opacity-50 mt-4"
        }
        style={{
          backgroundImage: `url( https://picsum.photos/200/300?random=1 )`,
        }}
      ></div>

      <div
        className={
          "w-full h-96 bg-cover bg-center z-10 bg-gray-500 bg-opacity-50 mt-4"
        }
        style={{
          backgroundImage: `url( https://picsum.photos/200/300?random=1 )`,
        }}
      ></div>
    </div>
  );
}
