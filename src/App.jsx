import { useState } from 'react'


function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstname && lastname) {
      setFullname(`${firstname} ${lastname}`);
      setFirstname("");
      setLastname("");
      console.log("Form Submitted!");
    } 
  }

  return (
    <>
      <div className='app'>
        <h1>Full Name Display</h1>
        <form  action="/"className='userform' onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name:</label>
          <input 
            type="text" 
            id="firstname"
            name='firstname'
            required
            value={firstname}
            onChange={(e)=> {
              setFirstname(e.target.value);
              // setFullname("");
            }}  
          />

          <label htmlFor="lastname">Last Name:</label>
          <input 
            type="text"
            name='lastname' 
            id="lastname"
            required
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              // setFullname("");
            }}
          />
          <button type='submit' >
            Submit
          </button>
        </form>
        {fullname && <p>Full Name: {fullname}</p>}
      </div>
    </>
  )
}

export default App;
