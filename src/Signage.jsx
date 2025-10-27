import { div } from "framer-motion/client";
import CardOne from "./assets/card_1.png";
import CardTwo from "./assets/card_2.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Signage() {
  const innerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;

    gsap.to(inner, {
      rotateY: 360,
      duration: 10,        // rotation speed
      ease: "sine.inOut",
      repeat: -1,
      transformOrigin: "center center",         // infinite loop
    });
  }, []);

  return (
    <div className="board">
      <div className="board-wrapper">
        <div className="flip-board-inner" ref={innerRef}>
          <div className="flip-board-front">
            {<img src={CardOne} alt="Front Card" id="card_one_image" />}
          </div>
          <div className="flip-board-back">
            {<img src={CardTwo} alt="Back Card" id="card_back_image" />}
          </div>
        </div>
      </div>
    </div>
  );
}
