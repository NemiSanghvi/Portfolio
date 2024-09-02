import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-gray-400 text-[#36331c] border-none" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-lg md:text-2xl">
          About Me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-gray-400 text-[#36331c] border-none">
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          I'm Nemi Sanghvi, a B.Tech graduate in Computer Science, passionate about coding and technology. Although I am fairly new to the industry, I am eager to learn and grow in every field I can. This website showcases the projects I've worked on, reflecting my skills and commitment to continuous improvement. I am excited to contribute, learn, and take on new challenges that will help me advance in my career. Thank you for visiting, and feel free to explore my work!
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-gray-400 text-[#36331c] border-none">
        <Button
          className="bg-[#393333] border-2 border-[#393333] rounded-md h-10 ease-in duration-200 hover:border-[#130c19] hover:bg-[#ffad00] px-4 py-2 text-sm md:text-base"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function About() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="bg-[#393333] border-2 text-2xl md:text-3xl border-[#393333] rounded-md px-6 py-3 ease-in-out duration-500 hover:border-[#130c19] hover:bg-[#ffad00] text-white mb-4 w-fit md:mb-0"
        onClick={() => setModalShow(true)}
      >
        Nemi Sanghvi
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default About;
