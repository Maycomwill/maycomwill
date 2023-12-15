import "./styles/main.css";
import { AppRouter } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex h-screen flex-col text-gray-100">
      <div className="flex">
        <Header />
      </div>
      <div className="flex flex-1">
        <AppRouter />
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}

export default App;
