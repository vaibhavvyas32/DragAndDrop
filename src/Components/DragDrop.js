import Picture from "./Picture";
import { useState } from "react";
import { useDrop } from "react-dnd";
const PictureList = [
  {
    id: 1,
    url:
      "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    url: "https://avatars.githubusercontent.com/u/52570863?v=4"
  },
  {
    id: 3,
    url: "https://avatars.githubusercontent.com/u/79188851?v=4"
  }
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => AddImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const AddImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    // setBoard((board)=> [...board,pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
