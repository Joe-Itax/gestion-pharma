import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
  const [change, setChange] = useState(false);

  const handleChange = ()=>{
    setChange(true);
  }
  
  const navigate = useNavigate();
  const handleClick = () => {
    change ? navigate('/dashboard') : navigate('/home');
  };
  return (
    <>
      <h1>Login Page</h1>

      <button onClick={handleClick}>Connexion</button>

      <br />
      <label for="admin">Je suis Admin Admin</label>
      <input type='checkbox' id='admin' defaultChecked={change} onChange={handleChange}/>
    </>
  );
}

export default Login;
