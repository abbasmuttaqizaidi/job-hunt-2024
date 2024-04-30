import { Provider } from "react-redux";
import Counter from "./reduxTraditional";
import { store } from "./reduxTraditional/store";
import { ToolkitCounter } from "./reduxtoolkit";
import { toolkitStore } from "./reduxtoolkit/store";


function App() {


  return (
    <>
      {/* <ReduxTraditional /> */}
      <ReduxToolkit />
    </>
  );
}

export default App;


//Redux traditional

function ReduxTraditional() {

  return <Provider store={store}>
    <Counter />
  </Provider>
}

//Redux Toolkit

function ReduxToolkit() {
  return <Provider store={toolkitStore}>
    <ToolkitCounter />
  </Provider>
}