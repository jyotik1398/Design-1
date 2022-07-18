import styles from './Experiment.module.scss';
import image from '../../../assets/images/img.jpg';
import { useTranslation } from 'react-i18next';
const ExperimentCard = (props:{data:any}) => {
    const {data}=props;
    const { t } = useTranslation();
    return(
    <div className={styles.outerWrapper}>
        <div className={styles.imgContainer}>
        <img src={image}/>
        </div>
        <div className={styles.title}>{t(data?.title)}</div>
        <div className={styles.desc}>{t(data?.desc)}</div>
    </div>
    );
}
export default ExperimentCard;