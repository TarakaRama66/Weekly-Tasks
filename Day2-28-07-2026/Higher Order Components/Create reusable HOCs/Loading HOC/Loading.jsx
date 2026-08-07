function Loading(Component){
    return function LoadingComponent(props){
        if(props.loading){
            return <h2>Loading Products...</h2>;
        }
        return <Component {...props}/>;
    }
}
export default Loading;