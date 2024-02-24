import "./App.css";
import StartPage from "./components/StartPage/StartPage";
// import SwipeMenu from "./components/SwipeMenu/SwipeMenu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <StartPage />
      {/* <SwipeMenu /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
