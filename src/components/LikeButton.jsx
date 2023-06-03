import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colors, setColors] = useState('');
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArr.length);
    setColors(colorArr[randomIndex]);
  };

  const addLikes = () => {
    setLikes(likes + 1);
    getRandomColor();
  };

  const divStyle = {
    backgroundColor: `${colors}`,
  };

  return (
    <div
      className="flex gap-2 border-solid border-2 border-blue-800 p-2
    m-2 justify-center  rounded-xl"
    >
      <button
        style={divStyle}
        className="rounded-xl w-auto p-4 text-3xl"
        onClick={addLikes}
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
