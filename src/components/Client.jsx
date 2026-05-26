import "./Clients.css";

import client1 from "../assets/1.png";
import client2 from "../assets/2.png";
import client3 from "../assets/3.png";
import client4 from "../assets/4.png";
import client5 from "../assets/5.png";
import client6 from "../assets/6.png";
import client7 from "../assets/7.png";
import client8 from "../assets/8.png";
import client9 from "../assets/9.png";
import client10 from "../assets/10.png";
import client11 from "../assets/11.png";
import client12 from "../assets/12.png";
import client13 from "../assets/13.png";
import client14 from "../assets/14.png";
import client15 from "../assets/15.png";
import client16 from "../assets/16.png";
import client17 from "../assets/17.png";
import client18 from "../assets/18.png";
import client19 from "../assets/19.png";
import client20 from "../assets/20.png";
import client21 from "../assets/21.png";
import client22 from "../assets/22.png";
import client23 from "../assets/23.png";
import client24 from "../assets/24.png";
import client25 from "../assets/25.png";
import client26 from "../assets/26.png";
import client27 from "../assets/27.png";
import client28 from "../assets/28.png";
import client29 from "../assets/29.png";
import client30 from "../assets/30.png";

function Clients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client28,
    client29,
    client30,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
    client21,
    client22,
    client23,
    client24,
    client25,
    client26,
    client27,
  ];

  return (
    <section className="clients-section">
      <p className="clients-small-text">TRUSTED CLIENTS</p>

      <h2>Our Clients</h2>


      <div className="clients-marquee">
        <div className="clients-track">

          {clients.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt="client" />
            </div>
          ))}


          {clients.map((logo, index) => (
            <div className="client-logo" key={`duplicate-${index}`}>
              <img src={logo} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
