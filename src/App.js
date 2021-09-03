// // import logo from './logo.svg';
// import test from "./test.JPG";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import HelloWorld from './components/hello-world-component';
// import HelloWorldFunction from './components/hello-world-functional-component';
// import NavComponent from './components/nav-component';
// import RegisterForm from './components/register-form';
// import Register from "./components/register";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {

  const [tasks, setTasks] = useState([ 
    { 
      id: 1,
      text:  'doctor appointment',
    },
    { 
      id: 2,
      text:  'car appointment',
    },
    { 
      id: 3,
      text:  'dog appointment',
    },
  ])

  const deleteTask = (id) => {
    console.log("delete" + id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) => {
    
  }

  return (
    <div className="App">
        <Header title={1}></Header>
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask}> </Tasks>
        : 'Nothing'
        }
    </div>
  );
}

export default App;
