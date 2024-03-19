import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card--img--box">
        <img src="https://source.unsplash.com/WLxQvbMyfas" alt="image-name" />
      </div>
      <div className="card--info">
        <i className="fa-solid fa-location-dot card--location--icon"></i>
        <h2 className="card--location">Japan</h2>
        <a className="card--location--url" href="#">
          View on Google Maps
        </a>
        <h3 className="card--title">Mount Fuji</h3>
        <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="card--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptatibus.
        </p>
      </div>
    </div>
  );
}
