function Timestamp(Component) {
  return function TimestampComponent(props) {
    const currentTime = new Date().toLocaleString();
    return (
      <>
        <p>Current Time: {currentTime}</p>
        <Component {...props} />
      </>
    );
  };
}

export default Timestamp;