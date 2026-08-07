function VipAccess(Component) {

  return function EnhancedComponent(props) {
    const isVIP = true;
    if (!isVIP) {
      return <h2>VIP Members Only</h2>;
    }
    return <Component {...props} />;
  };
}
export default VipAccess;