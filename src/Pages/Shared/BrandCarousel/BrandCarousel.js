import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dribbling from '../../../assets/images/dribbling.PNG'
import shooting from '../../../assets/images/shooting.PNG'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dribbling}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={shooting}
                        alt="Second slide"
                        />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;