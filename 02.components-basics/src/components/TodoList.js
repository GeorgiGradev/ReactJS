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
                <TodoListItem>Clean your room</TodoListItem>
                <TodoListItem>Go shopping</TodoListItem>
                <TodoListItem>Learn React</TodoListItem>
                <TodoListItem>Learn class components</TodoListItem>
            </ul>
        </>
    );
};