import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = (props) => {

    return(
        <div>
            <div className={'col col-sm container-fluid bg-dark vh-100 '}>
                
                <div className={'row inline-flex flex-fill flex-column row-flex'}>
                    <div className={'row '}>  
                        <div id={"map-container-google-1"} className={"d-flex z-depth-1-half map-container justify-content-center my-5 py-5"} >
                            <iframe title="LPCOMAP" width="600" loading="lazy" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.876436235762!2d-73.78181556888879!3d40.72889579563107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261a64a877d53%3A0x47f709644bd5dcf2!2sL%20P%20%26%20Company%20Hair%20Design!5e0!3m2!1sen!2sus!4v1624315075544!5m2!1sen!2sus"></iframe>
                            <div className={'border justify-content-center bg-light'}>
                                <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'map-marker-alt'} /> Visit Us</div>
                                <div className={'fs-5'}>187-12 Union Turnpike<br/>Fresh Meadows, NY</div>
                                <br/>
                                <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'phone'}></FontAwesomeIcon> Call Us</div>
                                <div className={'fs-5'}>(718) 264-0600</div>
                                <br/>
                                <div className={'fw-bold fs-4'}><FontAwesomeIcon icon={'clock'}></FontAwesomeIcon> Hours:</div>
                                <div className={'fs-6'}>Tues - Wed - Friday</div>
                                <div className={'fs-5'}>9:30AM to 5:30PM</div>
                                <div className={'fs-5'}>Thurs</div>
                                <div className={'fs-5'}> 9:30AM - 7:30PM</div>
                                <div className={'fs-5'}>Sat</div>
                                <div className={'fs-5'}>8:30AM - 5:30PM</div>
                                <div className={'fs-5'}>Sun</div>
                                <div className={'fs-5'}>10AM - 3PM</div>
                            </div>

                        </div>

                    </div>    
                    
                </div>
                    
            </div>
        </div>
    )
};

export default Contact;


 