import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = () => ({
	type: UserActionTypes.SIGN_OUT_FAILURE
});

export const signUpStart = (userData) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: userData
});

export const signUpSuccess = () => ({
	type: UserActionTypes.SIGN_UP_SUCCESS
});

export const signUpFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error
});