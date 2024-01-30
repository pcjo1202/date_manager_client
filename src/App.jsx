import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

function App({ Search }) {
  return (
    <div className={styles.container}>
      <Header />
      <Main Search={Search} />
      <Footer />
    </div>
  );
}

export default App;
