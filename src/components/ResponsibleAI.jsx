import React from 'react'
import aivec from "../assets/aivec.png"
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"
import a4 from "../assets/a4.png"
import ai_img from "../assets/ai_img.webp"



const ResponsibleAI = () => {
    return (
        <>
            <div className='w-[100%] min-h-[65vh] mt-10 relative'>
                <img src={ai_img} alt=""  className=' absolute -top-[116px] left-7 h-[100%] object-contain'/>
                <div className='w-[60%] ml-auto pr-14 relative'>
                    <h1 className='text-white font-bold text-6xl mr-auto mb-4'>Building </h1>
                    <h2 className='text-[#427BFF] font-bold text-6xl'>AI Responsibly</h2>
                    <div className='max-w-prose mt-6'>
                        <p className='whitespace-pre-line text-sm text-white'>
                            The rapid expansion of generative AI offers incredible innovation
                            opportunities, yet it also presents new challenges. We are dedicated
                            to developing AI responsibly by focusing on a people-centric approach
                            that emphasizes education, science, and customer needs. This commitment
                            ensures responsible AI integration throughout the entire AI lifecycle.
                        </p>
                    </div>
                    <img src={aivec} alt="" className="absolute -bottom-20 right-0 w-[70px] h-[70px] p-0 m-0 z-10" />
                </div>
            </div>

            <div className='w-[100%]'>
                <h1 className='text-white font-bold text-3xl ml-4'>Core Dimensions of Responsible AI:</h1>

                <div className='w-[99.3%] min-h-[200px]  rounded-s-full bg-[#04132A]  ml-6  mt-16 '>
                    <div className='w-[99%] min-h-[200px]  rounded-s-full bg-[#1B4B90] pl-16 ml-auto  mt-16 flex items-center justify-around'>
                        <div className=' text-white max-w-[26ch] w-[25%] text-center'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Fairness:</h1>
                            <p className=' whitespace-pre-line text-sm'>Assessing the impact on
                                diverse stakeholder groups</p>
                        </div>
                        <div className=' text-white max-w-[26ch] w-[25%] text-center'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Explainability:</h1>
                            <p className=' whitespace-pre-line text-sm'>Understanding and evaluating
                                system outputs</p>
                        </div>
                        <div className=' text-white max-w-[26ch] w-[25%] text-center'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Privacy and Security:</h1>
                            <p className=' whitespace-pre-line text-sm'>Assessing the impact on
                                diverse stakeholder groups</p>
                        </div>
                        <div className=' text-white max-w-[26ch] w-[25%] text-center'>
                            <h1 className=' whitespace-pre-line text-lg font-bold mb-4'>Safety:</h1>
                            <p className=' whitespace-pre-line text-sm'>Preventing harmful system
                                outputs and misuse</p>
                        </div>
                    </div>
                </div>


                <div className='w-[100%] flex mt-28 justify-around'>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-[#16396D] p-[22px] rounded-full mb-9 shadow-inner">
                            <img src={a1} alt="Icon" className="w-8 h-8" />
                        </div>
                        <div className='max-w-[26ch]'>
                            <h2 className="text-white whitespace-pre-line text-center text-xl font-semibold mb-2">Controllability:</h2>
                            <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Implementing mechanisms to
                                monitor and guide AI system
                                behavior</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-[#16396D] p-[22px] rounded-full mb-9 shadow-inner">
                            <img src={a2} alt="Icon" className="w-8 h-8" />
                        </div>

                        <div className='max-w-[70ch]'>
                            <h2 className="text-white whitespace-pre-line text-center text-xl font-semibold mb-2">Veracity and Robustness:</h2>
                        </div>
                        <div className='max-w-[26ch]'>
                            <p className="text-white whitespace-pre-line text-sm mt-4 text-center">Ensuring accurate system
                                outputs, even in the face of
                                unexpected or adversarial
                                inputs</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-[#16396D] p-[22px] rounded-full mb-9 shadow-inner">
                            <img src={a3} alt="Icon" className="w-8 h-8" />
                        </div>
                        <div className='max-w-[26ch]'>
                            <h2 className="text-white whitespace-pre-line text-center text-xl font-semibold mb-2">Governance:</h2>
                            <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Empowering stakeholders to make
                                informed decisions about their
                                interactions with AI systems</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-[#16396D] p-[22px] rounded-full mb-9 shadow-inner">
                            <img src={a4} alt="Icon" className="w-8 h-8" />
                        </div>
                        <div className='max-w-[26ch]'>
                            <h2 className="text-white whitespace-pre-line text-center text-xl font-semibold mb-2">Transparency:</h2>
                            <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Applying best practices
                                throughout the AI supply chain,
                                including providers and
                                deployers</p>
                        </div>
                    </div>

                </div>


                <h1 className='text-white font-bold text-3xl ml-4 mt-44'>Guardrails for Responsible AI:</h1>

                <div className='w-[99.3%] -ml-4 min-h-[200px] rounded-e-full bg-[#04132A]  mr-12  mt-10'>
                    <div className='w-[99%]  min-h-[200px] rounded-e-full bg-[#1B4B90]  mr-auto flex pt-10 justify-center'>
                        <div className=' text-white w-[25%] text-center'>
                            <h1 className=' whitespace-pre-line font-bold mb-4'>Custom-Tailored Guardrails:</h1>
                            <div className='max-w-[26ch] text-center mx-auto'>
                                <p className=' whitespace-pre-line text-sm '>Implementing foundation models
                                    (FMs) to enforce responsible AI
                                    policies with tailored safeguards.</p>
                            </div>
                        </div>
                        <div className=' text-white w-[33%] text-center'>
                            <h1 className=' whitespace-pre-line font-bold mb-4'>Consistent AI Safety Levels:</h1>
                            <div className='max-w-[40ch] text-center mx-auto'>
                                <p className=' whitespace-pre-line text-sm '>Evaluating user inputs and FM responses
                                    based on specific use case policies. Providing
                                    an additional layer of protection across all large
                                    language models (LLMs) on Amazon Bedrock,
                                    including fine-tuned models.</p>
                            </div>
                        </div>
                        <div className=' text-white w-[33%] text-center'>
                            <h1 className=' whitespace-pre-line font-bold mb-4'>Blocking Undesirable Topics:</h1>
                            <div className='max-w-[40ch] text-center mx-auto'>
                                <p className=' whitespace-pre-line text-sm '>Ensuring a relevant and safe user experience
                                    by customizing interactions to stay on topic.
                                    Detecting and blocking user inputs and FM
                                    responses related to restricted topics, such
                                    as a banking assistant avoiding investment
                                    advice.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] mt-44 flex justify-around'>
                    <div className="bg-gradient-to-br from-[#03102E] to-[#092157] p-6 rounded-lg shadow-lg max-w-xs mx-auto relative border-2 mb-4"
                        style={{
                            borderImageSource: 'linear-gradient(152.64deg, #FFFFFF 0%, #0A1D49 101.75%)',
                            borderImageSlice: 1,
                            borderRadius: '0.75rem',  // Adjusted to rounded-lg (0.75rem)
                            boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                        }}>
                        <div className="absolute inset-0 rounded-lg"
                            style={{
                                borderRadius: '0.75rem',  // Ensuring inner shadow has border radius
                                boxShadow: 'inset 15px 30px 63px 0 rgba(12, 35, 87, 1)'
                            }}>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <h2 className="text-white text-center text-xl font-semibold mb-2">Content Filters:</h2>
                            <div className='max-w-[45ch]'>
                                <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Filtering harmful content according to
                                    responsible AI policies. Configurable
                                    thresholds help filter out harmful interactions
                                    across categories like hate speech, insults,
                                    sexual content, violence, misconduct, and
                                    prompt attacks. These filters enhance
                                    existing FM protections by automatically
                                    evaluating both user queries and FM
                                    responses to detect and
                                    prevent restricted content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#03102E] to-[#092157] p-6 rounded-lg shadow-lg max-w-xs mx-auto relative border-2 mb-4"
                        style={{
                            borderImageSource: 'linear-gradient(152.64deg, #FFFFFF 0%, #0A1D49 101.75%)',
                            borderImageSlice: 1,
                            borderRadius: '0.75rem',  // Adjusted to rounded-lg (0.75rem)
                            boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                        }}>
                        <div className="absolute inset-0 rounded-lg"
                            style={{
                                borderRadius: '0.75rem',  // Ensuring inner shadow has border radius
                                boxShadow: 'inset 15px 30px 63px 0 rgba(12, 35, 87, 1)'
                            }}>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <h2 className="text-white text-center text-xl font-semibold mb-2">Denied Topics:</h2>
                            <div className='max-w-[45ch]'>
                                <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Redacting sensitive information (PII) to
                                    protect privacy. Detecting sensitive content
                                    in user inputs and FM responses, with the
                                    option to reject or redact this information
                                    based on predefined or custom criteria.
                                    For instance, redacting personal information
                                    while generating summaries from customer
                                    and agent conversation transcripts in a
                                    call center.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#03102E] to-[#092157] p-6 rounded-lg shadow-lg max-w-xs mx-auto relative border-2 mb-4"
                        style={{
                            borderImageSource: 'linear-gradient(152.64deg, #FFFFFF 0%, #0A1D49 101.75%)',
                            borderImageSlice: 1,
                            borderRadius: '0.75rem',  // Adjusted to rounded-lg (0.75rem)
                            boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                        }}>
                        <div className="absolute inset-0 rounded-lg"
                            style={{
                                borderRadius: '0.75rem',  // Ensuring inner shadow has border radius
                                boxShadow: 'inset 15px 30px 63px 0 rgba(12, 35, 87, 1)'
                            }}>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <h2 className="text-white text-center text-xl font-semibold mb-2">Pseudonymisation and Custom
                                Word Filters:</h2>
                            <div className='max-w-[45ch]'>
                                <p className="text-white whitespace-pre-line text-sm mt-6 text-center">Blocking inappropriate content with
                                    customizable word filters. Configuring
                                    specific words or phrases to detect
                                    and block in user interactions with
                                    generative AI applications, including profanity
                                    and offensive terms, such as competitor
                                    names or other sensitive words.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default ResponsibleAI;