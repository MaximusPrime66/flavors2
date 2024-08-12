import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './IndianRecipes.css'; // Import your SCSS/CSS file for styles

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">Indian </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Paneer Tikka</h3>
              <img height={300} width={450} src="https://c.ndtvimg.com/2023-09/2fugrm2_paneer-tikka_625x300_18_September_23.jpg" alt="Paneer Tikka" />
              <p>
                Paneer tikka is an Indian appetizer made of marinated chunks of grilled paneer. 
                The spiced yogurt marinade imparts a smoky flavor and a tantalizing, charred finish.
              </p>
              <Link to="/paneer">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Hyderabadi Biryani</h3>
              <img height={300} width={450} src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_720,h_480,al_c,q_80,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" alt="Hyderabadi Biryani" />
              <p>
                Hyderabadi Biryani is a fragrant rice dish with spiced meat and saffron-infused rice. 
                Its rich spice blend and slow-cooked tenderness make it iconic.
              </p>
              <Link to="/Biryani">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Thandai</h3>
              <img height={300} width={450} src="https://t4.ftcdn.net/jpg/04/90/85/23/360_F_490852374_zAR7O8kw5NxcbzCmmEE0ShnetzaKElwJ.jpg" alt="Thandai" />
              <p>
                Thandai is a refreshing Indian drink made with a blend of milk, nuts, and spices. 
                It’s known for its aromatic flavor, which is perfect for hot weather.
              </p>
              <Link to="/thandai">
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
