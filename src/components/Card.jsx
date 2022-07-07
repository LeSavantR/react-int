function Card ({ text, completed, id }) {
  return (
    <ul>
      <li className="card-text">
        {id} - {text} -
        <span>{`${completed ? ' Completed' : ' Incomplete'}`}</span>
      </li>
    </ul>
  );
};

export default Card;