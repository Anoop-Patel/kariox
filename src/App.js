import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./routes/RouteComponent";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
      <ToastContainer
        rtl={false}
        closeOnClick
        theme="colored"
        hideProgressBar
        autoClose={1500}
        transition={Slide}
        closeButton={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
}

export default App;
