import React from 'react';

const Services = (props) => {

    return(
        <div className={"container-fluid text-light"}>
            
            <div className={"jumbotron pb-5 text-light"}>
                <h1 className={"display-2 border-top border-bottom"}>Services</h1>
                <h4 className={'text-danger'}>There is a 3% surcharge on credit card payments</h4>
                <h4 className={'text-danger'}>There is no surcharge for debit card payments</h4>
            </div>

            <div className={'container'}>
                <div className={'row row-cols-3'}>
                    <ul className={'col-12 col-lg-6 col-xl-4 list-group mb-5'}><h2 className={'border-bottom'}>Hair Design</h2>
                        <h3 className={'text-decoration-underline list-group'}>H A I R S T Y L E</h3>
                        <p className={'my-0'}>(Includes Blowdry)</p>
                        <p className={'mt-0'}>(Prices Vary on Detailed Designs, Longer Length of Hair, and Designer's Time)</p>
                        <h4 className={'d-flex justify-content-between align-center list-group-item'}>Haircuts<span className={'d-flex'}>$35<h6 className={'text-danger'}>$36.05</h6>-$75<h6 className={'text-danger'}>$77.25</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Blowdry<span className={'d-flex'}>$37<h6 className={'text-danger'}>$38.11</h6>-$55<h6 className={'text-danger'}>$56.65</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Children's Haircuts Under 12<span className={'d-flex ml-5 my-auto  align-text-start'}>$20<h6 className={'text-danger'}>$20.6</h6>-$25<h6 className={'text-danger'}>$25.75</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Up-Do / Curling<span className={'d-flex'}>$85<h6 className={'text-danger'}>$87.55</h6>-$150<h6 className={'text-danger'}>$154.5</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Keratin Treatment<span className={'d-flex'}>$103<h6 className={'text-danger'}>$106.09</h6>/HR</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Body Wave / Perm <span className={'d-flex'}>$75<h6 className={'text-danger'}>$77.25</h6>-$150<h6 className={'text-danger'}>$154.05</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Special Effects & Relaxers<span className={'my-auto d-flex ml-5'}>$65<h6 className={'text-danger'}>$66.95</h6>-$150<h6 className={'text-danger'}>$154.05</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Scalp Treatments<span className={'d-flex'}>$30<h6 className={'text-danger'}>$30.9</h6></span></h4>
                        <h3 className={'text-decoration-underline mt-3 list-group pb-3'}>C O L O R</h3>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Permanent Single Process W/ Glaze<div className={'d-flex ml-5 my-auto'}>$61<h6 className={'text-danger'}>$62.83</h6>-$75<h6 className={'text-danger'}>$77.25</h6></div></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Semi Permanent<span className={'justify-content-between d-flex ml-5'}>$55<h6 className={'text-danger'}>$56.65</h6>-$65<h6 className={'text-danger'}>$66.95</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Glaze (Alone)<span className={'justify-content-between d-flex ml-5'}>$30<h6 className={'text-danger'}>$30.9</h6>-$40<h6 className={'text-danger'}>$41.2</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Highlites (Full Head)<span className={'justify-content-between my-auto d-flex ml-5'}>$85<h6 className={'text-danger'}>$87.55</h6>-$200<h6 className={'text-danger'}>$206</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Highlites (Partial)<span className={'justify-content-between d-flex ml-5'}>$65<h6 className={'text-danger'}>$66.95</h6>-$125<h6 className={'text-danger'}>$206</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Hairline Touch-Up<span className={'justify-content-between d-flex ml-5'}>$36<h6 className={'text-danger'}>$37.08</h6></span></h4>
                    </ul>
                    <ul className={'col-12 col-lg-6 col-xl-4 list-group'}><h2 className={'border-bottom'}>Hair Removal</h2>
                    <h4 className={'d-flex justify-content-between list-group-item'}>Threading<span className={'d-flex'}>$12<h6 className={'text-danger'}>$12.36</h6>-$30<h6 className={'text-danger'}>$30.9</h6></span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>F A C E</h3>                        
                        <h4 className={'d-flex justify-content-between list-group-item'}>Lip Wax<span className={'d-flex'}>$9<h6 className={'text-danger'}>$9.27</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Chin Wax<span className={'d-flex'}>$9<h6 className={'text-danger'}>$9.27</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Eyebrow Wax<span className={'d-flex'}>$10<h6 className={'text-danger'}>$10.30</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Sides of Face Wax<span className={'d-flex'}>$12<h6 className={'text-danger'}>$12.36</h6></span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>B O D Y</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Brazilian<span className={'d-flex'}>$40<h6 className={'text-danger'}>$41.20</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Half-Leg<span className={'d-flex'}>$23<h6 className={'text-danger'}>$23.69</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Leg<span className={'d-flex'}>$45<h6 className={'text-danger'}>$46.35</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Bikini<span className={'d-flex'}>$18<h6 className={'text-danger'}>$18.54</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Underarm<span className={'d-flex'}>$15<h6 className={'text-danger'}>$15.45</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Tummy Line<span className={'d-flex'}>$7<h6 className={'text-danger'}>$7.21</h6>-$9<h6 className={'text-danger'}>$9.27</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Half-Arm<span className={'d-flex'}>$18<h6 className={'text-danger'}>$18.54</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Arm<span className={'d-flex'}>$36<h6 className={'text-danger'}>$37.08</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Leg W/ Bikini<span className={'d-flex'}>$50<h6 className={'text-danger'}>$51.50</h6></span></h4>

                        <h3 className={'text-decoration-underline text-danger'}>TUESDAY & WEDNESDAY SPECIALS</h3>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Full-Leg<span className={'d-flex'}>$35<h6 className={'text-danger'}>$36.05</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Full-Leg W/ Bikini<span className={'d-flex'}>$42<h6 className={'text-danger'}>$43.26</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Manicure & Pedicure<span className={'d-flex'}>$30<h6 className={'text-danger'}>$30.09</h6></span></h4>
                    </ul>
                    <ul className={'col-12 col-xl-4 list-group'}><h2 className={'border-bottom'}>Manicure & Pedicure</h2>
                        <h3 className={'text-decoration-underline list-group pb-3'}>F I N G E R N A I L S</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Manicure / French<span className={'d-flex'}>$15<h6 className={'text-danger'}>$15.45</h6>/$18<h6 className={'text-danger'}>$18.54</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Shellac Gel Manicure<span className={'d-flex'}>$35<h6 className={'text-danger'}>$36.05</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>SNS Powder Manicure / French<span className={'d-flex ml-5 my-auto'}>$40<h6 className={'text-danger'}>$41.20</h6>/$50<h6 className={'text-danger'}>$51.50</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Powder Fill-In<span className={'d-flex'}>$32<h6 className={'text-danger'}>$32.96</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Silk Wrap<span className={'d-flex'}>$50<h6 className={'text-danger'}>$51.50</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Change of Polish<span className={'d-flex justify-content-end my-auto mx-1'}>Fingers $10<h6 className={'text-danger'}>$10.30</h6></span> <span className={'d-flex justify-content-end my-auto'}>Toes $15<h6 className={'text-danger'}>$15.45</h6></span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Change of French Polish<span className={'d-flex justify-content-end my-auto mx-1'}>Fingers $13<h6 className={'text-danger'}>$13.39</h6></span><span className={'d-flex justify-content-end my-auto'}>Toes $20<h6 className={'text-danger'}>$20.60</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full Set with Tips<span className={'d-flex'}>$50<h6 className={'text-danger'}>$51.50</h6></span></h4>                        
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Glue Down<span className={'d-flex justify-content-end w-100 my-auto'}>$8<h6 className={'text-danger'}>$8.24</h6></span> <span className={'d-flex justify-content-end w-100 my-auto'}>Single Wrap $5<h6 className={'text-danger'}>$5.15</h6></span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Single Tip with Wrap<span className={'d-flex'}>$8<h6 className={'text-danger'}>$8.24</h6></span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>S P A <br/>S E R V I C E S</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Classic Pedicure<span className={'d-flex'}>$28<h6 className={'text-danger'}>$28.84</h6></span></h4>
                        <p className={'fs-5 my-0 text-decoration-underline'}>30 minutes</p>
                        <p className={'fs-5'}>This treatment includes an Aqua Therapy Soak, lower leg massage, exfoliation, classic nail care & polish</p>
                        <h4 className={'d-flex justify-content-between list-group-item'}>French Pedicure<span className={'d-flex'}>$33<h6 className={'text-danger'}>$33.99</h6></span></h4>

                        <h4 className={'d-flex justify-content-between list-group-item'}>Spa Pedicure<span className={'d-flex'}>$50<h6 className={'text-danger'}>$51.50</h6></span></h4>
                        <p className={'fs-5 my-0 text-decoration-underline'}>45 minutes</p>
                        <p className={'fs-5 my-0'}>Experience the Natural Benefits of a Sea Rock Soak, Alpha Hydroxy Sea Scrub, Hydrating Marine Mask, and a Hot Oil Massage to finish.</p>
                        <p className={'fs-5 my-0 pt-3'}>Finally, if you can, choose your nail color!</p>
                        
                    </ul>            
                    
                </div>   
                <div className={'row row-cols-2 row-cols-lg-3'}>
                    

                    <div className={'col p-3'}>



                    </div>
                    <div className={'col'}>
                        
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Services;