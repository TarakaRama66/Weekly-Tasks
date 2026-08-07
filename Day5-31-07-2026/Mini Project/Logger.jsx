function Logger(Component) {
  return function LoggerComponent(props) {
    console.log("Rendering:", Component.name);
    return <Component {...props} />;
  };
}
export default Logger;