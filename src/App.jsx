import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
import Footer from "./Footer";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.key}
        {...card}
      />
    );
  });

  return (
    <>
      <Navbar />
      <section className="card--list">{cards}</section>
      <Footer />
    </>
  );
}

export default App;
