import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.js';
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";

import CardEmployeers from './card-employeers/card-employeers';
import ListCard from './list-employeers/card/list-employeers__card';
import ListEmployeers from './list-employeers/list-employeers';
import ManageBtn from './manage-btn/manage-btn';
import Message from './message/message';
import UseResource from "./resources";

function App() {
  const dispatch = useDispatch();
  const {status, result, selectId} = useSelector(state => state);

  useEffect(() => {
    UseResource(dispatch)
  }, []);

  switch (status) {
    case "success":
      return (
        <div className="App d-flex">
          <ListEmployeers>
            {result.map(
              (elem, i) => <ListCard key={i} id={i} data={elem} />
            )}
          </ListEmployeers>
          <CardEmployeers data={result[selectId]}>
              <ManageBtn data={result} selectId={selectId} />
          </CardEmployeers>
        </div>);
    case "error":
      return <Message>Ошибка: {result}</Message>
    default:
      return <Message>Загрузка...</Message>;
  }
}

export default App;