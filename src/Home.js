import './Home.css';
import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import hairOne from './assets/IMG_1.jpg';
import hairSix from './assets/IMG_6.jpg';
import hairSev from './assets/IMG_0054.PNG';
import homeBG from './assets/BG_HOME.jpg';
import hairTwo from './assets/HairTwo.png';
import hairMainTwo from './assets/hair_man_2.png';

var sectionStyle = {
    overflowY: `hidden`
 }

const Home = (props) => {

    return(
        
        <div className={"container-fluid flex-column bg-dark text-light vh-100"} >
            
            

            <div className={"jumbotron bg-dark text-light pt-3"} >
                {/* <h1 className={"display-2 "}>LP & COMPANY HAIR DESIGN</h1> */}
                <p className={"lead fs-2 fw-bold"}>Fresh Meadows' Premiere Full Service Salon</p>
                <hr className={"my-4"} />

            </div>
            <Container fluid={'md'} className={'py-5 '}>
                <Carousel className={'bg-dark py-5'} >
                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-25 mx-auto"
                        src={hairSix}
                        alt="Hairstyle with flowers"
                        />
                        <h3>LP & Company is dedicated to providing Peace, Harmony, and Well-Being in a celebration of Beauty</h3>
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-25 mx-auto"
                        src={hairSev}
                        alt="Woman with silver hair dye"
                        />
                        <h3>Our vision as professionals is to better serve our clients with creativity, warmth, and confidence.</h3>

                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-25 mx-auto"
                        src={hairOne}
                        alt="Man's Skrillex Hairstyle"
                        />
                        <h3>Courteous appointment spacing means no long waits for your service to begin!</h3>
                        

                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-25 mx-auto"
                        src={hairTwo}
                        alt="Woman's Braided Hair"
                        />
                        <h3>Classically beautiful styles!</h3>
                        

                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-25 mx-auto"
                        src={hairMainTwo}
                        alt="Man smiling after short haircut"
                        />
                        <h3>We can offer a wide variety of hairstyles, no matter your preference!</h3>
                        

                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            
            
            
            
            <div className={'bg-dark'} >
                <h4>Featured in several publications, our courteous and professional staff has served men and women in the New York Area for over twenty seven years. </h4>
                <p className={"lead"}>
                    <Button variant={'danger'} size={'lg'} href={'/Services'} role={'button'}>Check Out Our Services Here!</Button>
                </p>
            </div>

                 

        </div>
    )
};

export default Home;