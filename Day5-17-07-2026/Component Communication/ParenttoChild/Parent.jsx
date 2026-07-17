import Student from "./Student";

function Parent() {
  return (
    <div>
      <h1>Parent to Child Communication</h1>
      <Student name="Gupta" />
    </div>
  );
}

export default Parent;