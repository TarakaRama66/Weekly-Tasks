function PromiseChaining() {

  const handleClick = () => {
    const promise = new Promise((resolve) => {
      resolve(10);
    });

    promise
      .then((value) => {
        console.log(value);
        return value * 2;
      })
      .then((value) => {
        console.log(value);
        return value + 5;
      })
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Impement Promise Chaining</h1>
      <button onClick={handleClick}>Run Promise</button>
    </div>
  );
}

export default PromiseChaining;