import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthSliceActions } from '../redux/slices/auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.setItem('logged_in', false);
    localStorage.setItem('token', null);
    dispatch(AuthSliceActions.logout());
  };
  return (
    <header className='navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow'>
      <Link className='navbar-brand col-md-3 col-lg-2 me-0 px-3' to='/'>
        Admin
      </Link>
      <button
        className='navbar-toggler position-absolute d-md-none collapsed'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#sidebarMenu'
        aria-controls='sidebarMenu'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <input
        className='form-control form-control-dark w-100'
        type='text'
        placeholder='Search'
        aria-label='Search'
      />
      <div className='navbar-nav'>
        <div className='nav-item text-nowrap'>
          <button
            className='nav-link px-3 btn-light-main btn'
            onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
