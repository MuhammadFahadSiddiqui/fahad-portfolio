"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import pic1 from "../../../public/gallery pics/pic1.jpg";
import pic2 from "../../../public/gallery pics/pic2.jpg";
import pic3 from "../../../public/gallery pics/pic3.jpg";
import pic4 from "../../../public/gallery pics/pic4.jpg";
import pic5 from "../../../public/gallery pics/pic5.jpg";
import pic6 from "../../../public/gallery pics/pic6.jpg";
import pic7 from "../../../public/gallery pics/pic7.jpg";
import pic8 from "../../../public/gallery pics/pic8.jpg";
import logo from "../../../public/watermark.png";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

const Gallery = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable drag
    const handleDragStart = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div>
      <section
        id="education"
        className="p-10 bg-white flex flex-col items-center select-none"
      >
        <div className="education-list text-center w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold my-10 sm:my-5">
            MY <span className="text-cyan-600">GALLERY</span>
          </h2>
        </div>

        <div className="gap-8 sm:gap-4 flex flex-col items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group w-[300px] h-[300px] m-8 overflow-hidden rounded shadow-lg"
            >
              {/* Image */}
              <Image
                src={img}
                alt={`Pic${index + 1}`}
                fill
                sizes="300px"
                className="object-cover object-center rounded pointer-events-none"
                loading="lazy"
                draggable={false}
              />

              {/* Watermark Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src={logo}
                  alt="Watermark"
                  width={300}
                  height={300}
                  className="opacity-20"
                  draggable={false}
                />
              </div>

              {/* Transparent overlay to block extensions */}
              <div className="absolute inset-0 bg-transparent z-50 pointer-events-auto" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
