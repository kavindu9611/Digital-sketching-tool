import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import StyleSheet from "./index.module.css";
const Menu = () => {
  return (
    <div className={StyleSheet.menuContainer}>
      <div className={StyleSheet.iconWrapper}>
        <FontAwesomeIcon icon={faPencil} className={StyleSheet.icon} />
      </div>
      <div className={StyleSheet.iconWrapper}>
        <FontAwesomeIcon icon={faEraser} className={StyleSheet.icon} />
      </div>
      <div className={StyleSheet.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={StyleSheet.icon} />
      </div>
      <div className={StyleSheet.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={StyleSheet.icon} />
      </div>
      <div className={StyleSheet.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={StyleSheet.icon} />
      </div>
    </div>
  );
};

export default Menu;
