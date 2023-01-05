import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddWord from "./components/addWord/AddWord";
import WordInfo from "./components/WordInfo/WordInfo";
function App() {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App">
                <AddWord />
                <WordInfo />
            </div>
        </>
    );
}

export default App;
