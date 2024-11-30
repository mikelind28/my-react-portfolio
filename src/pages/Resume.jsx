import resume from '../assets/files/mike-lind-resume.pdf';

export default function Resume() {
    return (
      <div className='mainCard'>
        <h1>my resume</h1>
        <a href={resume} id="resume-download-link" download>Download a copy 📥</a>
        <iframe
          id="resume-iframe"
          src={resume}
          width="90%"
          height="90%"
          title="PDF Viewer"
        />
      </div>
    );
}
  