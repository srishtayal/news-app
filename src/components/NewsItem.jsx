import React from 'react';
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-3 mx-3" style={{ width: "325px", height: "550px", position: "relative" }}>
      <img src={src ? src : image} style={{ height: "250px", objectFit: "cover" }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column" style={{ minHeight: "200px" }}>
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text flex-grow-1">{description ? description.slice(0, 200) : "News provides updates on events, trends, and developments worldwide. It informs us and educates us, covering a wide spectrum."}</p>
        <a href={url} className="btn btn-primary" style={{ position: "absolute", bottom: "15px" }}>Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
