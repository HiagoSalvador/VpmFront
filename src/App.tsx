import Evaluation from "./components/evaluations/evaluations";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/Main";



const App: React.FC = () => {
  return (
    <>
    <Header/>
   <Main/>
     <Evaluation/>
     <Footer/>
     
    </>
  );
};

export default App;
