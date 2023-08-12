
import './App.css';

function App() {
  return (
    <div className="App">
    <Job salary={50000} company="Google" position="SDE1" />
    <Job salary={50000} company="Google" position="SDE1" />
    <Job salary={50000} company="Google" position="SDE1" />
    </div>
  );
}

const Job = (props)=>{
return (
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.company}</h1>
    <h1>{props.position}</h1>
  </div>
);
};
export default App;
