import './Button.css';

function Button (props) {

  const clicked = (event) => {
    console.log(event.target);
    alert('You clicked me!');
  }

  return (
    <button
      className="todo-button"
      onClick={clicked}
    >
      ➕
    </button>
  );
};

export default Button;