import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { registerUser, loginUser } from '../services/userService';

const UserForm = ({ isLogin }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await loginUser(user);
        Swal.fire('成功', 'サインインに成功しました', 'success');
        navigate('/dashboard');
      } else {
        await registerUser(user);
        Swal.fire('成功', 'サインアップに成功しました', 'success');
        await loginUser(user);
        navigate('/dashboard');
      }
    } catch (error) {
      Swal.fire('エラー', 'エラーが発生しました', 'error');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'サインイン' : 'サインアップ'}
      </Typography>
      {!isLogin && (
        <TextField
          label="名前"
          name="name"
          fullWidth
          value={user.name}
          onChange={handleChange}
          style={{ marginBottom: 16 }}
        />
      )}
      <TextField
        label="メールアドレス"
        name="email"
        fullWidth
        value={user.email}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <TextField
        label="パスワード"
        name="password"
        type="password"
        fullWidth
        value={user.password}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {isLogin ? 'サインイン' : 'サインアップ'}
      </Button>
    </Container>
  );
};

export default UserForm;
