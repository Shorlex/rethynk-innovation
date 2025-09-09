import Image from "next/image";

const AboutClient = ({ font, portfolio }) => {
  return (
    <div className="py-24 px-5 lg:px-24">
      <h2
        className={`${font} text-5xl lg:text-6xl xl:text-8xl uppercase italic`}
      >
        About Client
      </h2>
      <div className="mt-10 pb-24 xl:flex xl:flex-row-reverse gap-5">
        <div className="xl:w-1/2 hidden xl:block relative lg:h-[500px]">
          <Image
            src={"/images/portfolio/challenge-image.avif"}
            fill
            alt="challenge-image"
          />
        </div>
        <div className="xl:w-1/2 w-full flex flex-col justify-center ">
          <div>
            <h4 className={`${font} text-3xl italic`}>{portfolio.about}</h4>
            <h3 className="mt-10 mb-3 font-bold">The Challenge:</h3>
            <p>{portfolio.challenge}</p>
            <ul className="list-disc ps-10">
              {portfolio.challengeList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
