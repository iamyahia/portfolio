import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">find me in:</p>
      <div className="footer__icons-container">
        <div className="footer__icon-group">
          <a
            href="https://linkedin.com/in/iamyahia"
            target="_blank"
            className="footer__linkedin-link"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://instagram.com/yahiabaiz"
            target="_blank"
            className="footer__instagram-link"
          >
            <InstagramIcon />
          </a>
        </div>
        <a
          href="https://github.com/iamyahia"
          target="_blank"
          className="footer__github-link"
        >
          <span className="footer__github-username">@iamyahia</span>
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
