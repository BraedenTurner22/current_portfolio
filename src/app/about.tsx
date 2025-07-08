import Image from "next/image";

const About = () => {
  return (
    <div className="bg-background w-full mt-20 grid xs:grid-flow-cols xs:grid-rows-2 sm:grid-flow-row sm:grid-cols-2 justify-center items-center border-b-indigo-300 border-b-12 border-double pt-3 pb-8 lg:pb-20">
      {/* Image container with a static border */}
      <div className="flex justify-center">
        <div className="relative w-60 h-60 md:w-75 md:h-75 lg:w-110 lg:h-110 rounded-full overflow-hidden border-3 border-orange-300">
          <Image
            src="/about/me_and_ollie.jpeg"
            alt="me_and_Ollie_img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* About text section */}
      <div className="flex flex-col p-10 md:pr-10 xl:pr-50">
        <h2 className="text-2xl lg:text-4xl font-bold text-orange-300 text-left font-serif">
          About Me
        </h2>
        <p className="text-sm lg:text-xl mt-4 text-orange-100 font-serif">
          Hey there! I'm Braeden.
          <br />
          <br />
          I am currently a second-year studying computer science at the
          University of Massachusetts—Amherst. I love programming and enjoy
          using it as a creative medium for other interests.
          <br />
          <br />
          While I'm still exploring what excites me most, I've developed an
          interest in health sensing devices and ML driven data analytics for
          improving physical and/or mental health. Finding the intersection
          between technology and personal health is both fascinating and
          fruitful.
          <br />
          <br />
          If I am not programming, you'll probably catch me hiking (Colorado
          native!), juggling a soccer ball, playing poker, or cooking up a
          storm. Feel free to check out my recipes{" "}
          <a
            href="https://www.youtube.com/@BraedenChefs"
            className="text-orange-300 underline"
            target="#"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
