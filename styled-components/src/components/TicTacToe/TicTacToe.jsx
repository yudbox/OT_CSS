import React from "react";

const TicTacToe = () => {
  const allowDrop = (event) => {
    event.preventDefault();
  };
  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };
  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  };

  return (
    <div className="tic-tac-toe">
      <div className="drag">
        <div className="dragBox">
          <div
            className="cross"
            draggable="true"
            onDragStart={drag}
            id="cross1"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="cross"
            draggable="true"
            onDragStart={drag}
            id="cross2"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="cross"
            draggable="true"
            onDragStart={drag}
            id="cross3"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="cross"
            draggable="true"
            onDragStart={drag}
            id="cross4"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="cross"
            draggable="true"
            onDragStart={drag}
            id="cross5"
          ></div>
        </div>
      </div>

      <div className="board">
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
        <div className="dropBox" onDrop={drop} onDragOver={allowDrop}></div>
      </div>

      <div className="drag">
        <div className="dragBox">
          <div
            className="circle"
            draggable="true"
            onDragStart={drag}
            id="circle1"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="circle"
            draggable="true"
            onDragStart={drag}
            id="circle2"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="circle"
            draggable="true"
            onDragStart={drag}
            id="circle3"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="circle"
            draggable="true"
            onDragStart={drag}
            id="circle4"
          ></div>
        </div>
        <div className="dragBox">
          <div
            className="circle"
            draggable="true"
            onDragStart={drag}
            id="circle5"
          ></div>
        </div>
      </div>
      <button type="reset" className="reset">
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
