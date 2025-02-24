import Logo from "@assets/icons/images/logo.png";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function MyFooter() {
  const { containerFooter, content, contentFirst, contentSecond, buttonIcon, iconItem } =
    styles;

  return (
    <div className={containerFooter}>
      <div className={content}>
        <div className={contentFirst}>
          <img src={Logo} alt="logo" />
          <p>
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>
          <div className={buttonIcon}>
            <Button className={iconItem}>
              <FaFacebookF />
            </Button>
            <Button className={iconItem}>
              <FaLinkedinIn />
            </Button>
            <Button className={iconItem}>
              <FaTwitter />
            </Button>
            <Button className={iconItem}>
              <FaInstagram />
            </Button>
          </div>
        </div>
        <div className={contentSecond}>
          <div>Get Started</div>
          <div>Get Help</div>
          <div>Company</div>
          <div>FootEats For</div>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
