import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './FrenchRecipes.css'; // Import your SCSS/CSS file for styles

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">Korean </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Tteok-bokki</h3>
              <img height={300} width={450} src="https://api.vip.foodnetwork.ca/wp-content/uploads/2022/03/cheesy-tteokbokki-feat.jpg" alt="Tteok-bokki" />
              <p>
                Tteokbokki is a popular Korean street food featuring chewy rice cakes simmered in a spicy and sweet gochujang sauce. 
                This dish is known for its bold flavors and satisfying texture.
              </p>
              <Link to="/tteobokki">
                <button className="btn btn-outline btn-sm service-card__button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Dak-galbi</h3>
              <img height={300} width={450} src="https://media.istockphoto.com/id/1298312945/photo/cheese-dak-galbi.jpg?s=612x612&w=0&k=20&c=Nc0SKmU64uVfVxX2r35Zzuazc74ybhIsRePNjhSXF1E=" alt="Dak-galbi" />
              <p>
                Dak-galbi is a Korean dish made with spicy, marinated chicken stir-fried with vegetables and rice. 
                The spicy-sweet sauce and tender chicken create a satisfying meal.
              </p>
              <Link to="/dakgalbi">
                <button className="btn btn-outline btn-sm service-card__button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Mochi</h3>
              <img height={300} width={450} src="https://www.japanesecooking101.com/wp-content/uploads/2021/09/DSC00865-1140x640.jpeg" alt="Mochi" />
              <p>
                Mochi is a Japanese rice cake made from glutinous rice, known for its chewy texture and subtle sweetness. 
                It's often enjoyed plain or with various fillings and toppings.
              </p>
              <Link to="/mochi">
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
