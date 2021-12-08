import './Buttons.css';

function Buttons(props) {
    const { closeWindow, confirmWindow } = props;

    return <div className={'buttons'}>
        <button onClick={closeWindow}>关闭</button>
        <button onClick={confirmWindow}>确定</button>
    </div>;
}

export default Buttons;
