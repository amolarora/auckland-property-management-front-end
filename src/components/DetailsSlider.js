import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

///import image1 from '../images/property2-4.jpg';

function DetailsSlider() {
    return (
        <>
            <Carousel className='DetailsCarousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/property10-1.jpg')}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-2.jpg')}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-3.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-4.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-5.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-6.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-7.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-8.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-9.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../images/property10-10.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="820" height="550" src="https://youtube.com/embed/s6HSSys0uKU" title='PropertyVideo'></iframe>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default DetailsSlider;