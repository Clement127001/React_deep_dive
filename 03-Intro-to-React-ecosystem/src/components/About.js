import aboutImg from "../asset/about-img.png";

const About = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center bg-[#f7f6f1] items-center">
      <div className="flex justify-between items-center mx-10">
        <div>
          {" "}
          <h1 className="text-[4rem] font-sans font-bold mb-2">
            <span className="text-[2rem] font-normal">Hey There,</span>
            <br />
            I'm Clement
          </h1>
          <p className="max-w-[500px] leading-snug font-sans text-md text-gray-500 mb-10">
            I design and development not only my profession also my passion. I
            thrive on the intricacies of both front-end finesse and back-end
            wizardry. With a relentless pursuit of mastery in programming
            languages and frameworks, I architect robust solutions that
            seamlessly integrate across the stack. My passion for technology
            fuels my creativity, driving me to push boundaries and craft
            innovative, user-centric experiences.
          </p>
          <a
            href="https://www.linkedin.com/in/clement-127001-a127a7228/"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-xl font-sans hover:translate-x-3"
          >
            Contact Me
          </a>
        </div>

        <img src={aboutImg} alt="developer" className=" w-auto max-h-[70vh]" />
      </div>
    </div>
  );
};

export default About;
