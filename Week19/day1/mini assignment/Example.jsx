function Example() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux Toolkit",
    "Git",
    "REST API"
  ];
 
  function Header() {
    return (
      <header className="header">
        <h1>React Profile Page</h1>
        <p>Frontend Developer Portfolio</p>
      </header>
    );
  }
 
  function Profile() {
    return (
      <div className="card">
        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
          className="profile-img"
        />
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> Taraka Rama Tilak Gupta
        </p>
        <p>
          <strong>Role:</strong> Associate Software Engineer
        </p>
        <p>
          <strong>Location:</strong> Hyderabad
        </p>
        <p>
          Passionate Frontend Developer with
          knowledge of HTML, CSS, JavaScript,
          React and Redux Toolkit.
        </p>
      </div>
    );
  }
  function Skills() {
    return (
      <div className="card">
        <h2>Technical Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  function Education() {
    return (
      <div className="card">
        <h2>Education</h2>
        <table>
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Institute</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech</td>
              <td>Vishnu Institute of Technology</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Intermediate</td>
              <td>Sri Chaitanya Junior College</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>SSC</td>
              <td>Apollo E.M High School</td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  function Footer() {
    return (
      <footer className="footer">
        <p>My Profile Page</p>
      </footer>
    );
  }
  return (
    <>
      <Header />
      <div className="container">
        <Profile />
        <Skills />
        <Education />
      </div>
      <Footer />
    </>
  );
}
export default Example;