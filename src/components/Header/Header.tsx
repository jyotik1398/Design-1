import { useTranslation } from "react-i18next";
import { header } from "../../configs/json/header";
import styles from './Header.module.scss';
import searchIcon from '../../assets/icons/searchIcon.svg';
import { Button } from "@material-ui/core";
import { Icon } from '@iconify/react';

const Header = () => {
    const { t } = useTranslation();
    return(
        <div className={styles.outerWrapper}>
           <div className={styles.innerWrapper}>
            <div className={styles.title}>
                <span>{t(header?.title)}</span>
            </div>
            <div className={styles.menu}>
                <div className={styles.menuOpt}>
                <span className={styles.option}>{t(header?.menu1)}</span>
                <span className={styles.option}>{t(header?.menu2)}</span>
                <span className={styles.option}>{t(header?.menu3)}</span>
                <span className={styles.option}>{t(header?.menu4)}</span>
                <span className={styles.option}>{t(header?.menu5)}</span>
                <span className={styles.option}>{t(header?.menu6)}</span>
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
    )
}
export default Header;