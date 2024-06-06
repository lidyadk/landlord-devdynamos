"use client";

import React from "react";
import Typed from "typed.js";

export const LoginHero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello Lord!"],
      typeSpeed: 50,
      backDelay: 2000,
      backSpeed: 50,
      loop: true,
      loopCount: 5,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="text-base-100 space-y-2">
        <h1 className="text-5xl font-bold flex justify-center pb-10">
          <span ref={el}>Hello Lord</span>
        </h1>
        <p className="text-xl flex justify-center font-sans">
          Welcome to your kingdom of property
        </p>
        <p className="text-xl flex justify-center font-sans pb-2">
          opportunities!
        </p>
        <p className="font-sans italic flex justify-center text-base-content bg-base-100 w-fit px-3 font-semibold hover:text-base-100 hover:bg-base-content rounded-sm">
          Fill the form to become part of the lords!
        </p>
      </div>
    </main>
  );
};
