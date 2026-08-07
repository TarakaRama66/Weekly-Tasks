function Loading(Component) {
  return function EnhancedComponent(props) {
    if (props.loading) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Loading Products...</h2>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default Loading;