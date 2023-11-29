import React from 'react'
import './Ingredients.css';

export default function Ingredients() {
    return (
        <div className='story-container'>
            <section>
            <div className='first-block'>
                <div className='left-story-container'>
                    <img className='first-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_01.jpg" alt="first-block-img" />
                </div>
                <div className='right-story-container'>
                    <div className="outer-div-first-story-content">
                        <div className='right-story-container-content'>
                            <h2 className='right-story-container-content-title'>A Gin Like No Other</h2>
                            <div className='right-story-container-content'><p>Distilled to a unique recipe using seven spices and </p>
                                <p>botanicals, Colombo No.7 is a distinctly Sri Lankan take</p>
                                <p> on a London dry gin.</p> </div>
                        </div><br></br>
                        <div className='right-story-container-content-bottom'>
                            <p>Four native botanicals – cinnamon bark, curry leaves, </p>
                            <p>ginger root and coriander seeds – combine with base </p>
                            <p>notes of juniper berries, liquorice and angelica, to </p>
                            <p>create a beautifully balanced, subtly spiced gin.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
            <div className='second-block'>
                <div className='left-story-container'>
                    <div className='sb-left-story-container-content'>
                        <h2 className='sb-left-story-container-content-title'>The Spice Garden</h2><br></br>
                        <div className='sb-left-story-container-content'>
                            <p>They say that necessity is the mother of invention. During </p>
                            <p>the Second World War when spice trade routes were </p>
                            <p>closed, our intrepid founder sourced these four native ingredients</p>
                            <p>from Colombo’s Cinnamon Gardens – </p>
                            <p>determined to prove that a fine London dry gin could be </p>
                            <p>made in Sri Lanka.</p>
                        </div>
                    </div>
                </div>
                <div className='right-story-container'>
                    <img className='second-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_02.jpg" alt="second-block-img" />
                </div>
            </div>
            </section>
            <section>
            <div className='third-block'>
                <div className='left-story-container'>
                    <img className='third-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_03.jpg" alt="third-block-img" />
                </div>
                <div className='right-story-container'>
                    <div className="outer-div-third-story-content">
                        <div className='tb-right-story-container-content'>
                            <h2 className='tb-right-story-container-content-title'>License to Distill</h2><br></br>
                            <div className='tb-right-story-container-paragraph-content'>
                                <p>At the time, British Excise officers were stunned that </p>
                                <p>such a good gin could be produced outside of the UK – so </p>
                                <p>much so that they passed a law allowing non-native </p>
                                <p>spirits to be made in South Asia and exported around the </p>
                                <p>world. </p>
                            </div>

                            <div className='tb-right-story-container-content-bottom'>
                                <p>Colombo No.7 was born: the first Asian-made,</p>
                                <p>handcrafted gin of its kind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
            <div className='fourth-block'>
                <div className='left-story-container'>
                    <div className="outerdiv-fourth-story">
                        <div className='fb-left-story-container-content'>
                            <h2 className='fb-left-story-container-content-title'>The Recipe</h2><br></br>
                            <div className='fb-left-story-container-paragraph-content'>
                                <p>Today, Colombo No.7 is made to our original 70-year-old</p>
                                <p>recipe, distilled in small batches in traditional copper </p>
                                <p>pot stills.</p>
                            </div>
                        </div>
                    </div>
                        <div className='fb-left-story-container-content-bottom'>
                            <p> It’s best enjoyed now as it was then: with plenty of ice </p>
                            <p> and crisp, good-quality tonic. Garnish with curry leaves. </p>
                        </div>
                </div>
                <div className='right-story-container'>
                    <img className='fourth-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_04.jpg" alt="second-block-img" />
                </div>
            </div>
            </section>
        </div>

    )
}
