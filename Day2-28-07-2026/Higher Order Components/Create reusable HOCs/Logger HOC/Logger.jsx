function Logger(Component) {
  return function LoggerComponent(props) {
    console.log(`${Component.name} rendered`);

    return <Component {...props} />;
  };
}

export default Logger;