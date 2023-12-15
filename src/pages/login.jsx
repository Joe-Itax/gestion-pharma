import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    change ? navigate('/dashboard') : navigate('/home');
  };
  return (
    <>
      <h1>Login Page</h1>
      <form action="" method="post">
        <input type="text" name="pseudo" id="pseudo" required />
        <input onClick={handleClick} type="submit" value="Connexion" />
      </form>

      <br />
      <label htmlFor="admin">Je suis Admin</label>
      <input
        type="checkbox"
        id="admin"
        defaultChecked={change}
        onChange={handleChange}
      />
    </>
  );
}

export default Login;
