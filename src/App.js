import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'




function App() {

  const [load, setLoad] = useState(false)
  const [git, setGit] = useState({})
  const [name, setName] = useState('sixgeat1997')
  const [myname, setMyname] = useState({})


  // const [newname,setNewname] = useState("")

  useEffect(() => {
    fetchUser()
    initialUser()
    // console.log(git);

  }, [])

  const initialUser = async () => {
    setLoad(true)
    const respo = await axios.get(`https://api.github.com/users/sixgeat1997`)
    await setMyname(respo.data)
    await console.log(myname);

    setLoad(false)

  }



  const fetchUser = async () => {
    setLoad(true)
    const res = await axios.get(`https://api.github.com/users/${name}`)
    // const data = await res.json()

    await setGit(res.data)
    // console.log('data :', res.data.avatar_url);
    // await console.log('data :', git);
    setLoad(false)

    // axios.get('https://api.github.com/users/sixgeat1997').then((data) => {
    //   // console.log(data);
    //   setGit(data.data)

    // }).finally(() => {

    // })

  }



  if (load == true) {
    return (
      <div >
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>
    )
  }

  return (

    <>

      <Header data={myname} />
      <Navbar />
      <div>

      </div>
      <div className="CountCenter container " >
        <img src={git.avatar_url} alt="avatar" width="70px" />
        <h1>{git.name}</h1>
        <h2>{git.login}</h2>
        <p><b>id : {git.id}</b></p>
        <br></br>

        <input type="text"  onChange={(a) => setName(a.target.value)} value={name} />
        <br></br>
        <button className="button is-primary is-outlined " onClick={fetchUser}>  click </button>
      </div>


    </>
  );
}

export default App;
