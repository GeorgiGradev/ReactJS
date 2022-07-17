const TodoListItem = (props) => {
    // return <li>{props.text}</li>
    return <li style={{ color: props.color }}> {props.children}</li >
}
export default TodoListItem;