import logo from './logo.svg';
import './App.css';

import SomeClassComponent from './components/SomeClassComponent';
// import Header from './components/Header'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Things I need to do:</p>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
      
      <SomeClassComponent myText={"Here's my Text!"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </SomeClassComponent>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
      <button onClick ={() => alert("This button has been click!")}>Click Me</button>
      
    </>
  );
}

export default App;
