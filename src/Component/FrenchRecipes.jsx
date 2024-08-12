import React from 'react';
import './FrenchRecipes.css'; // Import your SCSS/CSS file for styles
import { Link } from 'react-router-dom';

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">French </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Quiche Lorraine</h3>
              <img height={300} width={450} src="https://theviewfromgreatisland.com/wp-content/uploads/2021/04/quiche-Lorraine-2215-April-12-2021.jpg" alt="Quiche Lorraine" />
              <p>
                Quiche Lorraine is a classic French dish featuring a savory custard filled with bacon and cheese. 
                Encased in a flaky pastry crust, this quiche is rich and satisfying.
              </p>
              <Link to="/lorraine">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Ratatouille</h3>
              <img height={300} width={450} src="https://ohmydish.com/_ipx/f_webp&q_60&s_2400x1600/https://ohmydish.com/wp-content/uploads/2015/03/Remys-ratatouille-2.jpg" alt="Ratatouille" />
              <p>
                Ratatouille is a traditional French Provençal stewed vegetable dish, originating from Nice. 
                This colorful dish is celebrated for its rich flavors and vibrant presentation.
              </p>
              <Link to="/ratatouille">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Crème Brûlée</h3>
              <img height={300} width={450} src="https://recipesformen.com/wp-content/uploads/2021/02/creme-brulee-14.jpg" alt="Crème Brûlée" />
              <p>
                Crème brûlée is a rich French dessert with a smooth custard base and a caramelized sugar layer. 
                Its luxurious texture contrasts with the satisfying crunch of the burnt sugar.
              </p>
              <Link to="/cremebrulee">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisersServiceCard;
