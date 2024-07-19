import {useState} from 'react'

function FunctionTest()
{
    const[tasksList,setTasksList] = useState([{}])
    const[task,setTask] = useState({name:'',toDo:'',lastDate:''})
    let id=0;
    function addTask()
    {
        const temp= [...tasksList,task];
        setTasksList(temp);
        setTask({name:'',toDo:'',lastDate:''})
    }
    function taskHandler(e)
    {
        setTask(
            {
                ...task,
                [e.target.name] : e.target.value
            }
        )
    }
    return(
        <>
            <input type="text" value={task.name} placeholder="Enter Name" name="name" onChange={taskHandler} />
            <br/>
            <input type="text" value={task.toDo} placeholder="Enter To Do" name="toDo" onChange={taskHandler} />
            <br/>
            <input type="text" value={task.lastDate} placeholder="Last day to complete the task" name="lastDate" onChange={taskHandler} />
            <br/>
            <button onClick={addTask}>Add Task</button>

            <h2>Task Are:</h2>
            <ol>
                { tasksList.map(t=>{
                    if(t.name!==undefined)
                    {
                        return(
                        <div key={id++}>
                            <li>{t.name}</li> 
                            <ul>
                                <li>{t.toDo}</li>
                                <p>Last Date to Complete te Task: <li>{t.lastDate}</li></p>
                            </ul>
                            
                        </div>)
                    }
                    return ''
                }
                    )}
            </ol>
        </>
    )
}
export default FunctionTest;
