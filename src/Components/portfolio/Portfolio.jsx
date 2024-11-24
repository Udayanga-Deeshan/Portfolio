
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Blog Application",
    img: "/frontend-project.jpg",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
  {
    id: 2,
    title: "E-Commerce Shopping Application",
    img: "/thumb1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
  {
    id: 3,
    title: "Shop Hub- E-Commerce Clothing Store",
    img: "/thumb2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
  {
    id: 4,
    title: "Socially- Social Media App",
    img: "/thumb3.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
];

const Single = ({ item, isEven }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`portfolio-item-${item.id}`);
      const rect = element.getBoundingClientRect();

      // Trigger animation when the element is in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      } else {
        // Reset to off-screen when not in the viewport
        controls.start({
          x: isEven ? "100%" : "-100%", // Reset position based on even/odd
          opacity: 0,
        });
      }
    };

    // Initial animation to start off-screen
    controls.start({
      x: isEven ? "100%" : "-100%", // Slide in from left or right
      opacity: 0,
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, item.id, isEven]);

  return (
    <motion.section
      id={`portfolio-item-${item.id}`}
      className="portfolio-item"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="container">
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="techStack">
            {item.techStack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="icons">
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="imageContainer">
          <img src={item.img} alt={item.title} />
        </div>
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Featured Works</h1>
      {items.map((item, index) => (
        <Single item={item} key={item.id} isEven={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Portfolio;
