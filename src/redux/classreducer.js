const initialState = {
    classes: [],
    enrolledClasses: [],
    loading: false,
    error: null
  };
  
  const classReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CLASSES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_CLASSES_SUCCESS':
        return {
          ...state,
          classes: action.payload,
          loading: false
        };
      case 'FETCH_CLASSES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case 'ENROLL_CLASS':
        return {
          ...state,
          enrolledClasses: [...state.enrolledClasses, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default classReducer;