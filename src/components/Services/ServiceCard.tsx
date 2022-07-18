import { useTranslation } from 'react-i18next';
import styles from './ServiceCard.module.scss';
import icon from '../../assets/icons/rocket.png';
const ServiceCard = (props:{
data?:any;
}) => {
    const {data} = props;
    const { t } = useTranslation();
    return(
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.imgWrapper}>
                    <img src={icon}/>
                </div>
                <div className={styles.title}>
                    <span>{t(data?.title)}</span>
                </div>
                <div className={styles.description}>
                    <span>
                        {t(data?.desc)}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;