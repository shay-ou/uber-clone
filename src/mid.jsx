import React from 'react';
import './index.css';

export default function Mid() {
    return (
        <div className='middle'>
            <div className='section'>
                <div className='img'>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1334,w_1334/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
                        alt="Earner Illustration"
                    />
                </div>
                <div className='content'>
                    <h1 className='midone'>Drive when you want, make what you need</h1>
                    <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                    <div className='buttons'>
                        <button className="get-started-button">Get Started</button>
                        <button className="sign-up">Already have an account? Sign up</button>
                    </div>
                </div>
            </div>

            <div className='section'>
                <div className='img'>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_934,w_934/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
                        alt="Uber for Business"
                    />
                </div>
                <div className='content'>
                    <h1 className='midone'>The Uber you know, reimagined for business</h1>
                    <p>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                    <div className='buttons'>
                        <button className="get-started-button">Get Started</button>
                        <button className="check-out">Check out our solutions</button>
                    </div>
                </div>
            </div>

            <div className='section'>
                <div className='img'>
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_934,w_934/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
                        alt="Fleet Management"
                    />
                </div>
                <div className='content'>
                    <h1 className='midone'>Make money by renting out your car</h1>
                    <p>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
                    <div className='buttons'>
                        <button className="get-started-button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
