import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.js';
import React, {useEffect, useState} from "react"
import CardEmployeers from './card-employeers/card-employeers';
import ListCard from './list-employeers/card/list-employeers__card';
import ListEmployeers from './list-employeers/list-employeers';
import ManageBtn from './manage-btn/manage-btn';
import Message from './message/message';

function App() {
  let [data, setData] = useState();
  let [status, setStatus] = useState("pending");
  let [selectId, setSelectId] = useState(0);
  const fetchQuery = () => {
    const src = "http://localhost:8080/employeers";
    return fetch(src).then(res => res.json())
  }
  const wrapFetch = (promise) => {
    promise.then(
      data => {
        setData(data);
        setStatus("success")
      }
    ).catch( err => {
      setStatus("error")
    })
  }
  useEffect(() => {
    wrapFetch(fetchQuery())
  }, []);
  const prevHandler = () => {
    setSelectId(() => (selectId > 0) ? selectId - 1 : 0)
  }
  const nextHandler = () => {
    setSelectId(() => (selectId < data.length - 1) ? selectId + 1 : data.length - 1)
  }
  switch (status) {
    case "success":
      return (
        <div className="App d-flex">
          <ListEmployeers>
            {data.map(
              (elem, i) => <ListCard key={i} setSelectId={setSelectId} data={elem} id={i} />
            )}
          </ListEmployeers>
          <CardEmployeers data={data[selectId]}>
              <ManageBtn data={data} selectId={selectId} actions={{prevHandler, nextHandler}} />
          </CardEmployeers>
        </div>);
    case "error":
      return <Message>Ошибка: не удается загрузить данные с сервера</Message>
    default:
      return <Message>Загрузка...</Message>;
  }
}

export default App;
