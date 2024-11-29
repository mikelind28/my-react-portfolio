import mountain from '../assets/images/mountain.jpg';
import forest from '../assets/images/forest.jpg';
import prairie from '../assets/images/prairie.jpg';
import rainforest from '../assets/images/rainforest.jpg';
import river from '../assets/images/river.png';

export default function Portfolio() {
    return (
      <div className='mainCard'>
        <h1>my portfolio</h1>
        <div id="my-work">

          <div id="app-1">
            <img src={mountain} alt="mountain"></img>
          </div>

          <div id="app-2">
            <img src={forest} alt="forest"></img>
          </div>

          <div id="app-3">
            <img src={prairie} alt="prairie"></img>
          </div>

          <div id="app-4">
            <img src={rainforest} alt="rainforest"></img>
          </div>

          <div id="app-5">
            <img src={river} alt="river"></img>
          </div>

          <div id="app-6">
            <img src={forest} alt="forest"></img>
          </div>

        </div>
      </div>
    );
}
  