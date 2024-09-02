import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

function Socials() {
  return (
    <ButtonGroup className="bg-[#393333] border-2 text-2xl md:text-3xl border-[#393333] rounded-md text-white mb-4 w-fit md:mb-0 absolute  right-4 top-2 md:top-3 md:right-8 z-10">
      <Button className='bg-[#393333] border-[#393333]  ease-in duration-200 hover:border-[#130c19] hover:bg-[#ffad00]' href='https://www.linkedin.com/in/nemi-sanghvi-48778b2b0/ ' target='_blank'  >
        <FaLinkedin size={30} />
      </Button>
      <Button className='bg-[#393333] border-[#393333] ease-in duration-200 hover:border-[#130c19] hover:bg-[#ffad00]' href='https://github.com/NemiSanghvi' target='_blank'  >
        <FiGithub size={30} />
      </Button>
      <Button className='bg-[#393333] border-[#393333] ease-in duration-200 hover:border-[#130c19] hover:bg-[#ffad00]' href='https://x.com/nemi__sanghvi?s=08' target='_blank'  >
        <FaXTwitter size={30} />
      </Button>
    </ButtonGroup>
  );
}

export default Socials;