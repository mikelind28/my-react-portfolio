import profilePic from '../assets/images/frog.jpg'

export default function About() {
    return (
      <div className='mainCard'>
        <h1 id="about-me-h1">about me</h1>
        <section id="about-me">
            <img id="avatar" src={profilePic} alt="Mike Lind"/>
            <p>
                Welcome to my site! My name is Mike Lind. I am a student developer based out of Minneapolis, MN, where I'm currently enrolled in a full-stack coding bootcamp course through the University of Minnesota. I'm excited to share my work with you!
                <br />
                <br />
                With a degree in art and art history from the University of Wisconsin-Madison, I approach programming with a particular interest in design and user experience. I additionally enjoy working with databases and experimenting with data visualization.
                <br />
                <br />
                Outside of programming, my passions include ecology, reading about American history, attempting to play guitar, piano, and drums, and spending time outdoors with my wife and dog. 
            </p>
        </section>
      </div>
    );
}

