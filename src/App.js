import { useState } from "react";

function App() {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState([])

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault(e);
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault(e);
    let files = [...e.dataTransfer.files];
    setFile(files)
    setDrag(false)
  }

  return (
    <div className="app">
      {drag ? (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
          className="drop-area"
        >
          Отпустите файл чтобы загрузить их
        </div>
      ) : (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          Переташите файл чтобы загрузить их
        </div>
      )}
    </div>
  );
}

export default App;
