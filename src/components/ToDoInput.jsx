export default function ToDoInput(props) {
  const {handleAddTodo, todoValue, setTodoValue} = props

  return (
    <div>
      <p className="text-3xl font-medium text-center pb-6">
        Get Things Done!
      </p>
      <div className="flex gap-2">
        <input autoComplete="off" value={todoValue} onChange={(e) => {
          setTodoValue(e.target.value)
        }} className="p-2.5 bg-transparent flex-grow border border-solid border-[#845AFC] rounded-md focus:outline-none focus:border-[#bca7f5] transition-colors duration-300" type="text" name="todo" id="todo" placeholder="What is the task today?" />
        <button disabled={!todoValue} className="disabled:opacity-50 disabled:hover transition-opacity bg-[#845AFC] enabled:hover:bg-[#6934fa] transition-colors duration-300 text-white px-3 rounded-md" onClick={() => {
          if (todoValue.trim() != '') {
            handleAddTodo(todoValue)
            setTodoValue('')
          }
        }}>Add Task</button>
      </div>
    </div>
  )
}