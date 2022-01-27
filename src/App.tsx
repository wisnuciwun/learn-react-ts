import 'App.css';
import { LoginConsume } from 'components/context/Login';
import { LoginContextProvider } from 'components/context/LoginContext';
import Square from 'components/context/Square';
import { ThemeContextProvider } from 'components/context/ThemeContext';
import CustomButton from 'components/CustomButton';
import CustomContainer from 'components/CustomContainer';
import CustomInput from 'components/CustomInput';
import DomRef from 'components/effect/ref/DomRef';
import MutableRef from 'components/effect/ref/MutableRef';
import Heading from 'components/Heading';
import Introduce from 'components/Introduce';
import Counter from 'components/state/Counter';
import { UserState } from 'components/state/UserState';
import Status from 'components/Status';
import User from 'components/User';
import UserList from 'components/UserList';
import Welcome from 'components/Welcome';

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
      <CustomButton handleClick={(e) => {console.log("okok",e,9)}} />
      <CustomInput handleChange={(e) => {console.log("okok",e);}} value='' />
      <CustomContainer styles={{ border: '5px solid green', padding: '2px' }}/>
      <UserState/>
      <Counter/>
      <ThemeContextProvider>
        <Square/>
      </ThemeContextProvider>
      <LoginContextProvider>
        <LoginConsume/>
      </LoginContextProvider>
      <DomRef/>
      <MutableRef/>
    </div>
  );
}

export default App;
