import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Ensure this CSS file is in the same directory

const LandingPage = () => {
  const navigate = useNavigate();
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const video3 = video3Ref.current;

    if (video1 && video2 && video3) {
      video1.play().catch(error => console.error('Error playing video1:', error));

      video1.addEventListener('ended', handleVideo1Ended);
      video2.addEventListener('ended', handleVideo2Ended);
    }

    function handleVideo1Ended() {
      video2.play().catch(error => console.error('Error playing video2:', error));
    }

    function handleVideo2Ended() {
      video3.play().catch(error => console.error('Error playing video3:', error));
    }

    // Clean up event listeners
    return () => {
      if (video1) video1.removeEventListener('ended', handleVideo1Ended);
      if (video2) video2.removeEventListener('ended', handleVideo2Ended);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/login', { state: { isSignUp: false } });
  };

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-visual">
          <div className="hero-visual-wrapper">
            <video 
              ref={video1Ref}
              className="hero-video video-1"
              muted
              playsInline
            >
              <source
                src="/videos/pizza2.mp4" // Ensure this path is correct
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              ref={video2Ref}
              className="hero-video video-2"
              muted
              playsInline
            >
              <source
                src="/videos/cheese e.mp4" // Ensure this path is correct
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              ref={video3Ref}
              className="hero-video video-3"
              muted
              playsInline
            >
              <source
                src="/videos/ramen1.mp4" // Ensure this path is correct
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="hero-content">
          <header className="hero-header">
            <div className="headline1">
              <span className="headline-container">
                <div className="headline-scroller">
                  <span className="scroll-item">Taste new Flavors</span>
                  <span className="scroll-item">Explore</span>
                  <span className="scroll-item">Inspiring audiences</span>
                </div>
              </span>
              <span> with our Recipes </span>
            </div>
            <div className="content-actions">
              {/* <button className="button" onClick={handleGetStarted}>
                <div className="bg-container">
                  <div className="bg-circle"></div>
                </div>
                <div className="front">
                  <span>Get started</span>
                </div>
              </button> */}
            </div>
          </header>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
