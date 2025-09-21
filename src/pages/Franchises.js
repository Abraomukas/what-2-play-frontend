import React from "react";

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Franchises() {
  const franchises = [
    {
      title: "Final Fantasy",
      picture: "franchises/final-fantasy-xvi.webp",
      path: "",
    },
    {
      title: "Need for Speed",
      picture: "franchises/nfs-unbound.webp",
      path: "",
    },
    { title: "NBA 2K", picture: "franchises/nba-2k23.webp", path: "" },
    {
      title: "Borderlands",
      picture: "franchises/borderlands-2.webp",
      path: "",
    },
    { title: "Dragon Ball", picture: "franchises/kakarot.webp", path: "" },
    {
      title: "Dark Souls",
      picture: "franchises/dark-souls-remastered.webp",
      path: "",
    },
    { title: "Overcooked", picture: "franchises/overcooked-2.webp", path: "" },
  ];

  return (
    <div>
      <Navbar />

      <div
        style={{ position: "relative", minHeight: "100vh" }}
        className="d-flex justify-content-between align-items-center my-5"
      >
        {/* GRID */}
        <div className="container text-center">
          <div className="row row-cols-5 row-cols-md-5 g-4">
            {franchises.map(({ title, picture }, index) => {
              return (
                <div key={index} className="col">
                  <div className="card">
                    <img
                      src={`./images/${picture}`}
                      className="card-img-top"
                      alt={`${title} games`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Franchises;
