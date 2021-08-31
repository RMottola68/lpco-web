import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import communityTwo from './assets/community/comm_2.jpg';
import communityThree    from './assets/community/comm_3.jpg';
import communityFour from './assets/community/comm_4.jpg';
import communityFive from './assets/community/comm_5.jpg';
import communitySix from './assets/community/comm_6.jpg';
import communitySeven from './assets/community/comm_7.jpg';
import communityEight from './assets/community/comm_8.jpg';
import communityNine from './assets/community/comm_9.jpg';
import communityTen from './assets/community/comm_10_edit.png';


const Community = (props) => {

    return(
        <div className={'column-fluid vh-100'} >
            
            <Container fluid={'md'} className={''}>
                <h3 className={'text-light'}>We pride ourselves on bringing smiles and positivity to our community! </h3>
                {/* <br/>
                <div id={'charityVideo'}>
                    <iframe 
                    width="75%"
                    height="auto"
                    src="https://www.youtube.com/embed/AQ2uPSo0oFA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>

                    </iframe>
                </div> */}

                <Carousel controls={'false'} className={'py-5'} prevIcon={<span aria-hidden='true' className="carousel-control-prev-icon m-5 m-md-0" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon m-5 m-md-0" />}>
                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityTwo}
                        alt="Charity piano playing at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityThree}
                        alt="Santa hugging a disabled girl"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityFour}
                        alt="Santa and friends at a charity"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityFive}
                        alt="Santa and the girls at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communitySix}
                        alt="Playing the piano with the marines at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communitySeven}
                        alt="Marine taking a picture at the cut-a-thon charity"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityEight}
                        alt="Marine handing out a gift at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityNine}
                        alt="Larry, the Marines, and the girls smiling for a photo at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>                

                    <Carousel.Item>
                        
                        <img 
                        id={'commIMG'}
                        className="d-block mx-auto"
                        src={communityTen}
                        alt="The girls and santa posing for a picture at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </Container>
        </div>
    )
};

export default Community;