import React, { useRef } from 'react';
import { showDialog } from '../helpers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../redux/operations/auth-operations';

function LoginPage() {
  alert('email: test@test.com \npassword: test123456');
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordsRef = useRef();
  const registerPAsswordAgreeRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkLoginData = () => {
    if (
      loginEmailRef.current.value != '' &&
      loginPasswordRef.current.value != ''
    ) {
      return true;
    } else {
      return false;
    }
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (checkLoginData()) {
      try {
        dispatch(
          login({
            email: loginEmailRef.current.value,
            password: loginPasswordRef.current.value,
            returnSecureToken: true,
          })
        );

        navigate('/', { replace: true });
      } catch (error) {
        showDialog('Errro', 'Email Or Password is wrong  ', 'error');
      }
    } else {
      showDialog('Failed', 'Logged In Failed', 'error');
    }
  };
  const CheckPassword = () => {
    if (
      registerPasswordsRef.current.value ===
      registerPAsswordAgreeRef.current.value
    ) {
      return true;
    } else {
      return false;
    }
  };
  const CheckRegisterData = () => {
    if (
      registerEmailRef.current.value === '' &&
      registerPasswordsRef.current.value === '' &&
      registerPAsswordAgreeRef.current.value === ''
    ) {
      return false;
    } else {
      if (CheckPassword()) {
        return true;
      }
      return false;
    }
  };
  const RegisterHandler = async (e) => {
    e.preventDefault();
    if (CheckRegisterData()) {
      try {
        dispatch(
          signUp({
            email: registerEmailRef.current.value,
            password: registerPasswordsRef.current.value,
            returnSecureToken: true,
          })
        );

        showDialog('Success', 'Register success', 'success');
      } catch (error) {
        showDialog('Error', 'Registeration Failed', 'error');
      }
    } else {
      showDialog('Failed', 'Enter All Fileds', 'error');
    }
  };

  return (
    <>
      <div className='container-fluid p-5 bg-primary text-white text-center login-cover'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'></div>

          <div className='col-sm-10'>
            <div className='shadow-5-strong form-box'>
              <ul
                className='nav nav-pills nav-justified mb-3'
                id='ex1'
                role='tablist'>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link active'
                    id='tab-login'
                    data-bs-toggle='pill'
                    href='#pills-login'
                    role='tab'
                    aria-controls='pills-login'
                    aria-selected='true'>
                    Login
                  </a>
                </li>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link'
                    id='tab-register'
                    data-bs-toggle='pill'
                    href='#pills-register'
                    role='tab'
                    aria-controls='pills-register'
                    aria-selected='false'>
                    Register
                  </a>
                </li>
              </ul>

              <div className='tab-content'>
                <div
                  className='tab-pane fade show active'
                  id='pills-login'
                  role='tabpanel'
                  aria-labelledby='tab-login'>
                  <form>
                    <div className='text-center mb-3'>
                      <h4 className='mb-4 mt-5'>
                        Login To Momen Task System With
                      </h4>
                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-facebook-f'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-google'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-twitter'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-github'></i>
                      </button>
                    </div>

                    <h4 className='mb-5 mt-2 text-center'>or</h4>

                    <div className='form-outline mb-4'>
                      <input
                        type='email'
                        id='loginName'
                        className='form-control'
                        placeholder='Email or username'
                        ref={loginEmailRef}
                      />
                    </div>

                    <div className='form-outline mb-4'>
                      <input
                        type='password'
                        id='loginPassword'
                        className='form-control'
                        placeholder='Password'
                        ref={loginPasswordRef}
                      />
                    </div>

                    <div className='row mb-4'>
                      <div className='col-md-6 d-flex justify-content-center'>
                        <div className='form-check mb-3 mb-md-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='loginCheck'
                            defaultChecked={true}
                          />
                          <label
                            className='form-check-label'
                            htmlFor='loginCheck'>
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className='col-md-6 d-flex justify-content-center'>
                        <a href='#!'>Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='btn btn-main btn-block mb-4'
                      onClick={loginHandler}>
                      Sign in
                    </button>

                    <div className='text-center'>
                      <p>
                        Not a member? <a href='#!'>Register</a>
                      </p>
                    </div>
                  </form>
                </div>
                <div
                  className='tab-pane fade'
                  id='pills-register'
                  role='tabpanel'
                  aria-labelledby='tab-register'>
                  <form>
                    <div className='text-center mb-3'>
                      <h4 className='mb-4 mt-5'>
                        Register in Momen Task System with
                      </h4>
                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-facebook-f'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-google'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-twitter'></i>
                      </button>

                      <button
                        type='button'
                        className='btn btn-link btn-floating mx-1'>
                        <i className='fab fa-github'></i>
                      </button>
                    </div>

                    <h4 className='mb-4 mt-5 text-center'>or:</h4>

                    <div className='form-outline mb-4'>
                      <input
                        type='email'
                        id='registerEmail'
                        className='form-control'
                        placeholder='Email'
                        ref={registerEmailRef}
                      />
                    </div>

                    <div className='form-outline mb-4'>
                      <input
                        type='password'
                        id='registerPassword'
                        className='form-control'
                        placeholder='password'
                        ref={registerPasswordsRef}
                      />
                    </div>

                    <div className='form-outline mb-4'>
                      <input
                        type='password'
                        id='registerRepeatPassword'
                        className='form-control'
                        placeholder='repeat password'
                        ref={registerPAsswordAgreeRef}
                      />
                    </div>

                    <div className='form-check d-flex justify-content-center mb-4'>
                      <input
                        className='form-check-input me-2'
                        type='checkbox'
                        value=''
                        id='registerCheck'
                        defaultChecked={true}
                        aria-describedby='registerCheckHelpText'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='registerCheck'>
                        I have read and agree to the terms
                      </label>
                    </div>

                    <button
                      type='submit'
                      className='btn btn-main btn-block mb-3'
                      onClick={RegisterHandler}>
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-1'></div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
