import { useTranslation } from 'react-i18next';
import { cards, MainPageJson } from '../../../configs/json/mainPage';
import styles from './MainPage.module.scss';
import ladyImg from '../../../assets/images/lady.png';
import { Button } from '@material-ui/core';
import ServiceCard from '../../Services/ServiceCard';
import img1 from '../../../assets/images/im1.png';


const MainPage = () => {
    const { t } = useTranslation();
    return(
        <div className={styles.wrapper}>
            <div className={styles.block1}>
                <div className={styles.text}>
                    <span className={styles.label}>{t(MainPageJson?.mainLabel)}</span>
                    <span className={styles.desc}>{t(MainPageJson?.subText)}</span>
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
                    {t(MainPageJson?.readMoreBtn)}
                    </span>
                    </Button>
                </div>
                </div>
                <div className={styles.imgSection}>
                    <img src={ladyImg}/>
                </div>
            </div>
            <div className={styles.block2}>
                <div className={styles.services}>{t(MainPageJson?.amazingService)}</div>
                <div className={styles.desc1}>{t(MainPageJson?.desc)}</div>
                <div className={styles.cardsWrapper}>
                    {cards?.map((card, index) =>{
                        return(
                            <div
                            key={`cards-${index}`}
                            className={styles.cardContainer}
                          >
                            <ServiceCard
                            data={card}
                            />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.block3}>
                <div className={styles.companyData}>
                    <div className={styles.subHeading}>
                        <span>{t(MainPageJson?.company)}</span>
                    </div>
                    <div className={styles.subHeading2}>
                        <span>{t(MainPageJson?.companyHeading)}</span>
                    </div>
                    <div className={styles.comDesc}>
                        <span>{t(MainPageJson?.comDesc)}</span>
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
                    {t(MainPageJson?.readMoreBtn) + " -->"}
                    </span>
                    </Button>
                    </div>
                </div>
                <div className={styles.imageSec}>
                    <div className={styles.img1}>
                        <img src={img1}/>
                    </div> 
                </div>
            </div>
            <div className={styles.block4}>
                <div className={styles.img2}>
                    <div className={styles.imgClass}><img src={img1}/></div>
                    <div className={styles.counter}>
                        <div className={styles.innerCard}>
                            <div className={styles.count}>{t(MainPageJson?.count1)}</div>
                            <div className={styles.countDesc}>{t(MainPageJson?.countDesc)}</div>
                            <div className={styles.acc}>{t(MainPageJson?.accCount)}</div>
                            <div className={styles.accDesc}>{t(MainPageJson?.accDesc)}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.data}>
                    <div className={styles.subHeadingBussiness}>
                        <span>{t(MainPageJson?.diff)}</span>
                    </div>
                    <div className={styles.headingBussiness}>
                        <span>{t(MainPageJson?.bussinessHeading1)}</span>
                    </div>
                    <div className={styles.bussinessDesc}>
                        <span>{t(MainPageJson?.bussinessDesc)}</span>
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
                    {t(MainPageJson?.readMoreBtn) + " -->"}
                    </span>
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;