import ToDoList from "./ToDoList"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <ToastContainer autoClose={2000}/>
      <ToDoList/>
    </>
  )
}

export default App
