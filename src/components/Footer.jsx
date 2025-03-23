function Footer() {
  return (
    <div className="footer__content">
      <div className="footer__grid u-margin-bottom-big">
        <div className="footer__logo-container">
          <img
            src="/image/logo-tatazzo.png"
            alt="logo"
            className="footer__logo"
          />
          <span>Artista Digital</span>
        </div>
        <div className="footer__column">
          <a href="#section-characters">Kate M'Llorte</a>
          <a href="#section-characters">Felix Romero</a>
          <a href="#section-characters">Alberto Montes</a>
          <a href="#section-characters">Eliot Owens</a>
        </div>
        <div className="footer__column">
          <a href="#section-fullbody">Personagens</a>
          <a href="#section-forms">Cadastrar Personagens</a>
        </div>
        <div className="footer__column">
          <a href="#section-info">Mitologia</a>
          <a href="#section-characters">Resumos</a>
          <a href="#section-fullbody">Corpos inteiros</a>
        </div>
        <div className="footer__column">
          <a href="/">Sobre a Artista</a>
          <a href="/">Entre em Contato</a>
          <a href="/">Mais Artes</a>
          <a href="/">Voltar ao Topo</a>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__links-container">
          <a
            href="https://www.instagram.com/tatazzo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tais-f-souza/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/tatazzo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://github.com/tat4Souza"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <p className="footer__copyright">
          ©Todas as imagens pertencem a artista @tatazzo
        </p>
      </div>
    </div>
  );
}

export default Footer;
