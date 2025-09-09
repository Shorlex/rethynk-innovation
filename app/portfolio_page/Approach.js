import Image from "next/image";

const Approach = ({ font, portfolio }) => {
  return (
    <div className=" px-5 lg:px-24">
      <h2
        className={`${font} text-5xl lg:text-6xl xl:text-8xl uppercase italic`}
      >
        Our Approach{" "}
      </h2>
      <div className="mt-10 pb-24 xl:flex xl:flex-row-reverse gap-5">
        <div className="xl:w-1/2 w-full flex flex-col justify-center ">
          <div>
            <h3 className="mb-3 font-bold">Tools & Technologies Used:</h3>
            <ul>
              {portfolio.tools.map((item, index) => (
                <li
                  key={index}
                  className="shadow shadow-gray-300 p-2 mt-2 flex gap-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-5 mb-3 font-bold">Methodology:</h3>
            <ul>
              {portfolio.methodology.map((item, index) => (
                <li key={index} className="shadow shadow-gray-300 p-2 mt-2 flex gap-2">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="xl:w-1/2 hidden xl:block relative lg:h-[600px]">
          <Image
            src={"/images/portfolio/approach.avif"}
            fill
            alt="challenge-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Approach;
