const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'USER_LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          loading: false
        };
      case 'USER_LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case 'USER_LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };
  
  export default userReducer;