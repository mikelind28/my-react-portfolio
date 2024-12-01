import resume from '../assets/files/mike-lind-resume.pdf';

export default function Resume() {
    return (
      <div className='mainCard'>
        <h1>my resume</h1>
        <div id="my-proficiencies">
          <h2>my proficiencies:</h2>
          <div>
            <section>
              <h3>advanced:</h3>
              <ul>
                <li>Microsoft, Google, and Apple office suites (text editing, spreadsheets, slideshows, etc.)</li>
                <li>Airtable</li>
                <li>Photo editing tools (Photoshop, Pixelmator)</li>
                <li>Logic Pro</li>
              </ul>
            </section>

            <section>
              <h3>intermediate:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Adobe Creative Suite</li>
                <li>FileMaker</li>
              </ul>
            </section>

            <section>
              <h3>learning:</h3>
              <ul>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
              </ul>
            </section>
          </div>
        </div>
        <a href={resume} id="resume-download-link" download>click here to download a copy of my resume! 📥</a>
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
  