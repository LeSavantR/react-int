import './Card.css';

function Card ({ text, completed }) {

  const onComplete = () => {
    console.log(`You clicked me! ${text}` );
  };

  const onDelete = () => {
    console.log(`You clicked me! ${text}` );
  }

  return (
    <li className="item">

      <span
        className={`icon icon-check${completed ? ' icon-check--active' : ''}`}
        onClick={onComplete}
      >
        ✔️
      </span>

      <p className={`item-p${completed ? ' item-p--complete' : ''}`}>
        {text}
      </p>
      <span
        className='icon icon-delete'
        onClick={onDelete}
      >
        ❌
      </span>
    </li>
  );
};

export { Card };