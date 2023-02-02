const Resume = () => {
  return (
    <div className="page-section">
      <section id="resume">
        <h1>Resume</h1>
        <embed src="Resume.pdf" type="application/pdf"/>
        <a href="Resume.pdf" download="R Fridlender Resume.pdf">Click to Download Resume</a>
      </section>
    </div>
  );
}
 
export default Resume;