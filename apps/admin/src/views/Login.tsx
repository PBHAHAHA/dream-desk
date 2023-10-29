import { login } from '@/api';
import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState('');
  const router = useNavigate();
  const setUsernameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const setPasswordFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //阻止表单的默认提交行为
    e.preventDefault();
    login({
      username,
      password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        message.success('登录成功');
        router('/');
      })
      .catch(err => {
        message.error(err.message);
      });
  };

  return (
    <div className='w-screen h-screen bg-[url(@/assets/bg.svg)] flex items-center justify-center'>
      <div className='w-[400px] py-8 px-7 bg-white shadow-2xl flex flex-col'>
        <h2 className='w-full text-center mt-0 mb-5 select-none text-[#0056b3]'>桌搭社</h2>
        <form className='w-full flex flex-col'>
          <input
            value={username}
            type='text'
            onInput={setUsernameFunc}
            placeholder='用户名'
            className='h-9 py-1 px-3 mb-4 outline-none text-base rounded-none border-[2px] border-black'
          />
          <input
            value={password}
            type='password'
            placeholder='密码'
            onInput={setPasswordFunc}
            autoComplete='false'
            className=' mb-4 h-9 py-1 px-3 outline-none text-base rounded-none border-[2px] border-black'
          />
          <button
            type='submit'
            onClick={submit}
            className='w-full mb-5 outline-none rounded-none border-0 py-3 text-base bg-[#0056b3] text-white cursor-pointer'
          >
            登 录
          </button>
        </form>
        <p className='flex items-center justify-between'>
          <span className=' cursor-pointer hover:text-[#0056b3]'>忘记密码？</span>
          <span className=' cursor-pointer hover:text-[#0056b3]'>注册账号</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
