import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
const Projects: React.FC = () => {
  const [carouselScroll, setCarouselScroll] = useState<number>();
  const [projects, setProjects] = useState<Project[]>([]);

  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    axios.get("https://projects-api-123.herokuapp.com/").then((res) => {
      if (res.status === 200) {
        setProjects(res.data.projects);
      }
    });
    setCarouselScroll(((carousel.current?.scrollWidth || 0) - (carousel.current?.offsetWidth || 0) + 20) * -1);
  }, []);

  return (
    <motion.div className="carousel" ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <motion.div className="innerCarousel" drag="x" dragConstraints={{ right: 0, left: carouselScroll }}></motion.div>
    </motion.div>
  );
};
export default Projects;
