import { ForwardRefsWrapper } from "./forwardrefs/wrapper";
import { Provider } from "react-redux";
import Counter from "./reduxTraditional";
import { store } from "./reduxTraditional/store";
import { ToolkitCounter } from "./reduxtoolkit";
import { toolkitStore } from "./reduxtoolkit/store";
import { UseReducerDemo } from "./usereducer";
import { SimpleUseReducer } from "./simplesuereducer";
import { AccordionGateway } from "./customHTMLElements/accordion";
import { ThunkWrapper as ThunkWithRegularRedux } from "./redux-thunk/reduxRegular/wrapper";
import { ThunkWithToolkitWrapper } from "./redux-thunk/reduxToolkit/wrapper";
import { ThunkWithCreateAsyncWrapper } from "./redux-thunk/thunk-with-createAsync/wrapper";
import { SagaRegularReduxWrapper } from "./redux-saga/redux-regular/wrapper";


function App() {


  return (
    <>
      {/* <UseMemoExample /> */}
      {/* <ReactDotMemo /> */}
      {/* <UseCallBackDemo /> */}
      <ForwardRefsWrapper />
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

function ThunkWithRegularReduxGateway() {
  return <ThunkWithRegularRedux />
}

function ThunkWithToolkitReduxGateway() {
  return <ThunkWithToolkitWrapper />
}

function ThunkWithToolkitReduxAndCreateAsyncGateway() {
  return (
    <ThunkWithCreateAsyncWrapper />
  )
}

function SagaWithRegularRedux() {
  return (
    <SagaRegularReduxWrapper />
  )
}