
export default function Todo({todo, onUpdate, onDelete}) {
    const { text, status } = todo
    return(
        <li>
          <input type="checkbox" id="checkbox" checked={status === 'Completed'} />
          <label htmlFor="checkbox">{text}</label>

        </li>
    )
}