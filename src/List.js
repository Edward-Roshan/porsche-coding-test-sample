import './List.css';

function List(props) {
    const { data, pageIndex, pageSize } = props;

    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;
    const displayData = data.slice(start, end);

    const items = displayData.map(n =>
        <li className={"item"}>{n}</li>
    );

    return <div className="content">
        <ul>{items}</ul>
    </div>;
}

export default List;