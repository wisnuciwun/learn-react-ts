import 'App.css';
import Private from 'components/auth/Private';
import Profile from 'components/auth/Profile';
import CounterPage from 'components/class/Counter';
import { LoginConsume } from 'components/context/Login';
import { LoginContextProvider } from 'components/context/LoginContext';
import Square from 'components/context/Square';
import { ThemeContextProvider } from 'components/context/ThemeContext';
import CustomButton from 'components/CustomButton';
import CustomContainer from 'components/CustomContainer';
import CustomInput from 'components/CustomInput';
import DomRef from 'components/effect/ref/DomRef';
import MutableRef from 'components/effect/ref/MutableRef';
import { List } from 'components/generic/List';
import Heading from 'components/Heading';
import { MyButton } from 'components/html/Button';
import { MyInput } from 'components/html/Input';
import Introduce from 'components/Introduce';
import { RandomNumber } from 'components/restriction/RandomNumber';
import Counter from 'components/state/Counter';
import { UserState } from 'components/state/UserState';
import Status from 'components/Status';
import Toast from 'components/templateliterals/Toast';
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
      {/* <Status status='failed' />
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
      <MutableRef/> */}
      {/* <CounterPage message='ok'/> */}
      <Private isLogin={true} component={Profile} />
      <List items={["tara","marga","jaya"]} onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isNegative isZero/> {/*choose one isNegative or isPositive*/}
      <Toast position='center' />
      <MyButton variant='primary' onClick={() => console.log("Clicked")}>div</MyButton>
      <MyInput value={1321414} ></MyInput>
    </div>
  );
}

export default App;
