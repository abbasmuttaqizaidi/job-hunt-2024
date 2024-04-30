import { Provider } from "react-redux";
import Counter from "./reduxTraditional";
import { store } from "./reduxTraditional/store";


function App() {


  return (
    <>
      <ReduxTraditional />
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