import { useTranslation } from "react-i18next";
import styles from "./ServiceCard.module.scss";
import icon from "../../assets/icons/rocket.png";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
const ServiceCard = (props: { data?: any }) => {
  const { data } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { t } = useTranslation();
  return (
    <div
      className={styles.wrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.innerWrapper}>
        <div className={styles.imgWrapper}>
          <img src={icon} alt="" />
        </div>
        <div className={styles.title}>
          <span>{t(data?.title)}</span>
        </div>
        <div className={styles.description}>
          <span>{t(data?.desc)}</span>
        </div>
        {isHovering && (
          <div className={styles.btnWrapper}>
            <Button>
              <span className={styles.buttonText}>{t(data?.btn)}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceCard;
