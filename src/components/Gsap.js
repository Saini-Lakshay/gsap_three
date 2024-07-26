import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger); // important to register scroll trigger plugin

function GsapComponent() {
  // useGSAP(() => {
  //   gsap.to("#blue-box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true, // make reverse of animation on every other cycle
  //     rotation: 360,
  //     duration: 2,
  //     ease: "circ",
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.from("#blue-box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true, // make reverse of animation on every other cycle
  //     rotation: 360,
  //     duration: 2,
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#blue-box",
  //     {
  //       x: 0,
  //       rotation: 0,
  //       borderRadius: "0%",
  //     },
  //     {
  //       x: 250,
  //       repeat: -1,
  //       yoyo: true, // make reverse of animation on every other cycle
  //       rotation: 360,
  //       borderRadius: "100%",
  //       duration: 4,
  //       backgroundColor: "red",
  //     }
  //   );
  // }, []);

  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });

  // useGSAP(() => {
  //   timeline.to("#blue-box", {
  //     x: 250,
  //     rotation: 360,
  //     duration: 2,
  //   });
  //   timeline.to("#blue-box", {
  //     x: 550,
  //     rotation: 360,
  //     duration: 2,
  //     borderRadius: "100%",
  //   });
  // }, []);

  // below is scroll trigger implemented
  const scrollRef = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children); // get children of scrollRef
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          rotation: 360,
          borderRadius: "100%",
          backgroundColor: "green",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom 80%", // start animation when bottom of box hit 80% of viewport
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef }, //helps to tell gsap to when animation has to happen precisely
    []
  );

  return (
    <div className="px-10">
      <div className="mt-20 h-[100vh]" ref={scrollRef}>
        {/* <div
          className="text-white bg-gray-400 w-40 h-10 rounded text-center flex justify-center items-center cursor-pointer"
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
        >
          Play/Pause (timeline)
        </div> */}
        <div
          className="mt-[100vh] w-20 h-20 bg-blue-500 rounded-lg"
          id="blue-box"
        ></div>
      </div>
    </div>
  );
}

export default GsapComponent;
