import './List.css';

function List(props) {
  return (
    <section className='TodoList-container'>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.all) && props.onEmpty()}
        {props.listSearch.map(props.render)}
      </ul>
    </section>
  );
};

export { List };