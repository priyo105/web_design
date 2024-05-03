import NavBar from "./components/NavBar";
import "../src/index.css";
import Header from "./components/Header";
import Content from "./views/Content";
import Service from "./views/Service";
import Analytics from "./views/Analytics";
import Performance from "./views/Performance";
import FinalSection from "./views/FinalSection";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Content />
      <Service />
      <Analytics />
      <Performance />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
