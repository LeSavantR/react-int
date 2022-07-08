import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import { Card } from './components/Card';
import Button from './components/Button';
// import './App.css';

const list = [
  {id: 1, text: 'React', completed: true},
  {id: 2, text: 'Redux', completed: false},
  {id: 3, text: 'React Router', completed: true},
]

function App() {
  return (
      <>
      <Counter />
      <Search />
      <List>
        {list.map((item) => (<Card key={item.id} text={item.text} id={item.id} completed={item.completed} />))}
      </List>
      <Button />
    </>
  );
};

export default App;
