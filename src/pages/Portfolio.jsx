import weather from '../assets/images/weather-dashboard.png';
import employee from '../assets/images/employee-tracker.png';
import vehicle from '../assets/images/vehicle-builder.png';
import task from '../assets/images/task-tracker.png';
import readme from '../assets/images/readme-made-easy.png';
import css from '../assets/images/css-testing.png';
import Project from '../components/Project';

export default function Portfolio() {
    return (
      <div className='mainCard'>
        <h1>my portfolio</h1>
        <div id="my-work">

          <Project
          id={"app-1"}
          src={weather}
          alt={"weather-dashboard"}
          mainLink={"https://weather-dashboard-yntg.onrender.com/"} 
          mainLinkTitle={"weather-dashboard app"} 
          subLink={"https://github.com/mikelind28/weather-dashboard"} 
          subLinkTitle={"github repository"}
          />

          <Project
          id={"app-2"}
          src={employee}
          alt={"employee-tracker"}
          mainLink={"https://github.com/mikelind28/employee-tracker"} 
          mainLinkTitle={"employee-tracker app"} 
          subLink={"https://drive.google.com/file/d/1DXPyMtcYDwTl7HKKeCx4kH0KibFfOCjW/view"} 
          subLinkTitle={"video walkthrough"}
          />

          <Project
          id={"app-3"}
          src={vehicle}
          alt={"vehicle-builder"}
          mainLink={"https://github.com/mikelind28/CLI-Vehicle-Builder"} 
          mainLinkTitle={"vehicle-builder app"} 
          subLink={"https://drive.google.com/file/d/13WOD0GomK0IZek2z0PmVfFD3Ou4KQqwj/view"} 
          subLinkTitle={"video walkthrough"}
          />

          <Project
          id={"app-4"}
          src={task}
          alt={"task-tracker"}
          mainLink={"https://toli-a.github.io/project1/"} 
          mainLinkTitle={"task-tracker app"} 
          subLink={"https://github.com/toli-A/project1"} 
          subLinkTitle={"github repository"}
          />

          <Project
          id={"app-5"}
          src={readme}
          alt={"readme-made-easy"}
          mainLink={"https://github.com/mikelind28/README-Made-Easy"} 
          mainLinkTitle={"readme-made-easy app"} 
          subLink={"https://drive.google.com/file/d/1H47A6TUaJYyMTn4uYytp4EBFaR6e6e1T/view"} 
          subLinkTitle={"video walkthrough"}
          />

          <Project
          id={"app-6"}
          src={css}
          alt={"css-testing"}
          mainLink={"https://mikelind28.github.io/css-testing/"} 
          mainLinkTitle={"css-testing"} 
          subLink={"https://github.com/mikelind28/css-testing"} 
          subLinkTitle={"github repository"}
          />

        </div>
      </div>
    );
}
  