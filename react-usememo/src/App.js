import { useMemo, useState } from 'react';
import './App.css';

const users = [
  { id: 'a', name: 'tugran' },
  { id: 'b', name: 'juliet' },
  { id: 'c', name: 'desmond' },
  { id: 'd', name: 'kate' },
  { id: 'e', name: 'james' },
];
function App() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };

  // The filteredUsers will work only when search is triggered
  const filteredUsers = useMemo(() => {
    return users.filter((item) => {
      console.log('filter function is running');
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);
  return (
    <div className='App'>
      <input
        type='text'
        value={text}
        onChange={handleText}
        placeholder='Search user...'
      />
      <button type='button' onClick={handleSearch}>
        Search
      </button>
      <List list={filteredUsers} />
    </div>
  );
}

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
