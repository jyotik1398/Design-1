import styles from './Layout.module.scss';
import Clients from "./Clients/Clients";
import MainPage from "./MainPage/Main";
import Plan from "./Plan/Plan";

const Layout = () => {
    return(
        <div className={styles.wrapper}>
            <MainPage/>
            <Plan/>
            <Clients/>
        </div>
    )
}
export default Layout;