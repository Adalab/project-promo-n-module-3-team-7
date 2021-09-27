// Fichero src/components/App.js

import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  //const styles = `page-wrapper design__container selection js_collapsable_design ${theme}`;
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
