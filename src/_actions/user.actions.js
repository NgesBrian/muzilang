import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    validate

};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
                    
                     if (user.isSuccess === 201) {
                        let userType;
                        if(user.user.user_type === 'Lover'){
                            userType = 'Lover';
                        }
                        else if(user.user.user_type === 'Artist'){
                            userType = 'Artist';
                        }
                        else{
                            userType = 'null';
                        }
                        dispatch(success(user, userType));
                        history.push('/User-dashboard');
                     }
                     else{
                        dispatch(failure(user.message));
                        history.push('/Login');
                        //dispatch(alertActions.error(user.message));
                     }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user, userType) { return { type: userConstants.LOGIN_SUCCESS, user, userType } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function validate(user){
    return dispatch => {
        let userType;
        if(user.user_type === 'Lover'){
            userType = 'Lover';
        }
        else if(user.user_type === 'Artist'){
            userType = 'Artist';
        }
        else{
            userType = 'null';
        }
        dispatch(success(user, userType));
        history.push('/User-dashboard');
    };
    function success(user, userType) { return { type: userConstants.LOGIN_SUCCESS, user, userType } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
