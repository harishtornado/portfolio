import CertificateCard from "../components/CertificateCard";
import RWD from '../assets/certificates/Responsive web design.png';
import JA from '../assets/certificates/Javascript Algorithms and Data Structures.png';
import IF from '../assets/certificates/introduction to front end development.jpg';
import HC from '../assets/certificates/Html and Css in depth.jpg';
import PJ from '../assets/certificates/Programming with Javascript.jpg';
import VC from '../assets/certificates/Version control.jpg';
import RB from '../assets/certificates/React Basics.jpg';
import AR from '../assets/certificates/Advanced React.jpg';

const certificationsData = [
  {
    title: "Responsive web design",
    image: RWD,
  },
  {
    title: 'Javascript Algorithms',
    image: JA,
  },
  {
    title: "Introduction to frontend development",
    image: IF,
  },
  {
    title: 'Html and css in depth',
    image: HC,
  },
  {
    title: "Programming with JavaScript",
    image: PJ,
  },
  {
    title: 'Version Control',
    image: VC,
  },
  {
    title: "React Basics",
    image: RB,
  },
  {
    title: 'Advanced React',
    image: AR,
  },

];

const More = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificate-cards">
          {certificationsData.map((certificate, index) => (
            <CertificateCard key={index} title={certificate.title} image={certificate.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default More