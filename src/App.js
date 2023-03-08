import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
//delete api data

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [id, setID] = useState();

  useEffect(() => {
    getList();
  }, [])
  function getList() {
    fetch("http://localhost:3000/comments")
      .then((result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setData(resp)
          setName(resp[0].name || '')
          setCity(resp[0].city || '')
          setID(resp[0].id)
        })
      })
  }
  const deleteUser = (id) => {
    alert(id)
    // fetch('http://localhost:3000/comments'+id)
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE'
    })
      .then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
        })
        getList();
      })


  }
  function selectUser(id) {
    console.warn(data[id])
    setName(data[id].name)
    setCity(data[id].city)
    setID(data[id].id)
  }
  function updateUser() {
    let items = { name, city, id }
    //console.log(items)
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'PUT',headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
      
      body:JSON.stringify(items)
    })
      .then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
        })
        getList();
      })
  }
  //console.warn(data)
  return (
    <div className="App">
      <h1>Delete data with API call</h1>
      <input type='text' placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
      <br /><br />
      <input type='text' placeholder='city' value={city} onChange={(e) => { setCity(e.target.value) }} />
      <br /><br />

      <input type='text' placeholder='id' value={id} onChange={(e) => { setID(e.target.value) }} />
      <button onClick={updateUser}>update user info</button>
      <table border='3'>
        <tbody>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>city</td>
            <td>operation</td>

            {/* <td>usename</td> */}
          </tr>

          {
            data.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(i)}>Update</button></td>

                {/* <td>{item.username}</td> */}
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
}








































// const App=()=>{


//   const [name,setName]=useState("");
//   const [id,setId]=useState("");
//   const [city,setCity]=useState("");

//   function saveUser(){
//     console.warn(name,city)
//     let data={name,city,id}
//     fetch('http://localhost:3000/comments',{method:'POST',headers:{
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     },
//   body:JSON.stringify(data)}
//     ).then((result)=>{
//       result.json().then((resp)=>{
//         console.warn(resp)
//       })

//     })
//   }

//  return(
//     <div className="App">
//       <h1>Post API  Example</h1>
//       <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/>
//       <input type='text'value={city} onChange={(e)=>{setCity(e.target.value)}} name='city'/><br/>
//       {/* <input type='text'value={id} onChange={(e)=>{setId(e.target.value)}} name='city'/><br/> */}
//       <button type="button" onClick={saveUser} >Save New User</button>
//     </div>
//   )
// }




// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/comments")
//     .then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setData(resp)
//       })
//     })
//   }, [])
//   //console.warn(data)
//   return (
//     <div className="App">
//       <h1>Get API call</h1>
//       <table border='3'>
//         <tr>
//           <td>Id</td>
//           <td>name</td>
//           <td>city</td>
//           {/* <td>usename</td> */}
//         </tr>       
//           {
//             data.map((item) => 
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.city}</td>
//                 {/* <td>{item.username}</td> */}
//               </tr>
//               )
//         }             
//     </table>
//     </div>
//   );
// }

export default App;


// api database se sta 
// nikal ke deti hai jo hum use
// karte hai frontend menubar