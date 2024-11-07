import ToDoCard from "./ToDoCard"

export default function ToDoList(props) {
  const {todos} = props

  return (
    <ul className="flex flex-col gap-4 mt-12 max-h-[24rem] sm:max-h-[22.1875rem] overflow-y-auto">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props} todo={todo} key={todoIndex} todoIndex={todoIndex}>
            <span className="block max-w-[350px] truncate" title={todo}>{todo}</span>
          </ToDoCard>
        )
      })}
    </ul>
  )
}