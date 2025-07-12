const About = () => {
  return (
    <div className="text-xl">
      <p>
        <span className="text-green-500">{">"}</span>{" "}
        <span className="text-cyan-500">cd</span> <strong>career</strong>
      </p>
      <p>
        <span className="text-green-500">{">"}</span>{" "}
        <span className="text-cyan-500">ls</span>
      </p>
      <div className="flex flex-wrap gap-8 p-4 font-black">
        <span>About_me.txt</span>
        <span>My_work.txt</span>
        <span>Contact_me.txt</span>
      </div>
      <p>
        <span className="text-green-500">{">"}</span>{" "}
        <span className="text-cyan-500">cat</span> <span>About_me.txt</span>
      </p>
      <div>
        <div className="py-2 space-y-4 ">
          <p className="text-green-400"># About Me</p>
          <p className="text-neutral-300">
            - I’m Fares Kebbeh — a full-stack engineer forged in discipline and
            relentless grind. I build tools that work, built to last, and
            designed to dominate.
          </p>{" "}
          <p className="text-neutral-300">
            {" "}
            - Rooted in real-world struggle, my code carries weight, precision,
            and purpose. No flashy gimmicks, just raw skill and impact.
          </p>{" "}
          <p className="text-neutral-300">
            {" "}
            - Welcome to my world — where code is survival, and every line counts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
