import { GiArchiveRegister } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";

const App = () => {
  return (
    <div className="grid place-content-center">
      <h1 className="text-5xl mb-3 text-rose-400">
        <GiArchiveRegister className="m-1 inline-block text-rose-400 align-top"/>To Do App</h1>
      <button type="submit"
      className="p-5 text-4xl border-2 border-sky-500 text-sky-500 dark:md:hover:bg-slate-200">
        <FiPlus className="inline-block align-top"/> Add Note
      </button>
    </div>
  )}

export default App;