import { Provider } from "react-redux";
import Counter from "./reduxTraditional";
import { store } from "./reduxTraditional/store";
import { ToolkitCounter } from "./reduxtoolkit";
import { toolkitStore } from "./reduxtoolkit/store";
import { UseReducerDemo } from "./usereducer";
import { SimpleUseReducer } from "./simplesuereducer";
import { AccordionGateway } from "./customHTMLElements/accordion";


function App() {


  return (
    <>
      {/* <ReduxTraditional /> */}
      {/* <ReduxToolkit /> */}
      {/* <UseReducerGateway /> */}
      {/* <SimpleUseReducerGateway /> */}

      <AccordionGateway />
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

function UseReducerGateway() {
  return (
    <>
      <UseReducerDemo />
    </>
  );
}

function SimpleUseReducerGateway() {

  return (
    <SimpleUseReducer />
  )
}