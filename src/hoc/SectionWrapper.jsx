import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// const StarWrapper = (Component, idName) =>
//   function HOC() {
//     return (
//       <motion.section
//         variants={staggerContainer()} // Staggered animation
//         initial='hidden'
//         whileInView='show'
//         viewport={{ once: false, amount: 0.25 }} // Adjust amount to trigger earlier
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0 section`} // Ensure each section has snap alignment
//       >
//         <span className='hash-span' id={idName}>
//           &nbsp;
//         </span>
//         <Component />
//       </motion.section>
//     );
//   };

// export default StarWrapper;
