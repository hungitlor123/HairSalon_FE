import "./App.css";
import LoginForm from "./components/authentication/LoginForm";
import Header from "./components/layout/Header/Header";
import Home from "./page/customer/home/Homepage";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
