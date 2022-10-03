import { AuthSliceActions } from '../slices/auth-slice';

export const login = (user) => {
  return async (dispatch) => {
    const loginHandler = async () => {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQiXFs_XVnWFRa_PheO83m5rvBCBnVtws',
        {
          method: 'POST',
          body: JSON.stringify(user),
        }
      );
      if (!res.ok) {
        throw new Error("Could't fetch data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await loginHandler();
      localStorage.setItem('logged_in', true);
      localStorage.setItem('token', result.idToken);
      dispatch(AuthSliceActions.login(result.idToken));
    } catch (error) {}
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    const signUpHandler = async () => {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQiXFs_XVnWFRa_PheO83m5rvBCBnVtws',
        {
          method: 'POST',
          body: JSON.stringify(user),
        }
      );
      if (!res.ok) {
        throw new Error("Could't register data");
      }
      const data = res.json();
      return data;
    };
    try {
      const result = await signUpHandler();
    } catch (error) {}
  };
};
