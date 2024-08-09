import { Container, Row, Col, Card } from "react-bootstrap";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);

  return (
    <Container id="portfolio" fluid className="portfolio-section my-5">
      <h2 className="text-center text-white mb-5">My Projects</h2>
      <div className="container mt-5">
        <Row className="g-4 justify-content-center">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-100"
              >
                <Card data-aos="fade-up" className="project-card shadow-lg bg-blue h-100">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mt-auto button btn-purple text-decoration-none"
                    >
                      View Project
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
