import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Problem = ({ service }) => {
  return (
    <div className="px-5 lg:px-24 pb-24 lg:py-24 xl:flex xl:flex-row-reverse gap-5">
      <div className="xl:w-1/2 hidden xl:block relative lg:h-[800px]">
        <Image src={service.whyImage} fill alt={service.title} />
      </div>
      <div className="xl:w-1/2 w-full flex flex-col justify-center ">
        <div>
          <h2
            className={`${comorant.className} text-6xl md:text-7xl uppercase`}
          >
            {service.whyTitle}
          </h2>
          <div className="w-full  mt-10 gap-5">
            <div>
              <h5
                className={`${comorant.className} text-2xl font-bold italic my-5`}
              >
                {service.whyDetails[0]}
              </h5>
              <p>{service.whyDetails[1]}</p>
              <h5
                className={`${comorant.className} text-2xl font-bold italic my-5`}
              >
                {service.whyDetails[2]}
              </h5>
              <p>{service.whyDetails[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
