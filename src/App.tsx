import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.innerWrapper}>
      <Layout/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
