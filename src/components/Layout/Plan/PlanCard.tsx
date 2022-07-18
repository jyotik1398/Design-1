import { useTranslation } from 'react-i18next';
import styles from './PlanCard.module.scss';
import check from '../../../assets/icons/check.png';
import close from '../../../assets/icons/close.png';
import { Button } from '@material-ui/core';
const PlanCard = (props:{
    data?: any;
}) => {
    const {data}= props;
    const { t } = useTranslation ();
    return(
        <div className={styles.outerWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.header}>
                    <div className={styles.headerTextArea}>
                        <div className={styles.headerText}>{t(data?.header)}</div>
                        <div className={styles.headerDesc}>{t(data?.subText)}</div>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.priceBody}>{t(data?.price)}</div>
                    </div>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.body}>
                    <div className={styles.listItem}>
                    {data?.list.map((lists :any, index:any) =>{
                        return(
                            <div
                            key={`lists-${index}`}
                            className={styles.cardContainer}
                          >
                            <span className={styles.icon}>
                                <img src={t(lists?.icon) === "check" ? check : close} />
                            </span>
                            <span className={t(lists?.icon) === "check" ? styles.value : styles.disbaledValue}>{t(lists?.value)}</span>
                            </div>
                        );
                    })}  
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
                    {"Sign up"}
                    </span>
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlanCard;