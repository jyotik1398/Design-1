import { useTranslation } from "react-i18next";
import { header } from "../../configs/json/header";
import styles from "./Header.module.scss";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.title}>
          <span>{t(header?.title)}</span>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuOpt}>
            <nav>
              <ul>
                {header?.menuList.map((menus, index) => {
                  return (
                    <li key={`menus-${index}`} className={styles.option}>
                      <Link to={menus?.link}>{t(menus?.menu)}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.img}>
            <Icon icon="akar-icons:search" />
          </div>
          <div className={styles.btnWrapper}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
              className={styles.getStartedButton}
              disableElevation={true}
              disableFocusRipple={true}
              disableRipple={true}
              disableTouchRipple={true}
            >
              <span className={styles.buttonText}>
                {t(header?.getStartedBtn)}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
