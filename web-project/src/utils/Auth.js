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

    static formToJSON(formID){

        let form = document.getElementById(formID);

        let obj = {};
        let elements = form.querySelectorAll("input");
        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return (obj);
    }


    static login(formID) {
        let formJSON = Auth.formToJSON(formID);
        // alert(formJSON);
        Axios.post(BackUrls.login, formJSON).then(response => alert(response.data.token))

    }
}