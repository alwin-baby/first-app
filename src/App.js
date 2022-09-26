import { useContext } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./tasks/TaskList";
import NoTaskImage from "./components/NoTaskImage";
import Toast from "./components/Toast";
import DataContext from "./store/Data-Context";

function App() {
    const data = useContext(DataContext);

    return (
        <div>
            <Header />
            <Form />
            {data.tasks.length === 0 && <NoTaskImage />}
            {data.tasks.length > 0 && <TaskList />}
            {data.toastStatus === true && <Toast />}
        </div>
    );
}

export default App;
