import React from "react";
import Image from "next/image";
import pic1 from "../../../public/gallery pics/pic1.jpg"
import pic2 from "../../../public/gallery pics/pic2.jpg"
import pic3 from "../../../public/gallery pics/pic3.jpg"
import pic4 from "../../../public/gallery pics/pic4.jpg"
import pic5 from "../../../public/gallery pics/pic5.jpg"
import pic6 from "../../../public/gallery pics/pic6.jpg"
import pic7 from "../../../public/gallery pics/pic7.jpg"
import pic8 from "../../../public/gallery pics/pic8.jpg"
const Gallery = () => {
  return (
    <div>
      <section
        id="education"
        className="p-10 bg-white flex flex-col items-center"
      >
        <div className="education-list text-center w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold my-10 sm:my-5">
            MY <span className="text-cyan-600">GALLERY</span>
          </h2>
        </div>
        <div className="gap-8 sm:gap-4">
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic1"
              width={300}
              height={300}
              loading="lazy"
              src={pic1}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic2"
              width={300}
              height={300}
              loading="lazy"
              src={pic2}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic3"
              width={300}
              height={300}
              loading="lazy"
              src={pic3}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic4"
              width={300}
              height={300}
              loading="lazy"
              src={pic4}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic5"
              width={300}
              height={300}
              loading="lazy"
              src={pic5}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic6"
              width={300}
              height={300}
              loading="lazy"
              src={pic6}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic7"
              width={300}
              height={300}
              loading="lazy"
              src={pic7}
            />
             <Image
              className="object-cover object-center rounded m-8"
              alt="Pic8"
              width={300}
              height={300}
              loading="lazy"
              src={pic8}
            />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
