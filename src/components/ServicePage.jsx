import { useState } from "react";
import {
  FaBroom,
  FaBug,
  FaMinus,
  FaPlus,
  FaPumpSoap,
  FaSprayCan,
} from "react-icons/fa";
import antitermite from "../assets/serviceimages/termiteanti.jfif";
import basement from "../assets/serviceimages/basement.jfif";
import bathrroom from "../assets/serviceimages/bathroom.jfif";
import cockroachImg from "../assets/serviceimages/cockroachImg.jfif";
import dust from "../assets/serviceimages/dust.jfif";
import electrical from "../assets/serviceimages/electrical.jfif";
import floor from "../assets/serviceimages/floor.jfif";
import floorprotection from "../assets/serviceimages/floorprotection.jfif";
import windowImg from "../assets/serviceimages/windowImg.jfif";
import invisible from "../assets/serviceimages/anti2.jfif";
import kitchen from "../assets/serviceimages/kitchen.jfif";
import mosquitosImg from "../assets/serviceimages/mosquitosImg.jfif";
import paint from "../assets/serviceimages/paint.jfif";
import post from "../assets/serviceimages/postwork.jfif";
import rodentImg from "../assets/serviceimages/rodentIng.jfif";
import soil from "../assets/serviceimages/soil.jfif";
import termiteImg from "../assets/serviceimages/termite2.jfif";
import tile from "../assets/serviceimages/postinterior.jfif";
import bedbug from "../assets/serviceimages/bedbug.jfif";
import furniture from "../assets/serviceimages/furnituree.jfif";

import "./ServicePage.css";
import BookingModal from "./BookingModal";

