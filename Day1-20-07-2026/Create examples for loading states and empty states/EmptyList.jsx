function EmptyList() {
  const students = [];

  return (
    <div>
      <h1>Students</h1>

      {students.length === 0 ? (
        <h2>No Students Found</h2>
      ) : (
        students.map((student, index) => (
          <p key={index}>{student}</p>
        ))
      )}
    </div>
  );
}

export default EmptyList;