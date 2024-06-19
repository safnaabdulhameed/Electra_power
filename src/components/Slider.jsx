import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <imgn
                    className="d-block w-100"
                    src="path/to/your/image1.jpg" // Replace with your image path
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Incheon Motors Pvt. Ltd</h3>
                    <p>Kerala's Biggest Showroom and EV Charging Station</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path/to/your/image2.jpg" // Replace with your image path
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Description for the second slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path/to/your/image3.jpg" // Replace with your image path
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>Description for the third slide</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselBanner;