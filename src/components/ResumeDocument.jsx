import "../styles/ResumeDocument.css";

export default function ResumeDocument({ userData }) {
  return (
    <div className="resume-document">
      <div className="header">
        <h2 className="name">{userData.fullName}</h2>
        <div className="contact-details">
          <div className="email">{userData.email}</div>
          <div className="phone">{userData.phone}</div>
          <div className="address">{userData.address}</div>
        </div>
      </div>
      <div className="section">
        <h3>Education</h3>
        <div className="education-entry">
          <div></div>
        </div>
      </div>
      <div className="section">
        <h3>Experience</h3>
        <p>Web Developer</p>
        <p>Company XYZ</p>
        <p>May 20XX - Present</p>
        <ul>
          <li>Developed and maintained web applications...</li>
          <li>Collaborated with cross-functional teams...</li>
        </ul>
      </div>
      <div className="section">
        <h3>Skills</h3>
        <ul>
          <li>Front-end Development (HTML, CSS, JavaScript)</li>
          <li>Back-end Development (Node.js, Python)</li>
          <li>Database Management (SQL, MongoDB)</li>
        </ul>
      </div>
    </div>
  );
}
