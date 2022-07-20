import styles from "./Layout.module.scss";
import Clients from "./Clients/Clients";
import MainPage from "./MainPage/Main";
import Plan from "./Plan/Plan";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.innerWrapper}>
        <MainPage />
        <Plan />
        <Clients />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
