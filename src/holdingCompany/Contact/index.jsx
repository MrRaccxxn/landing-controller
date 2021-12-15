import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div>
      <h2>Estamos para atenderle.</h2>
      <h3>
        Contáctenos o envíenos sus consultas para que le podamos atender
        personalmente.
      </h3>
      <br /> <br />
      <h4>Dirección</h4>
      <ul>
        <li>
          <FontAwesomeIcon
            className="icon"
            icon={faMapMarker}
            color="#747474"
          />
          &emsp;Av. San Martin, Edificio Ambassador Business Center Piso 10.
        </li>

        <li>
          <a href="mailto:contacto@santacruzfg.com">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              color="#747474"
            />
            &emsp;contacto@santacruzfg.com{" "}
          </a>
        </li>

        <li>
          <a href="tel:+591-3 (3158000)">
            <FontAwesomeIcon className="icon" icon={faPhone} color="#747474" />
            &emsp;(+591) 3 - 3158000
          </a>
        </li>

        <li>
          <a href="tel:+591800-12-3737">
            <FontAwesomeIcon className="icon" icon={faPhone} color="#747474" />
            &emsp;800-12-3737
          </a>
        </li>

        <li>
          <FontAwesomeIcon className="icon" icon={faClock} color="#747474" />
          &emsp;Lun - Vie de 8:30 am a 16:00 pm
        </li>
      </ul>
    </div>
  );
};

export default Contact;
