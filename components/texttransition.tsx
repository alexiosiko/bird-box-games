import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const TextTransition = () => {
  const texts = [
    "Where ideas meet precision in development.",
    "Get the results that you are looking for.",
    "Affordable solutions with experienced developers.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     const transitionNextText = async () => {
//       await controls.start({ opacity: 0, y: -20 });
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//       await controls.start({ opacity: 1, y: 0 });
//     };

//     const intervalId = setInterval(() => {
//       transitionNextText();
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [texts]);

  return (
    <motion.div
      className="text-4xl max-md:text-center"
    //   animate={controls}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentTextIndex]}
    </motion.div>
  );
};

export default TextTransition;
