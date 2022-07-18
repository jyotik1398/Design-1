import { useTranslation } from 'react-i18next';
import { PlanJson, plans } from '../../../configs/json/plan';
import styles from './Plan.module.scss';
import PlanCard from './PlanCard';
const Plan = () => {
    const { t } = useTranslation();
    return(
        <div className={styles.outerWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.subText}>
                    <span className={styles.text}>{t(PlanJson?.subText)}</span>
                </div>
                <div className={styles.heading}>
                    <span>{t(PlanJson?.header)}</span>
                </div>
                <div className={styles.cardWrapper}>
                {plans?.map((plan, index) =>{
                        return(
                            <div
                            key={`cards-${index}`}
                            className={styles.cardContainer}
                          >
                            <PlanCard
                            data={plan}
                            />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Plan;