import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './ItalianRecipes.css'; // Import your SCSS/CSS file for styles

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">Italian </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Arancini</h3>
              <img height={300} width={450} src="https://i0.wp.com/www.rhubarbandlavender.com/wp-content/uploads/2021/07/IMG_0946.jpeg?resize=999%2C680&ssl=1" alt="Arancini" />
              <p>
                Arancini are golden, crispy rice balls stuffed with a savory filling. 
                These delicious Italian treats are typically coated in breadcrumbs and fried to perfection.
              </p>
              <Link to="/arancini">
                <button className="btn btn-outline btn-sm service-card__button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Tiramisu</h3>
              <img height={300} width={450} src="https://images.pexels.com/photos/7783241/pexels-photo-7783241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tiramisu" />
              <p>
                Tiramisu is a classic Italian dessert featuring layers of coffee-soaked ladyfingers and a rich mascarpone cream.  
                Each bite offers a delightful mix of coffee and creaminess.
              </p>
              <Link to="/tiramisu">
                <button className="btn btn-outline btn-sm service-card__button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Branzino al Forno</h3>
              <img height={300} width={450} src="https://primochef.it/wp-content/uploads/2016/12/SH_branzino_al_forno-1200x800.jpg.webp" alt="Branzino al Forno" />
              <p>
                Branzino al Forno is an elegant Italian dish featuring whole branzino fish roasted to perfection. 
                Infused with olive oil and aromatic herbs, it delivers a tender experience.
              </p>
              <Link to="/branzino">
                <button className="btn btn-outline btn-sm service-card__button">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisersServiceCard;
