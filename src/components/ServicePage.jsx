import { useState } from "react";
import {
  FaBroom,
  FaBug,
  FaMinus,
  FaPlus,
  FaPumpSoap,
  FaSprayCan,
} from "react-icons/fa";
import antitermite from "../assets/antitermite.png";
import basement from "../assets/basement.png";
import bathrroom from "../assets/bathrroom.png";
import bedbugImg from "../assets/bedbug.png";
import cockroachImg from "../assets/cockroach.png";
import dust from "../assets/dust.png";
import electrical from "../assets/electrical.png";
import floor from "../assets/floor.png";
import floorcleaning from "../assets/floorcleaning.png";
import furniture from "../assets/furniture.png";
import invisible from "../assets/invisible.png";
import kitchen from "../assets/kitchen.png";
import mosquitosImg from "../assets/mosquitos.png";
import paint from "../assets/paint.png";
import post from "../assets/post.png";
import rodentImg from "../assets/rodent.png";
import soil from "../assets/soil.png";
import termiteImg from "../assets/termite.png";
import tile from "../assets/tile.png";
import windowimg from "../assets/windowimg.png";
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
          image: bedbugImg,
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
          desc: "Termites silently damage wooden structures and foundations over time. Our anti-termite treatment creates a protective barrier before serious damage happens.",
          image: antitermite,
        },
        {
          title: "Invisible Protective Barrier",
          desc: "Termites cannot detect the treatment and unknowingly carry it back to the colony.",
          image: invisible,
        },
        {
          title: "Basement Treatment Application",
          desc: "Begins after basement excavation and before laying soling or plinth cement concrete.",
          image: basement,
        },
        {
          title: "Soil Treatment Before Concrete Work",
          desc: "Compacted and leveled soil is treated for maximum protection.",
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
          desc: "Removes stains, hard-water marks and harmful germs.",
          image: bathrroom,
        },
        {
          title: "Kitchen Degreasing & Cleaning",
          desc: "Thorough cleaning of appliances, tiles, cabinets and countertops.",
          image: kitchen,
        },
        {
          title: "Floor & Surface Disinfection",
          desc: "Eliminates dirt and bacteria for a spotless shine.",
          image: floor,
        },
        {
          title: "Furniture & Upholstery Cleaning",
          desc: "Removes dust, spills, allergens and odor.",
          image: furniture,
        },
        {
          title: "Windows, Doors & Fixture Cleaning",
          desc: "Clear glass and polished surfaces for a fresh look.",
          image: windowimg,
        },
        {
          title: "High & Hard-to-Reach Area Dusting",
          desc: "Fans, vents, corners and elevated spaces thoroughly cleaned.",
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
          desc: "Complete debris removal and tidy-up to prepare the space for use.",
          image: tile,
        },
        {
          title: "Floor Protection & Safety Measures",
          desc: "Floor guard installation to prevent scratches and damage during work.",
          image: floorcleaning,
        },
        {
          title: "Electrical & Plumbing Support",
          desc: "Shifting and adjustments to ensure smooth finishing and accessibility.",
          image: electrical,
        },
        {
          title: "Painting Touch-Up & Finishing",
          desc: "Fixing marks, stains and patchwork for a polished final look.",
          image: paint,
        },
        {
          title: "During & Post-Work Deep Cleaning",
          desc: "Dust, stains, cement spills and residue removed for a ready-to-use space.",
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
