import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/Projects/Projects.css";
const ProjectsSlider: React.FC = () => {
  const [carouselScroll, setCarouselScroll] = useState<number>();
  const [projects, setProjects] = useState<Project[]>([{
    name: "PROJETO 1",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "PROJETO 2",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "PROJETO 3",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "PROJETO 4",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "PROJETO 5",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },{
    name: "PROJETO 5",
    description: "",
    link: "#",
    picture:
      "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },]);

  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    axios.get("https://projects-api-123.herokuapp.com/").then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        setProjects(res.data.projects);
      }
      setCarouselScroll(((carousel.current?.scrollWidth || 0) - (carousel.current?.offsetWidth || 0) + 20) * -1);
    });
  }, []);

  return (
    <motion.div className="carousel" ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <motion.div className="inner-carousel" drag="x" dragConstraints={{ right: 0, left: carouselScroll }}>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.picture} />
            <a href={project.link}>{project.name}</a>
            <p>{project.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default ProjectsSlider;
