import { useContext } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./tasks/TaskList";
import NoTaskImage from "./components/NoTaskImage";
import Toast from "./components/Toast";
import DataContext from "./store/DataContext";

function App() {
    const data = useContext(DataContext); //using context

    return (
        <div>
            <Header />
            <Form />

            {/* Shows Image and Text when there are no tasks and shows the list of tasks when there are tasks */}
            {data.tasks.length ? <TaskList /> : <NoTaskImage />}

            {/* displays toast when a task is marked completed */}
            {data.toastStatus && <Toast />}
        </div>
    );
}

export default App;
