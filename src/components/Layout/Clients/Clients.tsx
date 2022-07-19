import { useTranslation } from "react-i18next";
import { ClientJson, experiment } from "../../../configs/json/clients";
import { SliderData } from "../../../configs/json/SliderData";
import ExperimentCard from "../ExperimentCard/ExperimentCard";
import styles from "./Clients.module.scss";
import ImageSlider from "./Slider";
const Clients = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.subHeader}>{t(ClientJson?.subHeader)}</div>
        <div className={styles.header}>{t(ClientJson?.header)}</div>
        <div>
          <ImageSlider slides={SliderData} />
        </div>
        <div className={styles.news}>
          <div className={styles.subHeading}>{t(ClientJson?.news)}</div>
          <div className={styles.expt}>{t(ClientJson?.expt)}</div>
        </div>
        <div className={styles.cardContainer}>
          {experiment?.map((expt, index) => {
            return (
              <div key={`expt-${index}`} className={styles.cardWrapper}>
                <ExperimentCard data={expt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Clients;
