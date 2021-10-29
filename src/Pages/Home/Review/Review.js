import React from 'react';
import Reviewer1 from '../../../images/Reviewer/r-1.jpg'
import Reviewer2 from '../../../images/Reviewer/r-2.jpg'
import Reviewer3 from '../../../images/Reviewer/r-3.jpg'
import './Review.css'
const Review = () => {
    return (
        <div>
            <h2 className=" my-5 Review-header p-3 m-3 mx-auto">Top Reviewers</h2>

            <div class="card-deck">
  <div class="card">
    <img class={Reviewer1} src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Very good tour and travel agency
</h5>
      <p class="card-text">I found the service and response of this travel agency to be excellent. Easily 5-stars. My emails were promptly responded to, and everyone showed up when they were supposed to. The $110 charged for my sedan ride to Bangkok for my family seemed like very good value.</p>
      <p class="card-text"><small class="text-muted">  20March,2021 </small></p>
    </div>
  </div>
  <div class="card">
    <img class={Reviewer2} src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Perfect 4-day tour with Derleng!
</h5>
      <p class="card-text">We were picked up at the airport on time by our driver and guide, Chamnan, for the next three days. We were brought to our hotel. We could choose to just relax or start the tour immediately. I decided to visit Ankgor Wat first. Our guide had great knowledge and his English was good. An Australian guy I met at Angkor Wat even asked to join me cause he didn’t understand his guide and Chamnan he understood very well! ;) So the next two days the Australian guy accompagnied us.
</p>
      <p class="card-text"><small class="text-muted">10 January,2021</small></p>
    </div>
  </div>
  <div class="card">
    <img class={Reviewer3} src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Everything was perfect and perfectly-arranged</h5>
      <p class="card-text">We just returned from our trip to Angkor temples. Without Derleng tour, our wonderful tour guide, and driver. This trip would be incomplete. Our tour guide who named John was really patient and understand that people from different cultures and background would extra time to absorb all information about history of Angkor. We did many things from the unbelievably structured Angkor ruins, thousand linga waterfalls on top of mountains, tonle sap lake, night market, old market and so many more. </p>
      <p class="card-text"><small class="text-muted">25 June,2021</small></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;