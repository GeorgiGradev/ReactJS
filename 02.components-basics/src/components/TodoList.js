import TodoListItem from "./TodoListItem";

export default function TodoList() {
    return (
        <>
            <h2>Tasks</h2>

            {/* <ul>
                <TodoListItem text="Clean your room" />
                <TodoListItem text="Go shopping" />
                <TodoListItem text="Learn React" />
                <TodoListItem text="Learn class components" />
            </ul> */}

            <ul>
                <TodoListItem color="red">Clean your room</TodoListItem>
                <TodoListItem color="blue">Go shopping</TodoListItem>
                <TodoListItem color="pink">Learn React</TodoListItem>
                <TodoListItem color="green">Learn class components</TodoListItem>
            </ul>
        </>
    );
};