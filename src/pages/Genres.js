import React from "react";

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Genres = () => {
  const genres = [
    { title: "RPG", picture: "final-fantasy-xvi.webp", path: "" },
    { title: "Driving", picture: "nfs-unbound.webp", path: "" },
    { title: "Sport", picture: "nba-2k23.webp", path: "" },
    { title: "Shooter", picture: "borderlands-2.webp", path: "" },
    { title: "Indie", picture: "nobody-saves-the-world.webp", path: "" },
    { title: "Fighting", picture: "kakarot.webp", path: "" },
    { title: "Horror", picture: "until-dawn.webp", path: "" },
    { title: "Simulator", picture: "power-wash-sim.webp", path: "" },
    { title: "Souls-like", picture: "dark-souls-remastered.webp", path: "" },
    {
      title: "Action - Adventure",
      picture: "guardians-of-the-galaxy.webp",
      path: "",
    },
    { title: "MMO", picture: "final-fantasy-xiv.webp", path: "" },
    { title: "Coop", picture: "overcooked-2.webp", path: "" },
    { title: "Battle Royale", picture: "super-animal-royale.webp", path: "" },
    { title: "Puzzle", picture: "chicory.webp", path: "" },
    { title: "Platformer", picture: "hollow-knight.webp", path: "" },
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
            {genres.map(({ title, picture }, index) => {
              return (
                <div key={index} className="col">
                  <div className="card">
                    <img
                      src={`./images/genres/${picture}`}
                      className="card-img-top"
                      alt={`${title} games`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">Lore ipsum.</p>
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
};

export default Genres;
