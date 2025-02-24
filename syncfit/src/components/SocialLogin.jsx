import kakaoImg from '../assets/images/kakao_login.png'
import './css/SocialLogin.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import KakaoButton from './KakaoButton';
import { AuthContext } from '../contexts/AuthContext';


const SocialLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const { accessToken, logout } = useContext(AuthContext);

  const nav = useNavigate();

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleLogout = () => {
    logout();
    nav("/" , { replace: true });
  };

  return (
    <div className="social-login">
      <h1>SyncFit</h1>
      {accessToken
        ? <KakaoButton onClick={handleLogout}/>
        : <img src={kakaoImg} alt="카카오 로그인" onClick={handleKakaoLogin} />
      }
    </div>
  )
}

export default SocialLogin