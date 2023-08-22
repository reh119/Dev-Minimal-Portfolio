import React from "react";

// Components have to start with a capital Letter.
//className not class for react
function Intro() {
  return (
    <div
      className="flex items-center
            justify-center flex-col text center pt-20
            pt-6"
    >
      <h1 className="text-4x1 md:text-7xl mb-1 md:mb-3 font-bold">
        Rafael E Hernandez
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>

      <p className="text-sm max-w-xl mb-6 font-bold">
        {" "}
        Hi! I am a recent graduate from Texas State University with a Bachelor
        of Science in Computer Science, and a Mathematics minor. I am passionate
        about tech due to its enless possibilities for solving real world
        problems.
    
        My jourey through undergrad has equipped me with a strong fondation in
        programming, problem solving, and a drive to create solutions to
        problems humans face. Im excited to continue learning, exploring new
        technologies, and contributing my skills to impactful projects.
      </p>
    </div>
  );
}
export default Intro;
