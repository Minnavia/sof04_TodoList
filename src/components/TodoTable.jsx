/* eslint-disable react/prop-types */

export default function TodoTable(props) {
    return(
        <div>
            <table >
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                            <button onClick={() => props.todoDelete(index)}>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}