import Menu from "./Menu/Menu.jsx";
import styles from "./styles.module.scss";
import Logo from "@assets/icons/images/logo.png";
import dataMenu from "./constants.js";
import Button from "../Button/Button.jsx";

function MyHeader() {
  const { images, containerHeader, box_image, content_menu, content_account, sign } = styles;

  return (
    <div className={containerHeader}>
      <div className={box_image}>
        <img src={Logo} alt="logo" className={images} />
      </div>
      <div className={content_menu}>
        {dataMenu.map((item, index) => (
          <Menu key={index} content={item.content} href={item.href} />
        ))}
      </div>
      <div className={content_account}>
        <h6 className={sign}>Sign In</h6>
        <Button content={"Sign Up"} />
      </div>
    </div>
  );
}

export default MyHeader;
