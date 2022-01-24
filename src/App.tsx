import './App.css';
import Heading from './components/Heading';
import Introduce from './components/Introduce';
import Status from './components/Status';
import User from './components/User';
import UserList from './components/UserList';
import Welcome from './components/Welcome';

function App() {
  const person = {
    firstName: 'Luice',
    lastName: 'Wolfgang'
  }

  const personList = [
    {
      firstName: 'Larry',
      lastName: 'Larson'
    },
    {
      firstName: 'Kenny',
      lastName: 'Winchester'
    },
    {
      firstName: 'Harman',
      lastName: 'Kardon'
    }
  ]

  return (
    <div className="App">
     {/* <Welcome username="Budiman" month={12} isLogin={false} />
      <User name={person} />
      <UserList nameList={personList} /> */}
      <Status status='failed' />
      <Introduce>
        <Heading>My name is Wisnu and im going to learn more about tsx</Heading>
      </Introduce>
      <Welcome username='ok' month={12} isLogin={true} />
    </div>
  );
}

export default App;
