// app/page.tsx
import Hero from './components/Hero';
import Menu from './components/Menu';

const HomePage = () => {
  return (
    <>
      <Menu />
      <Hero />
      {/* Outras seções podem ser adicionadas aqui */}
    </>
  );
};

export default HomePage;
