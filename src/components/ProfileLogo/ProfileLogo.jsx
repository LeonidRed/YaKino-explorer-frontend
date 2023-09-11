import './ProfileLogo.css';
import { Link } from 'react-router-dom';


export default function ProfileLogo() {
  return (
    <Link to="/profile" className='profile-logo'>
      <p className='profile-logo__account'>Аккаунт</p>
      <div className='profile-logo__account-icon'></div>
    </Link>
  )
}