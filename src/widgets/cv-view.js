const CvView = ({ name, skills }) => {
  return (
    <>
      <div className="card">
        <h1>{name}</h1>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <h3 key={index}>{skill}</h3>
        ))}
      </div>
    </>
  );
};

export default CvView;
