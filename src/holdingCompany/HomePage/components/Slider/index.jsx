import { Carousel } from "react-bootstrap";
import banner1 from "../../../../assets/img/banner_1.jpg"
import banner2 from "../../../../assets/img/banner_2.jpg"
import banner3 from "../../../../assets/img/banner_3.jpg"
import banner4 from "../../../../assets/img/banner_4.jpg"
import banner5 from "../../../../assets/img/banner_5.jpg"
import banner6 from "../../../../assets/img/banner_6.jpg"

const Slider = (props) => {
  return (
    <Carousel className="slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Tason Fassil"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Banca movil Fassil"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Cuenta Azul"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Cuenta Tre"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="BioFassil"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner6}
          alt="ReFassil"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
