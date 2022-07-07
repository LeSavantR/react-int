import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';

const list = [
  {text: 'React', completed: false, id: 1},
  {text: 'Redux', completed: false, id: 2},
  {text: 'React Router', completed: true, id: 3},
]

function App() {
  return (
      <>
      <Counter />
      <Search />
      <List>
        {list.map((item) => (<Card key={item.id} text={item.text} id={item.id} completed={item.completed} />))}
      </List>
      <Button text='Hello World!'/>
    </>
  );
};

export default App;
