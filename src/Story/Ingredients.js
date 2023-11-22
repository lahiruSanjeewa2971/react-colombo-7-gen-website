import React from 'react'
import './Ingredients.css';

export default function Ingredients() {
  return (
    <div className='story-container'>
        <div className='first-block'>
            <div className='left-story-container'>
                <img  className='first-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_01.jpg" alt="first-block-img" />
            </div>
            <div className='right-story-container'>
                <div className='right-story-container-content'>
                    <h2 className='right-story-container-content-title'>A Gin Like No Other</h2><br></br>
                    <p className='right-story-container-content-p'>Distilled to a unique recipe using seven spices and botanicals, Colombo No.7 is a distinctly Sri Lankan take on a London dry gin. </p>
                </div>
                <p className='right-story-container-content-bottom'>
                    Four native botanicals – cinnamon bark, curry leaves, ginger root and coriander seeds – combine with base notes of juniper berries, 
                    liquorice and angelica, to create a beautifully balanced, subtly spiced gin. 
                </p>
            </div>
        </div>
        <div className='second-block'>
            <div className='left-story-container'>
                <div className='sb-left-story-container-content'>
                        <h2 className='sb-left-story-container-content-title'>The Spice Garden</h2><br></br>
                        <p className='sb-left-story-container-content-p'>They say that necessity is the mother of invention. During the Second World War when spice trade routes were closed, our intrepid founder sourced these four native ingredients from Colombo’s Cinnamon Gardens – determined to prove that a fine London dry gin could be made in Sri Lanka.  </p>
                </div>
            </div>
            <div className='right-story-container'>
                <img className='second-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_02.jpg" alt="second-block-img" />    
            </div>
        </div>
        <div className='third-block'>
            <div className='left-story-container'>
                <img  className='third-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_03.jpg" alt="third-block-img" />
            </div>
            <div className='right-story-container'>
                <div className='tb-right-story-container-content'>
                    <h2 className='tb-right-story-container-content-title'>License to Distill</h2><br></br>
                    <p className='tb-right-story-container-content-p'>At the time, British Excise officers were stunned that such a good gin could be produced outside of the UK – so much so that they passed a law allowing non-native spirits to be made in South Asia and exported around the world.  </p>
                </div>
                <p className='tb-right-story-container-content-bottom'>
                Colombo No.7 was born: the first Asian-made, handcrafted gin of its kind. 
                </p>
            </div>
        </div>
        <div className='fourth-block'>
            <div className='left-story-container'>
                <div className='fb-left-story-container-content'>
                        <h2 className='fb-left-story-container-content-title'>The Recipe</h2><br></br>
                        <p className='fb-left-story-container-content-p'>Today, Colombo No.7 is made to our original 70-year-old recipe, distilled in small batches in traditional copper pot stills.   </p>
                </div>
                <p className='fb-left-story-container-content-bottom'>
                It’s best enjoyed now as it was then: with plenty of ice and crisp, good-quality tonic. Garnish with curry leaves.
                </p>
            </div>
            <div className='right-story-container'>
                <img className='fourth-block-img' src="https://www.colombosevengin.com/wp-content/uploads/2017/01/story_04.jpg" alt="second-block-img" />    
            </div>
        </div>
    </div>
    
  )
}
