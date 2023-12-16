import "./styles/main.css";
import { AppRouter } from "./routes";
import AppProvider from "./hooks";


function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
