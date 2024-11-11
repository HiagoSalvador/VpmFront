import AppRoutes from "./components/routes/Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
