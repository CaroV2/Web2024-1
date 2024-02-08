import './Body.css'

import recommf from '../../assets/r-food.png';
import recommp from '../../assets/r-place.png';
import food from '../../assets/food.png';
import more from '../../assets/more.png';

export function Body() {
    return(
        <body>
            <div className='banner'>
                <img src="https://media.architecturaldigest.com/photos/5c9e699c1aeb991ed9e6da2b/16:9/w_2560%2Cc_limit/GettyImages-183996236.jpg" alt="Helsinki cathedral"/>
                <h1>DISCOVER HELSINKI</h1>
            </div>
            
            <div className='call-to-action'>
                <img src={recommp} alt="2 days on Helsinki"/>
                <img src={recommf} alt="A guide to traditional food"/>
            </div>

            <div className='place-text'>
                <p>A two-day, one-night itinerary authored by our acclaimed backpacker, Anthony Miles, featuring remarkable Helsinki destinations, along with a price list and map for convenient navigation.</p>
            </div>

            <div className='food-text'>
                <p>Explore delectable traditional Helsinki dishes with their recipes, prices, and top restaurants. Additionally, it offers a two-day culinary tour encompassing breakfast, lunch, dinner, and snacks.</p>
                </div>

            <div className='p-button'>
                <button class="btn-place"> Discover more </button>
            </div>

            <div className='f-button'>
                <button class="btn-food"> Look delicious dishes </button>
            </div>

            <div className='food-recomm'>
                <img src={food} alt='Finnish dish'/>
                <div className='rectangle'></div>
            </div>

            <div className='text-recomm'>
                <h3>Curiosities about food</h3>
                <p>Discover interesting facts about traditional Helsinki cuisine.</p>
            </div>

            <div className='r-button'>
                <button class="btn-recomm"> Discover more </button>
            </div>

            <div className='more-container'>
                <div className='more-items'>
                    <div className='text-more'>
                        <h3>Do you want know more?</h3>
                        <p>Discover the architectural wonders of Helsinki, the history of each location, and a guide on how to get there from your current location.</p>
                    </div>

                    <div className='more-button'>
                        <button class="btn-more"> Discover more </button>
                    </div>
                </div>
                <div className='more-img'>
                    <img src={more} alt='Amóx Rex'/>
                </div>
            </div>
        </body>
    )
}