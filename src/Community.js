import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import communityTwo from './assets/community/comm_2.jpg';
import communityThree    from './assets/community/comm_3.jpg';
import communityFour from './assets/community/comm_4.jpg';
import communityFive from './assets/community/comm_5.jpg';
import communitySix from './assets/community/comm_6.jpg';
import communitySeven from './assets/community/comm_7.jpg';
import communityEight from './assets/community/comm_8.jpg';
import communityNine from './assets/community/comm_9.jpg';
import communityTen from './assets/community/comm_10.jpg';

const Community = (props) => {

    return(
        <div className={'column-fluid bg-dark vh-100'} >
            
            <Container fluid={'md'} className={'py-5 '}>
                <h3 className={'text-light'}>We pride ourselves on bringing smiles and positivity to our community! </h3>
                <Carousel className={'bg-dark py-5'} >
                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityTwo}
                        alt="Charity piano playing at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityThree}
                        alt="Santa hugging a disabled girl"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityFour}
                        alt="Santa and friends at a charity"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityFive}
                        alt="Santa and the girls at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communitySix}
                        alt="Playing the piano with the marines at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communitySeven}
                        alt="Marine taking a picture at the cut-a-thon charity"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityEight}
                        alt="Marine handing out a gift at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityNine}
                        alt="Larry, the Marines, and the girls smiling for a photo at the cut-a-thon"
                        />
                        
                        <Carousel.Caption>
                        
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img 
                        className="d-block w-75 mx-auto"
                        src={communityTen}
                        alt="The LP&Company girls posing with santa at the cut-a-thon charity event"
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