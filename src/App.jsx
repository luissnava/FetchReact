import { useEffect, useState, Suspense } from 'react'
import fetchData from './fetchData'
import './App.css'
import useFetch from './useFetch'


const apiData = fetchData("https://jsonplaceholder.typicode.com/users")
function App() {
  
  const data = apiData.read()
  // const {data, loading, error, handleCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    // <div className='App'>
    //   <h1>Fetch like a pro</h1>
    //   <button onClick={handleCancelRequest}>Cancel Request</button>
    //   <div className="card">
    //     <ul>
    //       {error && <li>Error...{error}</li>}
    //       {loading && <li>Loading...</li>}
    //       {data?.map((item)=>(<li key={item.id}>{item.name}</li>))}
    //     </ul>
    //   </div>
    // </div>
    <div className="App">
      <h1>Fetch like a pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className='card'>
          {
            data?.map((user)=>(<li key={user.id}>{user.name}</li>))
          }
        </ul>
      </Suspense>
      
    </div>
  )
}

export default App
