import './App.css';
import { useState } from 'react';
import Pager from './Pager';
import List from './List';
import Buttons from './Buttons';
import Test from './Test';

function App() {
  const dataList = [];
  const pageSize = 30;
  for (let i = 1; i <= 100; i++) {
    dataList.push("Demo Data: " + i);
  }

  const clickBtn = () => {
    setShow(!show);
  }

  const [currentIndex, setCurrentIndex] = useState(1);
  const [show, setShow] = useState(false);

  const changePage = (sender) => {
    const index = parseInt(sender.currentTarget.innerText);
    setCurrentIndex(index);
  }

  const closeWindow = () => {
    setShow(false);
  }

  const confirmWindow = () => {
    alert("你点了确定");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button id="btn" onClick={clickBtn}>弹框</button>
      </header>
      <div className={show ? "modal" : "model hide"}>
        <div className="flex">
          <div className="flex_header">fixed Header</div>
          <List
            data={dataList}
            pageSize={pageSize}
            pageIndex={currentIndex}
          ></List>
          <Pager
            pageCount={dataList.length}
            pageSize={pageSize}
            pageIndex={currentIndex}
            changePage={changePage}
          ></Pager>
          <Buttons
            confirmWindow={confirmWindow}
            closeWindow={closeWindow}>
          </Buttons>
        </div>
      </div>
      <footer>
        <Test text="Memo字符串" />
      </footer>

    </div>
  );
}

export default App;
