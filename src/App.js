import React, { useState } from 'react';
import './App.css';  // CSS dosyasını import et
function LoginForm() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const handleSubmit = (e) => {
   e.preventDefault();
   console.log(`Username: ${username}, Password: ${password}`);
   // Burada giriş doğrulamasını yapabilirsin
 };
 return (
<form onSubmit={handleSubmit}>
<div>
<label>Kullanıcı Adı:</label>
<input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
       />
</div>
<div>
<label>Şifre:</label>
<input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
       />
</div>
<button type="submit">Giriş Yap</button>
</form>
 );
}
export default LoginForm;