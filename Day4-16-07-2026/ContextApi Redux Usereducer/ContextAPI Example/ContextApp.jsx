import CounterProvider from "./ContextAPI";
import Child from "./Child";

function ContextApp() {
  return (
    <CounterProvider>
      <Child />
    </CounterProvider>
  );
}

export default ContextApp;