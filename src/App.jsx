import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";


function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.key}
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    );
  });

  return (
    <>
      <Navbar />
      <section className="card--list">{cards}</section>
    </>
  );
}

export default App;
