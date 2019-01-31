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
        let profile;
        Axios.get(BackUrls.userProfile).then(res => Auth.profile = res.data.user)

    }


    static login(formID) {
        let formJSON = this.formToJSON(formID);
        // alert(formJSON);
        Axios.post(BackUrls.login, formJSON).then(response => alert(response.data.token))

    }
}