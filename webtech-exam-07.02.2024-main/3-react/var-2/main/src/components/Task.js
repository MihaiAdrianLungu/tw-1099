import { useState } from 'react'
import store from '../stores/TaskStore'

function Task (props) {
  let { item } = props;
  const [ isEditable, setIsEditable ] = useState(false)
  const [ description, setDescription ] = useState(item.description)
  const [ priority, setPriority ] = useState(item.priority)

  const updateTask = () => {
    store.saveItem(item.id, {description, priority});
    setIsEditable(false);
  }

  const handleCancelButton = () => {
    setIsEditable(false);
    setDescription(item.description);
    setPriority(item.priority);
  }

  return (
    <div>
      {
        isEditable ? (
          <div>
           <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
           <input type='text' value={priority} onChange={(e) => setPriority(e.target.value)} />
           <input type='button' value='save' onClick={updateTask}/>
           <button onClick={handleCancelButton}>cancel</button>
          </div>
        ) : (
          <div>
           <span>{item.description}</span>
           <span>{item.priority}</span>
           <button onClick={() => setIsEditable(true)}>select</button>
          </div>
        )
      }
    </div>
  )

}

export default Task
