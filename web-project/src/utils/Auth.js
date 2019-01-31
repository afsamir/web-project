import Axios from "axios";
import BackUrls from "./BackUrls";

export default class Auth{

    static profile;
    static setToken(t){

        localStorage.setItem('token', t)
        alert(t)
    }

    static getToken(){
        return localStorage.getItem('token')
    }
    static getProfile(token){
        let profile = undefined;
        Axios.get(BackUrls.userProfile, {auth:token}).then(res => Auth.profile = res.data.user).catch(er => profile = undefined);
        return profile

    }


    static login(formID) {
        let formJSON = this.formToJSON(formID);
        // alert(formJSON);
        Axios.post(BackUrls.login, formJSON).then(response => alert(response.data.token))

    }
}