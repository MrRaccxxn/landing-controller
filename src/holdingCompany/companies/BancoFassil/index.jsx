import Slider from "../../shared/Slider";
import facadeBank from "../../../assets/img/facade_bank.jpg";

const BancoFassil = () => {
  return (
    <div>
      <Slider />
      <h1>Actividades de Banco Fassil</h1>
      <p>
        Iniciamos las actividades del Banco Fassil el 21 de julio de 2014 con el
        objeto de la prestación de productos, operaciones y servicios
        financieros integrales, incluyentes e integradores, dirigidos a
        diferentes perfiles de clientes, tanto personas naturales en general y
        empresas de cualquier tamaño y tipo de actividad económica. <br />
        <br />
        Efectuamos toda clase de operaciones, actos, negocios y contratos
        autorizados o normados por el ordenamiento jurídico vigente, de acuerdo
        a las autorizaciones y regulaciones legales en la materia que favorezcan
        el desarrollo de la actividad económica nacional, la expansión de la
        actividad productiva y el desarrollo de la capacidad industrial del
        país. <br />
        <br />
        Velamos por la protección del consumidor financiero y la universalidad
        de los productos y servicios financieros, y orientando el funcionamiento
        de la Sociedad en apoyo de las políticas de desarrollo económico y
        social del país.
        <br />
        <br />
      </p>
      <img src={facadeBank} alt="Fachada Banco Fassil"/>
      <h1>Inicios de Fassil</h1>
      <p>
        Antes de la transformación a Banco, Fassil operó como Fondo Financiero
        Privado a partir del 12 de agosto de 1996, como instrumento de
        desarrollo y mecanismo de fomento a los sectores económicos en el
        proceso de intermediación financiera en la prestación de servicios y en
        operaciones de captación y colocación de recursos a pequeños y
        microprestatarios. <br />
        <br /> A finales de la gestión 2006, Fassil recibió un importante aporte
        de capital de la sociedad de inversiones Santa Cruz Financial Group S.A.
        que vino acompañado no solo del correspondiente crecimiento patrimonial,
        sino también de la aplicación de un modelo de gestión integral que se
        tradujo en un importante crecimiento en volúmenes de negocio, inversión
        en tecnología, expansión de red de Oficinas y Cajeros Automáticos,
        desarrollo de productos y servicios, y consecuentemente, la oferta de
        más y mejores beneficios para los clientes y usuarios, manteniendo su
        enfoque en microfinanzas. <br />
        <br />
        Todos los esfuerzos y compromisos asumidos hacia la población boliviana
        se fueron reflejando en continuos aportes de capital y mejora de
        indicadores financieros, manteniendo constante la premisa de fomentar la
        accesibilidad y cercanía a los servicios financieros, creando nuevas
        oportunidades de trabajo y mejora de la calidad de vida de los
        bolivianos. <br />
        <br />
      </p>

      <ul>
          <li>
              <p><strong>Dirección:</strong> Avenida Cristo Redentor N° 4210. Santa Cruz – Bolivia</p>
          </li>
          <li>
              <p><strong>Correo:</strong> comunica@fassil.com.bo</p>
          </li>
          <li>
              <p><strong>Teléfono:</strong> +591-3 (3158000)</p>
          </li>
          <li>
              <p><strong>Sitio web:</strong> <a href="https://fassil.com.bo/">www.fassil.com.bo</a></p>
          </li>
      </ul>
    </div>
  );
};

export default BancoFassil;
