import React, { useState } from 'react';
import top from "../assets/top.png";
import btm from "../assets/btm.png";
import robo from "../assets/robo.webp";
import gnn from "../assets/gnn.png";
import llm from "../assets/llm.png";
import lgbm from "../assets/lgbm.png";
import hand from "../assets/hand.webp"
import lbl from "../assets/lbl.png"
import logo from "../assets/logo.png"

import Card from './Card';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <>
            <div className="landing-gradient min-h-screen w-full relative z-20 overflow-hidden ">
                <img src={top} alt="" className="absolute -top-32 -left-24 w-[400px] h-[400px] p-0 m-0 -z-10" />
                <img src={btm} alt="" className="absolute -bottom-14 -right-[45px] w-[500px] h-[500px] p-0 m-0 -z-10" />

                <div className="flex justify-between items-center px-8 py-4">
                    <img src={logo} alt="Logo" className="w-8 h-8" />

                    <Link to="/dashboard" className='text-white cursor-pointer font-bold z-30'>
                        <button>
                            Dashboard
                        </button>
                    </Link>
                </div>


                <div className='w-[100%] h-[90vh] flex items-center px-20'>
                    <img src={robo} alt="" className="absolute   right-32 w-[500px] h-[500px] p-0 m-0 -z-10" />

                    <div className='max-w-[63ch] px-4 py-4 text-white '>
                        <h1 className='font-bold text-4xl whitespace-pre-line mb-4'>Experience the Future
                            of Fraud Detection
                        </h1>
                        <p className='text-sm whitespace-pre-line '>
                            In an era where financial fraud is increasingly sophisticated, your
                            loan application process deserves an equally advanced defense
                            system. Welcome to FraudGuard, the pinnacle of innovative
                            technology, combining cutting-edge Graph Neural Networks
                            (GNN), Large Language Models (LLM), XGBoost, and LightGBM
                            to safeguard your financial operations.
                        </p>
                    </div>
                </div>
            </div>

            <div className='min-h-[75vh] w-full bg-[#061539] text-white flex flex-col items-center'>
                <h1 className='text-2xl font-semibold mt-6'>Why Choose FraudGuard?</h1>

                <div className='w-[80%] mt-10'>
                    <h1 className=' font-semibold mb-10'>1. State-of-the-Art Technology:</h1>
                    <div className='w-[100%] mt-10 flex flex-wrap justify-around '>

                        <Card
                            image={gnn}
                            title="Graph Neural Networks (GNN)"
                            description="Harness the power of relationships and connections within your data to detect fraudulent patterns."
                        />
                        <Card
                            image={llm}
                            title="Large Language Models (LLM)"
                            description="Leverage the latest in natural language processing to understand and analyze textual data."
                        />
                        <Card
                            image={lgbm}
                            title="XGBoost"
                            description="Utilize powerful gradient boosting algorithms to improve predictive accuracy."
                        />
                    </div>
                </div>


                <div className='w-[95%] min-h-[200px] rounded-s-full bg-gradient-to-r pl-16 ml-12  from-[#294994] to-[#061539] mt-28 flex flex-col justify-center'>
                    <div className='max-w-prose'>
                        <h1 className='text-2xl font-semibold mb-4'>2. Continuous Learning and Improvement:</h1>
                        <p className=' whitespace-pre-line text-sm pl-6'>
                            Our system continuously evolves with each interaction
                            and new data input, ensuring that our models stay ahead
                            of emerging fraud tactics
                        </p>
                    </div>
                </div>


                <div className='w-[95%] min-h-[200px] rounded-e-full bg-gradient-to-r pl-16 mr-12  to-[#294994] from-[#061539] mt-10 flex flex-col justify-center'>
                    <div className='max-w-prose ml-auto'>
                        <h1 className='text-2xl font-semibold mb-4 -ml-8'>3. Comprehensive Explainability:</h1>
                        <p className=' whitespace-pre-line text-sm pr-10'>
                            Conversational Chatbot: Engage directly with our AI to understand the reasoning behind fraud detection decisions. Get clear, concise explanations on why an application is flagged, enhancing trust and transparency
                        </p>
                    </div>
                </div>

                <div className='w-[95%] min-h-[200px] rounded-s-full bg-gradient-to-r pl-16 ml-12  from-[#294994] to-[#061539] mt-10 flex flex-col justify-center'>
                    <div className='max-w-prose'>
                        <h1 className='text-2xl font-semibold mb-4'>4. Robust and Responsible AI Practices:</h1>
                        <p className=' whitespace-pre-line text-sm pl-6'>
                            Guardrails for Safety: Implement stringent guardrails to
                            ensure ethical and responsible AI usage. Data Privacy:
                            Maintain the highest standards of data privacy and security,
                            safeguarding sensitive information.
                        </p>
                    </div>
                </div>


                <div className='min-h-[400px] w-[100%] flex items-center relative mb-20 mt-14'>
                    <img src={hand} alt="" className="absolute right-44 top-10 w-[400px] h-[400px] z-10" />
                    <div className='max-w-prose ml-24 z-20'>
                        <h1 className='text-3xl font-semibold mb-4'>Our Unique Approach</h1>
                        <p className=' whitespace-pre-line'>
                            FraudGuard was trained on the "COVID PPP
                            Loan Data with Fraud Examples" dataset,
                            comprising approximately 9,500,000 rows
                            with precise identification of fraudulent
                            activities. Despite the challenging
                            imbalance of only 100 known fraud
                            cases, our system excels in
                            identifying anomalies through
                            sophisticated algorithms and
                            continual learning.
                        </p>
                    </div>
                </div>

                <div className='bg-[#081A46] min-h-[400px] w-[100%] rounded-tr-[300px]'>
                    <h1 className=' font-medium text-5xl ml-14 mt-12'>Key <br />
                        Features</h1>

                    <div className='w-[60%] min-h-[270px] rounded-t-[90px] rounded-b-[90px] mx-auto justify-around relative bg-[#102355] flex items-center'>
                        <div className='max-w-prose w-[25%]'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Real-Time Detection:</h1>
                            <p className=' whitespace-pre-line text-sm'>Instantly identify and respond
                                to fraudulent applications,
                                minimizing risk and
                                potential loss.</p>
                        </div>

                        <div className='bg-[#D0DDFF] w-[25%] min-h-[200px] -mb-28 rounded-t-[70px] rounded-b-[70px]  flex flex-col items-center text-[#102355] px-6 py-6'>
                            <div className='max-w-prose'>
                                <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>User-Friendly Interface:</h1>
                                <p className=' whitespace-pre-line text-sm'>Intuitive design makes it easy
                                    for users to navigate and
                                    understand the system's
                                    functionalities</p>
                            </div>
                        </div>


                        <div className='max-w-prose w-[25%]'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Actionable Insights:</h1>
                            <p className=' whitespace-pre-line text-sm'>Receive detailed reports and
                                analytics to aid in decision-
                                making and strategy
                                formulation.</p>
                        </div>

                    </div>

                    <h1 className='font-bold text-4xl mt-44 whitespace-pre-line ml-24 mb-10'>Get Started with FraudGuard Today!</h1>
                    <div className='max-w-[80ch] ml-24 mb-24'>
                        <p className=' whitespace-pre-line'>Join the forefront of fraud detection technology. Enhance your loan application process
                            with the reliability and intelligence of FraudGuard. Protect your financial ecosystem with a
                            solution designed to stay ahead of fraudsters.</p>
                    </div>

                    <img src={lbl} alt="" className='w-[95%] object-contain mb-12 mx-auto' />

                    <div className='flex items-center gap-3 px-3 py-3 ml-10 mb-16'>
                        <img src={logo} alt="" className='w-8 h-8 object-contain' />
                        <p>Fraud Guard</p>
                    </div>

                    <div className='w-[97%] mb-10 flex justify-between'>
                        <div>
                            <p className='text-sm font-bold ml-12'>© 2024 FraudGuard. All rights reserved</p>
                            <p className='text-sm font-thin ml-12'>Privacy Policy | Terms of Use</p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-10 h-10 rounded-full bg-[#2D4173] p-2 flex items-center justify-center cursor-pointer'>
                                <svg width="19" height="19" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0449 34.9997C26.5196 34.9997 24.377 34.4481 21.1685 32.6559C17.267 30.4684 14.2491 28.4488 10.3687 24.5793C6.62728 20.8409 4.80659 18.4206 2.25841 13.7846C-0.620299 8.55016 -0.129573 5.80638 0.418976 4.63371C1.07223 3.23213 2.03649 2.39384 3.28284 1.56179C3.99076 1.09807 4.73991 0.700547 5.5208 0.37428C5.59894 0.340685 5.67161 0.308654 5.73647 0.279747C6.12327 0.105526 6.70932 -0.157758 7.45166 0.123495C7.94708 0.309435 8.38936 0.689909 9.08169 1.37351C10.5015 2.77353 12.4417 5.89153 13.1575 7.4228C13.6381 8.45485 13.9561 9.1361 13.9569 9.90018C13.9569 10.7947 13.5068 11.4846 12.9606 12.2291C12.8582 12.369 12.7567 12.5026 12.6582 12.6322C12.0635 13.4135 11.933 13.6393 12.019 14.0424C12.1933 14.8526 13.4927 17.2643 15.6283 19.3948C17.7639 21.5253 20.1066 22.7425 20.92 22.916C21.3404 23.0058 21.571 22.8699 22.3774 22.2542C22.493 22.1659 22.6118 22.0745 22.736 21.9831C23.569 21.3636 24.227 20.9253 25.1006 20.9253H25.1053C25.8656 20.9253 26.5165 21.255 27.5948 21.7988C29.0014 22.5081 32.2138 24.423 33.6226 25.8441C34.3079 26.5347 34.69 26.9754 34.8768 27.4699C35.1581 28.2145 34.8932 28.7981 34.7205 29.1887C34.6916 29.2535 34.6596 29.3246 34.626 29.4035C34.2971 30.1829 33.8971 30.9303 33.4312 31.6364C32.6006 32.8786 31.759 33.8403 30.354 34.4942C29.6325 34.8354 28.843 35.0082 28.0449 34.9997Z" fill="white" />
                                </svg>
                            </div>
                            <div className='w-10 h-10 rounded-full bg-[#2D4173] p-2 flex items-center justify-center cursor-pointer'>
                                <svg width="19" height="19" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.75 0H4.25C3.1232 0.00121824 2.0429 0.454165 1.24613 1.25946C0.449359 2.06475 0.00120535 3.1566 0 4.29545V22.7045C0.00120535 23.8434 0.449359 24.9353 1.24613 25.7405C2.0429 26.5458 3.1232 26.9988 4.25 27H29.75C30.8768 26.9988 31.9571 26.5458 32.7539 25.7405C33.5506 24.9353 33.9988 23.8434 34 22.7045V4.29545C33.9988 3.1566 33.5506 2.06475 32.7539 1.25946C31.9571 0.454165 30.8768 0.00121824 29.75 0ZM28.6738 7.10514L17.7453 15.6961C17.5322 15.8635 17.2699 15.9544 17 15.9544C16.7301 15.9544 16.4678 15.8635 16.2547 15.6961L5.32616 7.10514C5.19776 7.00714 5.08991 6.88432 5.00888 6.74383C4.92785 6.60334 4.87525 6.44797 4.85414 6.28675C4.83304 6.12554 4.84384 5.96169 4.88593 5.80473C4.92802 5.64777 5.00055 5.50083 5.09932 5.37245C5.19808 5.24407 5.3211 5.1368 5.46123 5.05689C5.60137 4.97698 5.75582 4.92601 5.91561 4.90695C6.0754 4.88789 6.23735 4.90111 6.39204 4.94586C6.54673 4.9906 6.69108 5.06597 6.8167 5.16758L17 13.1725L27.1833 5.16758C27.4379 4.97323 27.758 4.88799 28.0744 4.9303C28.3907 4.9726 28.6778 5.13905 28.8737 5.39365C29.0696 5.64825 29.1584 5.97054 29.121 6.29082C29.0836 6.6111 28.923 6.90362 28.6738 7.10514Z" fill="white" />
                                </svg>

                            </div>
                            <div className='w-10 h-10 rounded-full bg-[#2D4173] p-2 flex items-center justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>


                            </div>
                        </div>
                    </div>

                </div>



            </div>

        </>
    );
};

export default LandingPage;
