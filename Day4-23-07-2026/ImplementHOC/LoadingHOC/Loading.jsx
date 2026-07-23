function Loading(Component) {
  return function LoadingComponent(props) {
    const isLoading = false;

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
}

export default Loading;