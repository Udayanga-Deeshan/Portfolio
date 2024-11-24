// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on helping your brand grow
//           <br /> and move forward
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/people.webp" alt="" />
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
//           </h1>
//           <button>WHAT WE DO?</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;



// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           Leveraging technology to bring innovative solutions <br /> to complex
//           challenges
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           {/* <img src="/people.webp" alt="Software Engineer Icon" /> */}
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b> Solutions
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Projects.
//           </h1>
//           <button>SEE MY WORK</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Full-Stack Development</h2>
//           <p>
//             Skilled in building responsive, user-friendly applications across
//             various stacks, focusing on robust architecture and seamless UX.
//           </p>
//           <button>Learn More</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Data & Analytics</h2>
//           <p>
//             Expertise in data processing and visualization, delivering
//             actionable insights through tools like Python, SQL, and ML
//             algorithms.
//           </p>
//           <button>Learn More</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>API Development</h2>
//           <p>
//             Design and implementation of secure, scalable APIs, ensuring smooth
//             integration and data consistency for all clients.
//           </p>
//           <button>Learn More</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>DevOps & CI/CD</h2>
//           <p>
//             Proficient in deployment, automation, and CI/CD pipelines, with a
//             focus on enhancing collaboration and ensuring reliable releases.
//           </p>
//           <button>Learn More</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;



import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate" // Only animate when in view
      viewport={{ once: true, margin: "-100px" }} // Ensures animation triggers once
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Leveraging technology to bring innovative solutions <br /> to complex
          challenges
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/software_engineer.webp" alt="Software Engineer Icon" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Projects.
          </h1>
          <button>SEE MY WORK</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {["Full-Stack Development", "Data & Analytics", "API Development", "DevOps & CI/CD"].map((service, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ background: "lightgray", color: "black" }}
            variants={variants} // Each box will animate in sequence
          >
            <h2>{service}</h2>
            <p>
              {index === 0 && "Skilled in building responsive, user-friendly applications across various stacks, focusing on robust architecture and seamless UX."}
              {index === 1 && "Expertise in data processing and visualization, delivering actionable insights through tools like Python, SQL, and ML algorithms."}
              {index === 2 && "Design and implementation of secure, scalable APIs, ensuring smooth integration and data consistency for all clients."}
              {index === 3 && "Proficient in deployment, automation, and CI/CD pipelines, with a focus on enhancing collaboration and ensuring reliable releases."}
            </p>
            <button>Learn More</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

