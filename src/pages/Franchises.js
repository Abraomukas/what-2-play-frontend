import React from "react";

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Franchises() {
  const franchises = [
    { title: "Final Fantasy", picture: "final-fantasy-xvi.webp", path: "" },
    { title: "Need for Speed", picture: "nfs-unbound.webp", path: "" },
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
