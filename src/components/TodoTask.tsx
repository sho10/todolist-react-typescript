import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="inputContainer" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <span style={{ marginRight: '20px', justifyContent: 'center' }}>{task.taskName}</span>
                <span style={{ marginRight: '20px', justifyContent: 'center' }}>{task.deadline}</span>
                <button
                    onClick={() => {
                        completeTask(task.taskName)
                    }}
                >
                    Complete
                </button>
            </div>
        </div>
    )
}

export default TodoTask