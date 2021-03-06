import './Card.css';

function Card ({ text, completed, onComplete, onDelete }) {

  return (
    <li className={`item${completed ? ' item-c' : ''}`}>

      <span
        className={`icon icon-check${completed ? '' : ' icon-check--active'}`}
        onClick={onComplete}
      >
        {completed ? '✓' : '✓'}
      </span>

      <p className={`item-p${completed ? ' item-p--complete' : ''}`}>
        {text}
      </p>
      <span
        className='icon icon-delete'
        onClick={onDelete}
      >
        ✗
      </span>
    </li>
  );
};

export { Card };