import React, { FC, ChangeEvent, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoTask from './components/TodoTask'
import { ITask } from './Interfaces'

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadLine(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadLine(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete
      })
    )
  }

  return (
    <div className="App">
      <div className="todoList">
        <Header />
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
      <div className="header">
        <div className="inputContainer" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <input
            style={{ marginRight: '20px', justifyContent: 'center' }}
            type="text"
            placeholder="Task ..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}

export default App;
