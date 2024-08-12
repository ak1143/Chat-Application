
import { isValidUsername } from "6pp";

export const UserNameValidator = (username) =>{

    if(!isValidUsername(username)) 
        return { isValid: false , errorMessage: "UserName is invalid"};
}