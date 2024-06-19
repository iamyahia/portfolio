import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="footer">
      {/* // TODO: fix spacing and add classname then remove inline css style. */}
      <p>find me in:</p>
      <div className="social-icons">
        <div style={{ display: "flex" }}>
          <a href="https://linkedin.com/in/iamyahia" target="_blank">
            <LinkedinIcon />
          </a>
          <a href="https://instagram.com/yahiabaiz" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <a href="https://github.com/iamyahia" target="_blank">
          <span>@iamyahia</span>
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
