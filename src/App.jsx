import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="d">
        <h1>Top Page</h1>
        <h2>ここはTop Pageです</h2>
        <br />
        <img className="i" src="_.jpeg"></img>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