function ServicePage() {
  const [openItem, setOpenItem] = useState(null);
  const [openService, setOpenService] = useState(0);
  const scrollToService = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const [showModal, setShowModal] = useState(false);
  const services = [
    {
      icon: <FaBug />,
      title: "Pest Control Service",
      id: "pest-control",
      items: [
        {
          title: "Cockroach Control",
          desc: "Cockroaches spread bacteria and contaminate food by hiding in kitchen corners and drainage areas. Our advanced treatment removes infestations completely and helps prevent future breeding.",
          image: cockroachImg,
        },
        {
          title: "Bed Bug Elimination",
          desc: "Bed bugs hide inside mattresses, furniture and corners, causing skin irritation and sleepless nights. Our specialized treatment removes infestations and restores a hygienic living space.",
          image: bedbug,
        },
        {
          title: "Mosquito & Fly Management",
          desc: "Mosquitoes and flies create unhealthy surroundings and increase the risk of infections in homes and workplaces. We use safe and effective control methods to reduce breeding and maintain a cleaner environment.",
          image: mosquitosImg,
        },
        {
          title: "Rodent Control",
          desc: "Rats and rodents damage wires, contaminate food and spread harmful diseases. Our rodent control solutions eliminate infestation sources and help prevent future entry.",
          image: rodentImg,
        },
        {
          title: "Termite Solutions",
          desc: "Termites silently damage wooden structures, furniture and building foundations over time. Our anti-termite treatment creates a strong protective barrier to stop infestation before serious damage occurs.",
          image: termiteImg,
        },
      ],
    },
    {
      icon: <FaSprayCan />,
      title: "Anti-Termite Treatment",
      id: "anti-termite",
      items: [
        {
          title: "Prevent Termite Infestation",
          desc: "Termites silently damage wooden furniture, doors and building foundations, often going unnoticed until major repairs are needed. Our anti-termite treatment creates a long-lasting protective barrier that prevents infestation before serious structural damage occurs.",
          image: antitermite,
        },
        {
          title: "Invisible Protective Barrier",
          desc: "Termites easily spread through hidden wall gaps and underground pathways without visible signs. Our invisible protective barrier works silently beneath the surface, stopping termites while eliminating the colony from within.",
          image: invisible,
        },
        {
          title: "Basement Treatment Application",
          desc: "Basement and underground areas are highly vulnerable to termite entry through soil and foundation cracks. Our specialized basement treatment is applied before concrete work to block termite access and protect the structure from below ground level.",
          image: basement,
        },
        {
          title: "Soil Treatment Before Concrete Work",
          desc: "Untreated soil beneath buildings can become a direct pathway for termites to attack the structure in the future. Our pre-construction soil treatment creates a strong chemical shield before concrete work begins, ensuring long-term termite protection.",
          image: soil,
        },
      ],
    },
    {
      icon: <FaPumpSoap />,
      title: "Deep Cleaning Service",
      id: "deep-cleaning",
      items: [
        {
          title: "Bathroom Deep Sanitization",
          desc: "Bathrooms easily collect germs, hard-water stains and unpleasant odors that affect hygiene and comfort. Our deep sanitization service thoroughly cleans and disinfects every surface, leaving your bathroom fresh, spotless and hygienic.",
          image: bathrroom,
        },
        {
          title: "Kitchen Degreasing & Cleaning",
          desc: "Grease buildup, food stains and hidden bacteria in kitchens can create an unhealthy cooking environment. Our professional kitchen cleaning removes stubborn grease and deeply cleans appliances, cabinets, tiles and countertops for a sparkling hygienic space.",
          image: kitchen,
        },
        {
          title: "Floor & Surface Disinfection",
          desc: "Floors and frequently touched surfaces collect dirt, bacteria and invisible germs every day. Our disinfection service eliminates harmful contaminants while restoring a clean, polished and healthy environment.",
          image: floor,
        },
        {
          title: "Furniture & Upholstery Cleaning",
          desc: "Sofas, chairs and upholstered furniture trap dust, spills, allergens and unwanted odors over time. Our deep upholstery cleaning refreshes your furniture, improves cleanliness and restores comfort to your living spaces.",
          image: furniture,
        },
        {
          title: "Windows, Doors & Fixture Cleaning",
          desc: "Dust, fingerprints and stains on windows and fixtures reduce the brightness and appearance of your interiors. Our detailed cleaning service restores crystal-clear glass and polished surfaces for a cleaner, fresher look.",
          image: windowImg,
        },
        {
          title: "High & Hard-to-Reach Area Dusting",
          desc: "Ceilings, vents, fans and elevated corners often collect hidden dust and cobwebs that are difficult to clean regularly. Our specialized dusting service reaches every corner to maintain a healthier and cleaner indoor environment.",
          image: dust,
        },
      ],
    },
    {
      icon: <FaBroom />,
      title: "Interior Clean Up",
      id: "interior-cleanup",
      items: [
        {
          title: "Post-Interior Work Clean & Restore",
          desc: "Interior work often leaves behind dust, debris, adhesive marks and construction waste that make the space unusable. Our cleaning and restoration service removes all residue and restores your interiors to a clean, fresh and move-in-ready condition.",
          image: tile,
        },
        {
          title: "Floor Protection & Safety Measures",
          desc: "During renovation or interior work, floors can easily get scratched, stained or damaged by heavy movement and tools. Our floor protection solutions safeguard your surfaces and maintain their original finish throughout the project.",
          image: floorprotection,
        },
        {
          title: "Electrical & Plumbing Support",
          desc: "Improper electrical or plumbing adjustments during interior work can lead to inconvenience, leakage or accessibility issues later. Our support service ensures smooth repositioning and proper setup for safe and efficient functionality.",
          image: electrical,
        },
        {
          title: "Painting Touch-Up & Finishing",
          desc: "Wall marks, uneven paint patches and finishing imperfections can reduce the overall appearance of newly completed interiors. Our touch-up and finishing service delivers smooth walls and a polished professional look.",
          image: paint,
        },
        {
          title: "During & Post-Work Deep Cleaning",
          desc: "Renovation and interior projects leave behind fine dust, cement stains and stubborn residue that affect cleanliness and comfort. Our deep cleaning service thoroughly removes all post-work mess and prepares the space for immediate use.",
          image: post,
        },
      ],
    },
  ];

  return (
    <section className="services-page">
      <div className="services-page-header">
        <p>OUR SERVICES</p>
        <h1>Complete Service Solutions</h1>
      </div>

      <div className="service-top-nav">
        {services.map((service, index) => (
          <button key={index} onClick={() => scrollToService(service.id)}>
            <span>{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>

      <div className="all-services">
        {services.map((service, serviceIndex) => {
          const isServiceOpen = openService === serviceIndex;

          return (
            <div className="service-section" id={service.id} key={serviceIndex}>
              <button
                className="main-service-header"
                onClick={() => {
                  setOpenService(isServiceOpen ? null : serviceIndex);
                  setOpenItem(null);

                  setTimeout(() => {
                    document.getElementById(service.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }}
              >
                <div className="service-section-title">
                  <div className="service-big-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>

                <span className="main-arrow">
                  {isServiceOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {isServiceOpen && (
                <div className="accordion-list">
                  {service.items.map((item, itemIndex) => {
                    const currentId = `${serviceIndex}-${itemIndex}`;
                    const isOpen = openItem === currentId;

                    return (
                      <div className="accordion-item" key={itemIndex}>
                        <button
                          className="accordion-header"
                          onClick={() => setOpenItem(isOpen ? null : currentId)}
                        >
                          <span>{item.title}</span>
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </button>

                        {isOpen && (
                          <div className="accordion-body">
                            <img src={item.image} alt={item.title} />

                            <div>
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>
                              <button
                                className="service-cta"
                                onClick={() => setShowModal(true)}
                              >
                                Book Service
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}

export default ServicePage;
