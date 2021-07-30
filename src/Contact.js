import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = (props) => {

    return(
        <div>
            <div className={'col container'}>
                
                <div className={'d-flex row pt-5'}>
                    <div className={'container border py-3'}>
                        <div className={'row'}>
                            <div className={'justify-content-center text-light'}>
                                <div className={'d-inline-block col-6'}>
                                    <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'map-marker-alt'} /> Visit Us</div>
                                    <div className={'fs-5'}>187-12 Union Turnpike<br/>Fresh Meadows, NY</div>
                                </div>
                                <div className={'d-inline-block col-6 align-top'}>   
                                    <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'phone'}></FontAwesomeIcon> Call Us</div>
                                    <div className={'d-inline-block fs-5 pt-2'}><a href={'tel:718-264-0600'}  className={''}>(718) 264-0600</a></div>
                                </div> 
                            

                            </div>
                        </div>

                        <div className={'row text-light mt-5'}>
                            <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'clock'}></FontAwesomeIcon> Hours:</div>
                            <div className={'col-lg-3'}>   
                                <div className={'fs-4 text-decoration-underline'}>Tues-Wed-Friday</div>
                                <div className={'fs-5'}>9:30AM to 5:30PM</div>
                            </div>
                            <div className={'col-lg-3'}>
                                <div className={'fs-4 text-decoration-underline'}>Thurs</div>
                                <div className={'fs-5'}> 9:30AM - 7:30PM</div>
                            </div>
                            <div className={'col-lg-3'}>
                                <div className={'fs-4 text-decoration-underline'}>Sat</div>
                                <div className={'fs-5'}>8:30AM - 5:30PM</div>
                            </div>
                            <div className={'col-lg-3'}>
                                <div className={'fs-4 text-decoration-underline'}>Sun</div>
                                <div className={'fs-5'}>10AM - 3PM</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={'container g-0'}>  
                        <div id={"map-container-google-1"} className={"d-flex z-depth-1-half map-container justify-content-center py-5"} >
                            <iframe title="LPCOMAP" width="1000" height="600"loading="lazy" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.876436235762!2d-73.78181556888879!3d40.72889579563107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261a64a877d53%3A0x47f709644bd5dcf2!2sL%20P%20%26%20Company%20Hair%20Design!5e0!3m2!1sen!2sus!4v1624315075544!5m2!1sen!2sus"></iframe>


                        </div>

                    </div>    
                    
                </div>
                    
            </div>
        </div>
    )
};

export default Contact;


 