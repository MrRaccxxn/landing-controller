import financialGroup from "../../../../assets/img/financial_group.png";

const TextContent = (props) => {
  return (
    <div className="textContent">
      <p className="pContent">
        Somos “Santa Cruz FG Sociedad Controladora S.A.” y nuestro objeto
        exclusivo de dirigir, administrar, controlar y representar a SCFG Grupo
        Financiero, que tiene domicilio legal constituido en la ciudad de Santa
        Cruz de la Sierra.
      </p>
      <h1 className="titleContent">Marco Legal</h1>
      <p className="pContent">
        La Ley N° 393 de Servicios Financieros establece que los Grupos
        Financieros deben organizarse bajo la dirección y control común de una
        Sociedad Controladora, supervisada por la Autoridad de Supervisión del
        Sistema Financiero (ASFI), los cuales se constituirán en forma de
        Sociedad Anónima con acciones nominativas y domicilio en territorio
        boliviano. Habiendo cumplido con todos los requisitos y procedimientos,
        el 28 de noviembre de 2017 se emitió la Resolución ASFI/1384/2017
        mediante la cual se autoriza la constitución de Santa Cruz FG Sociedad
        Controladora S.A. Seguidamente, el 26 de diciembre de 2017, la ASFI
        otorgó la Licencia de Funcionamiento a Santa Cruz FG Sociedad
        Controladora S.A. para iniciar actividades desde el 8 de enero de 2018.
      </p>
      <h1 className="titleContent">Empresas del grupo</h1>
      <p className="pContent">
        Las empresas que componen el grupo se dedican a actividades diversas
        como ser intermediación financiera, corretaje bursátil, asesoramiento de
        inversiones y seguros personales de vida y salud.:
      </p>

      <img id="financialGroup" src={financialGroup} alt="Santa Cruz FG Sociedad Controladora S.A."/>
    </div>
  );
};

export default TextContent;
