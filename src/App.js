import { Provider } from "react-redux";
import MobileProgrammingPrep from "./mobile-programming-prep/apiFetching";
import ReduxDemo from "./mobile-programming-prep/redux-demo";
import storeTraditional from "./mobile-programming-prep/redux-demo/reduxTradiotional/store";
import TodoApp from "./mobile-programming-prep/redux-demo/Todo";

function App() {
  return (
    <Provider store={storeTraditional}>
      <div className="App">
        <MobileProgrammingPrep />
        {/* <ReduxDemo />
        <TodoApp /> */}
      </div>
    </Provider>
  );
}

export default App;
