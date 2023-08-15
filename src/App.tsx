import { useContext } from "react";
import { Context } from "./context/Context";

const TextInput = ({ value }: { value: "first" | "last" }) => {
  console.log("TextInput")  
  const { state, dispatch } = useContext(Context)
  return (
    <div className="field">
      {value}: 
      <input
        value={state[value]}
        onChange={(e) => dispatch(
          {
            type: value === 'first' ? 'SET_FIRST' : 'SET_LAST',
            payload: e.target.value
          }
        )}
      />
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  console.log("Display")  
  const { state } = useContext(Context)
  return (
    <div className="value">
      {value}: {state[value]}
    </div>
  );
};

const FormContainer = () => {
  console.log("FormContainer")  
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};

const DisplayContainer = () => {
  console.log("DisplayContainer")  
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
};

const ContentContainer = () => {
  console.log("ContentContainer")  
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

export function App() {
  console.log("App")  
  return (
    <div className="container">
      <h5>App</h5>
      <ContentContainer />
    </div>
  );
}