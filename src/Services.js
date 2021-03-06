import React from 'react';

const Services = (props) => {

    return(
        <div className={"container-fluid text-light"}>
            
            <div className={"jumbotron pb-5 text-light"}>
                <h1 className={"display-2 border-top border-bottom"}>Services</h1>
            </div>

            <div className={'container'}>
                <div className={'row row-cols-3'}>
                    <ul className={'col-12 col-lg-4 list-group mb-5'}><h2 className={'border-bottom'}>Hair Design</h2>
                        <h3 className={'text-decoration-underline list-group'}>H A I R S T Y L E</h3>
                        <p className={'my-0'}>(Includes Blowdry)</p>
                        <p className={'mt-0'}>(Prices Vary on Detailed Designs, Longer Length of Hair, and Designer's Time)</p>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Haircuts<span className={''}>$35-$75</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Blowdry<span className={''}>$25-$55</span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Children's Haircuts Under 12<span className={'my-auto align-text-start'}>$20-$25</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Up-Do / Curling<span className={''}>$85-$150</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Keratin Treatment<span className={''}>$103/HR</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Body Wave / Perm <span className={''}>$75-$150</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Special Effects & Relaxers<span className={'my-auto'}>$65-$150</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Scalp Treatments<span className={''}>$30</span></h4>
                        <h3 className={'text-decoration-underline mt-3 list-group pb-3'}>C O L O R</h3>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Permanent Single Process W/ Glaze<div className={'my-auto'}>$61-$75</div></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Semi Permanent<span className={'justify-content-between'}>$55-$65</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Glaze (Alone)<span className={'justify-content-between'}>$30-$40</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Highlites (Full Head)<span className={'justify-content-between my-auto'}>$85-$175</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Highlites (Partial)<span className={'justify-content-between'}>$65-$100</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Hairline Touch-Up<span className={'justify-content-between'}>$36</span></h4>
                    </ul>
                    <ul className={'col-12 col-lg-4 list-group'}><h2 className={'border-bottom'}>Hair Removal</h2>
                    <h4 className={'d-flex justify-content-between list-group-item'}>Threading<span className={''}>$12-$30</span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>F A C E</h3>                        
                        <h4 className={'d-flex justify-content-between list-group-item'}>Lip Wax<span className={''}>$7</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Chin Wax<span className={''}>$7</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Eyebrow Wax<span className={''}>$8</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Sides of Face Wax<span className={''}>$10</span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>B O D Y</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Brazilian<span className={''}>$35</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Half-Leg<span className={''}>$20</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Leg<span className={''}>$40</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Bikini<span className={''}>$15</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Underarm<span className={''}>$15</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Tummy Line<span className={''}>$5-$7</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Half-Arm<span className={''}>$15</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Arm<span className={''}>$30</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full-Leg W/ Bikini<span className={''}>$40-$45</span></h4>

                        <h3 className={'text-decoration-underline text-danger'}>TUESDAY & WEDNESDAY SPECIALS</h3>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Full-Leg<span className={''}>$30</span></h4>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Full-Leg W/ Bikini<span className={''}>$35</span></h4>
                        <h4 className={'d-flex justify-content-between text-danger list-group-item'}>Manicure & Pedicure<span className={''}>$28</span></h4>
                    </ul>
                    <ul className={'col-12 col-lg-4 list-group'}><h2 className={'border-bottom'}>Manicure & Pedicure</h2>
                        <h3 className={'text-decoration-underline list-group pb-3'}>F I N G E R N A I L S</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Manicure / French<span className={''}>$13/$16</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Shellac Gel Manicure<span className={''}>$30</span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>SNS Powder Manicure / French<span className={'my-auto'}>$38/$48</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Powder Fill-In<span className={''}>$28</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Silk Wrap<span className={''}>$48</span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Change of Polish<span className={'d-flex justify-content-end w-100'}>Fingers $7 <br></br>Toes $15</span></h4>
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Change of French Polish<span className={'d-flex justify-content-end w-100 my-auto'}>Fingers $9 <br></br>Toes $15-$20</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Full Set with Tips<span className={''}>$45</span></h4>                        
                        <h4 className={'d-flex justify-content-between text-start list-group-item'}>Glue Down<span className={'d-flex justify-content-end w-100'}>$5 <br/>Single Wrap $3</span></h4>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Single Tip with Wrap<span className={''}>$5</span></h4>
                        <h3 className={'text-decoration-underline list-group pb-3'}>S P A <br/>S E R V I C E S</h3>
                        <h4 className={'d-flex justify-content-between list-group-item'}>Classic Pedicure<span className={''}>$23</span></h4>
                        <p className={'fs-5 my-0 text-decoration-underline'}>30 minutes</p>
                        <p className={'fs-5'}>This treatment includes an Aqua Therapy Soak, lower leg massage, exfoliation, classic nail care & polish</p>
                        <h4 className={'d-flex justify-content-between list-group-item'}>French Pedicure<span className={''}>$28</span></h4>

                        <h4 className={'d-flex justify-content-between list-group-item'}>Spa Pedicure<span className={''}>$48</span></h4>
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