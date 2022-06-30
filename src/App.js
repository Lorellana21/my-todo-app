import { useEffect, useState, useRef } from "react";
import AppHeader from "./components/AppHeader";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const [taskDraft, setTaskDraft] = useState({
    id: null,
    title: null,
    description: null,
  });

  const formRef = useRef();

  const handleAddTask = () => {
    if (taskDraft.title != null && taskDraft.description != null) {
      setTasks([
        ...tasks,
        {
          ...taskDraft,
          id: crypto.randomUUID(),
        },
      ]);
      setTaskDraft({
        id: null,
        title: null,
        description: null,
      });
    } else {
      alert("Debes rellenar los campos");
    }
    formRef.current.reset();
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  useEffect(() => {
    if (tasks.length) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks([...tasks.filter((item) => item.id !== id)]);
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((item) => item.id !== id))
    );
  };

  return (
    <div className="App">
      <AppHeader title="To-do App" counter={tasks?.length || 0} />
      <section>
        <h2>Listado Tareas</h2>
        <div className="tasks">
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              onDeleteTask={() => deleteTask(task.id)}
            />
          ))}
        </div>
      </section>
      <hr />
      <section>
        <h2>Introduce la tarea</h2>
        <form ref={formRef}>
          <FormInput
            type="text"
            title="Título"
            id="title"
            placeholder="tarea"
            onInput={(evt) =>
              setTaskDraft({ ...taskDraft, title: evt.target.value })
            }
          />
          <FormInput
            title="Descripción"
            id="description"
            placeholder="descripción"
            type="textarea"
            onInput={(evt) =>
              setTaskDraft({ ...taskDraft, description: evt.target.value })
            }
          />
          <FormButton text="Añadir tarea" onClick={handleAddTask} />
        </form>
      </section>
    </div>
  );
}

export default App;
