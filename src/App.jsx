//components
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Menu />
        <Content />
      </Main>
      <Footer />
    </>
  );
};

export default App;
