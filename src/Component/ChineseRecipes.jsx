import React from 'react';
import './JapanRecipes.css'; // Import your SCSS/CSS file for styles
import { Link } from 'react-router-dom'; // Import Link for routing

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">Chinese </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Har Gow</h3>
              <img height={300} width={450} src="https://media-cdn2.greatbritishchefs.com/media/nd3bemis/img34601.whqc_768x512q80.jpg" alt="Har Gow" />
              <p>
                Har gow are delicate Chinese dumplings made with rice flour and filled with seasoned shrimp. 
                These dumplings are prized for their tender texture and savory, juicy filling.
              </p>
              <Link to="/hargow">
                <button className="btn btn-outline btn-sm service-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Kung Pao Chicken</h3>
              <img height={300} width={450} src="https://www.oliveandmango.com/images/uploads/2020_04_27_takeout_style_kung_pao_chicken_0.jpg" alt="Kung Pao Chicken" />
              <p>
                Kung Pao chicken is a spicy Chinese dish featuring tender chicken, bell peppers, 
                and dried chili peppers in a tangy, savory sauce. 
              </p>
              <Link to="/kungpao">
                <button className="btn btn-outline btn-sm service-card__button" type="button">View </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Jasmine Tea</h3>
              <img height={300} width={450} src="https://senchateabar.com/cdn/shop/articles/5dbdee2cc2ce783b6156f649_5ae9ff6e873cad3113dcc848_yun-niang-fresh-in-mind-2123308_960_720_960x.jpeg?v=1596650969" alt="Jasmine Tea" />
              <p>
                Chinese jasmine tea is a fragrant green tea infused with jasmine blossoms, offering a delicate, 
                floral aroma and a smooth, soothing flavor.
              </p>
              <Link to="/jasminetea">
                <button className="btn btn-outline btn-sm service-card__button" type="button">View </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisersServiceCard;
