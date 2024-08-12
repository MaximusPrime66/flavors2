import React from 'react';
import './JapanRecipes.css'; // Import your SCSS/CSS file for styles
import { Link } from 'react-router-dom';

const AdvertisersServiceCard = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              <h3>Our</h3>
              <span className="b-class-secondary">Japanese </span>Dishes
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <h3>Soba</h3>
              <img height={300} width={450} src="https://www.thespruceeats.com/thmb/sJ5V7QYQDmZ5xBo0PEdnbBU2AZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tsukimi-soba-2031632-hero-07-b4d22d49d58d42a38cc95ee01636d066.jpg" alt="Soba" />
              <p>
                Soba are thin, buckwheat noodles from Japan, prized for their nutty flavor and firm texture. 
                They offer a versatile and satisfying meal.
              </p>
              <Link to="/soba">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Donburi</h3>
              <img height={300} width={450} src="https://www.seriouseats.com/thmb/d2RvhWY6KegmNOnPmyoYJF3NGO0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20191203-donburi-rice-bowl-vicky-wasik-12-f844760e70ec46b79e2bb36de43ca0a2.jpg" alt="Donburi" />
              <p>
                Donburi is a Japanese rice bowl dish topped with a variety of ingredients simmered in a savory sauce. 
                It's a comforting meal, combining flavors and textures in a single bowl.
              </p>
              <Link to="/donburi">
                <button className="btn btn-outline btn-sm movie-card__button" type="button">View</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <h3>Dorayaki</h3>
              <img height={300} width={450} src="https://cdn.media.amplience.net/i/japancentre/recipe-414-dorayaki-pancakes/Dorayaki-pancakes?$poi$&w=700&h=410&sm=c&fmt=auto" alt="Dorayaki" />
              <p>
                Dorayaki is a popular Japanese confection consisting of two fluffy, cakes filled with sweet red bean paste. 
                This delightful treat combines a soft, spongy texture with a creamy filling.
              </p>
              <Link to="/dorayaki">
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
