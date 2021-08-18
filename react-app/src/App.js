import logo from './logo.svg';
import './App.css';
import Greet from './components/functional/Greet';
import NamedGreet from './components/functional/NamedGreet';
import Welcome from './components/class/welcome';
import Sample from './components/functional/Sample';
import Sample1 from './components/class/Sample1';
import Greeting from './props/Greeting';
import Hello from './jsx/Hello';
import Student from './destructuring/Student';
import Welcome1 from './props/Welcome';
import Counter from './state/Counter';
import Message from './state/Message';
//import Person from './destructuring/Person';
import FunctionClick from './event-handling/FunctionClick';
import ClassClick from './event-handling/ClassClick';
import EventBind from './event-handling/EventBind';
import Parent from './parent-child/Parent';
import UserGreeting from './conditional-renedring/UserGreeting';
import UserGreetingOne from './conditional-renedring/UserGreetingOne';
import Fragment from './components/class/Fragment';
import UserGreetingtwo from './conditional-renedring/UserGreetingtwo';
import UserGreetingThree from './conditional-renedring/UserGreetingThree';
import NameList from './list-rendering/NameList';
import NameListOne from './list-rendering/NameListOne';
import NameListTwo from './list-rendering/NameListTwo';
import NameListThree from './list-rendering/NameListThree';
import Person from './list-rendering/Person';
import StudentList from './list-rendering/StudentList';
import StyleSheet from './Styling/StyleSheet';

function App() {
  return (
    <div className="container">
    
    <StyleSheet />
    {/* <StudentList /> */}
    {/* <Person /> */}
    {/* <NameListThree /> */}
    {/* <NameListTwo /> */}
    {/* <NameListOne /> */}
    {/* <NameList /> */}
    {/* <UserGreetingThree /> */}
    {/* <UserGreetingtwo /> */}
    {/* <Fragment /> */}
    {/* <UserGreetingOne /> */}
    {/* <UserGreeting /> */}
    {/* <Parent /> */}
    {/* <EventBind /> */}
    {/* <ClassClick /> */}
    {/* <FunctionClick /> */}
    {/* <Person /> */}
    {/* <Message /> */}

    {/* <Counter /> */}
    {/* <Welcome1 name="jt" /> */}

      {/* <Student name="jatin" subject ="cs" />
      <Student name="bhlla" subject ="psy" /> */}
      {/* <Greeting name ="jatin" skill= "business">
        this is first Greeting
        </Greeting>
      <Greeting name ="garg" skill= "service"/> */}
      {/* <Greet />
      <NamedGreet />
      <Welcome />
      <Sample />
      <Sample1 />
      <Hello /> */}
      {/* <Hello /> */}
    </div>
    
  );
}

export default App;
