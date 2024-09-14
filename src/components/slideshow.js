import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styling

const Slideshow=()=> {
    return (
        <div className="carousel container">
            
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={1000}
            >
                <div >
                    <img className='img-carousel' src="/img1.jpeg" alt="Slide 1" />
                    
                </div >
                <div >
                    <img className='img-carousel' src="/img2.jpeg" alt="Slide 2" />
                  
                </div>
                <div >
                    <img className='img-carousel' src="img3.jpeg" alt="Slide 3" />
                </div>
                <div>
                    <img className='img-carousel' src="img4.jpeg" alt="Slide 4"></img>

                </div>
                <div>
                    <img className='img-carousel' src="img5.jpeg" alt="Slide 5"></img>
                </div>
            </Carousel>
        </div>
    );
}

export default Slideshow;
