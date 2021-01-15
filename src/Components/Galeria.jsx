import React from "react";

const imagenes = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=6",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    titulo: "Tacos Mexicanos de Carnitas Asadas",
  },
];

export default function Galeria() {
  return (
      <div className="max-w-screen-lg mx-auto">
    <div className="grid grid-cols-3 gap-4 mt-8">
        {imagenes.map((imagen, index) => {
          return (
            <div
              className={
                "h-40 w-full bg-cover bg-center z-10 rounded-md bg-gray-500 bg-opacity-50"
              }
              style={{ backgroundImage: `url( ${imagen.pathImg} )` }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
