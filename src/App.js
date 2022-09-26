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

            {/* Shows Image and Text, only when there are no tasks */}
            {data.tasks.length === 0 && <NoTaskImage />}

            {/* Shows the list of tasks */}
            {data.tasks.length > 0 && <TaskList />}

            {/* displays toast when a task is marked completed */}
            {data.toastStatus === true && <Toast />}
        </div>
    );
}

export default App;
