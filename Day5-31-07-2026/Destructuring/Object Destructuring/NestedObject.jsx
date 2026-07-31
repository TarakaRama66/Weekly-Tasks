function NestedObject() {
  const student = {
    name: "Tarakram",
    address: {
      city: "Palakollu",
      district:"West Godavari",
      state: "Andhra Pradesh",
    },
  };

  const {name,address: { city, state, district },} = student;
  return (
    <>
    <h2>Nested Object Destructuring</h2>
      <h2>{name}</h2>
      <p>{city}</p>
      <p>{district}</p>
      <p>{state}</p>
    </>
  );
}

export default NestedObject;