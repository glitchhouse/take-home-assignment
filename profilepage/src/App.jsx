
import Header from "./components/header";
import "./App.css";
import "@fontsource/cooper-hewitt"; 
import Page from "./components/page";
function App() {
 

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="toggle">
    <Page/>
      </div>
    </>
  );
}

export default App;
