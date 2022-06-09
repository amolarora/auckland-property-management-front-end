import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

///import image1 from '../images/property2-4.jpg';

function HomeSlider() {
    return (
        <>
            <Carousel className='HomeCarousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/property2-4.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>3A Copley Street, New Lynn, Auckland</h3>
                        <p>3 Bedrooms, 1 Bathroom, $599 Weekly Rent</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='/property-details'><img
                    className="d-block w-100"
                    src={require('../images/property10-6.jpg')}
                    alt="Second slide"
                    /></a>

                    <Carousel.Caption>
                    <h3>3/123 Forrest Hill Road, Forrest Hill, Auckland</h3>
                    <p>5 Bedrooms, 3 Bathrooms, $1150 Weekly Rent</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property8-3.jpg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>1/30 Kempthorne Crescent, Mission Bay</h3>
                    <p>3 Bedrooms, 2 Bathrooms, $920 Weekly Rent</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeSlider;