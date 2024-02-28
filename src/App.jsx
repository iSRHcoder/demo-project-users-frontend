import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <PageRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
