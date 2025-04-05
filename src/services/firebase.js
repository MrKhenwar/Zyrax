import auth from '@react-native-firebase/auth';

export const initializeFirebase = () => {
  // Additional Firebase configuration if needed
};

export const signInWithPhoneNumber = async (phoneNumber) => {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return { success: true, confirmation };
  } catch (error) {
    return { success: false, error };
  }
};

export const confirmOTP = async (confirmation, code) => {
  try {
    await confirmation.confirm(code);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};