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
            <div id="portfolio-links">
              <a href="https://weather-dashboard-yntg.onrender.com/" target="_blank">weather-dashboard app</a>
              <a class="sub-link" href="https://github.com/mikelind28/weather-dashboard" target="_blank">github repository</a>
            </div>
          </div>

          <div id="app-2">
            <img src={forest} alt="forest"></img>
            <div id="portfolio-links">
              <a href="https://github.com/mikelind28/employee-tracker" target="_blank">employee-tracker app</a>
              <a class="sub-link" href="https://drive.google.com/file/d/1DXPyMtcYDwTl7HKKeCx4kH0KibFfOCjW/view" target="_blank">video walkthrough</a>
            </div>
          </div>

          <div id="app-3">
            <img src={prairie} alt="prairie"></img>
            <div id="portfolio-links">
              <a href="https://github.com/mikelind28/CLI-Vehicle-Builder" target="_blank">vehicle-builder app</a>
              <a class="sub-link" href="https://drive.google.com/file/d/13WOD0GomK0IZek2z0PmVfFD3Ou4KQqwj/view" target="_blank">video walkthrough</a>
            </div>
          </div>

          <div id="app-4">
            <img src={rainforest} alt="rainforest"></img>
            <div id="portfolio-links">
              <a href="https://toli-a.github.io/project1/" target="_blank">task-tracker app</a>
              <a class="sub-link" href="https://github.com/toli-A/project1" target="_blank">github repository</a>
            </div>
          </div>

          <div id="app-5">
            <img src={river} alt="river"></img>
            <div id="portfolio-links">
              <a href="https://github.com/mikelind28/README-Made-Easy" target="_blank">readme-made-easy app</a>
              <a class="sub-link" href="https://drive.google.com/file/d/1H47A6TUaJYyMTn4uYytp4EBFaR6e6e1T/view" target="_blank">video walkthrough</a>
            </div>
          </div>

          <div id="app-6">
            <img src={forest} alt="forest"></img>
            <div id="portfolio-links">
              <a href="https://mikelind28.github.io/css-testing/" target="_blank">css-testing</a>
              <a class="sub-link" href="https://github.com/mikelind28/css-testing" target="_blank">github repository</a>
            </div>
          </div>

        </div>
      </div>
    );
}
  