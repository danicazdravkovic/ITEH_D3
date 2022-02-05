    import React from 'react';
    import { useSelector } from 'react-redux';
    import bgimage from '../images/bg-xo.png'

    //OVA KOMPONENTA NEMA PARAMETAR JER KOMPONENTA APP.JS JOJ NISTA NE PROSLEDJUJE
    function ResultPage()
    {
        const numberOfWinsX = useSelector((state) => state.numberOfWinsX);
        const numberOfWinsY = useSelector((state) => state.numberOfWinsY);

        return (
        <>
            <section>
                <div className='container content'>
                    <div className='row'>
                
                        <div className='col-md-6 col-offset-md-6' >
                            
                            <div className='col-md-12' style={{textAlign:'center'}}>
                                <h2>Rules</h2>
                            </div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

                            
                            <img src={bgimage} alt ="XO game"/>                        
                        </div>
                        <div className='col-md-4 col-md-offset-2' style={{textAlign:'center'}}>

                        <h2>Result</h2>
                            <div className='row' >
                                <div className='col-md-6 x-result-header'>
                                X
                                </div>
                                
                                <div className='col-md-6 y-result-header'>
                                O
                                </div>
                                <div className='col-md-6 x-result'>
                                    <span>{numberOfWinsX}</span>
                                </div>
                                
                                <div className='col-md-6 y-result'>
                                    <span>{numberOfWinsY}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section> 
        </>    
        );
    }

    export default ResultPage;