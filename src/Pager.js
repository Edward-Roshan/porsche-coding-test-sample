import './Pager.css';

function Pager(props) {
    const { pageCount, pageIndex, pageSize, changePage } = props;
    const pages = [];

    const count = Math.ceil(pageCount / pageSize);
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }

    const pagerItems = pages.map(n =>
        <li
            onClick={changePage}
            className={n === pageIndex ? 'pageItem pageItem_active' : 'pageItem'}>{n}</li>
    );

    return <div className={'footer'}>
        <ul className={'footer_content'}>{pagerItems}</ul>
    </div>;
}

export default Pager;