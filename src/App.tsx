import React, {useEffect} from 'react';
import { actionCreators } from './redux';
import { RootState } from './redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers} from './redux/action-creators/index'
import { bindActionCreators } from 'redux';

function App() {
  
  const dispatch = useDispatch();
  const { fetchUsers} = bindActionCreators(actionCreators, dispatch)
  
  useEffect(() => {
    fetchUsers()
  }, [])
  
  const state = useSelector((state: RootState) => state.fetchUser)
  console.log(state)
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
