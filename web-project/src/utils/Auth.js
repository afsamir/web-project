import Axios from "axios";
import BackUrls from "./BackUrls";

export default class Auth {

    static profile;

    static setToken(t) {

        localStorage.setItem('token', t);
        alert("شما وارد حساب خود شدید .")
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static getProfile() {
        let profile = undefined;
        let token = Auth.getToken();
        let headers = {Authorization: 'Token ' + token};
        Axios.get(BackUrls.userProfile, {headers: headers}).then(res => {Auth.profile = res.data.user;
        }).catch(er => Auth.profile = undefined);
        return Auth.profile

    }

    static formToJSON(formID) {

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

    static logout(){
        localStorage.setItem('token', '');
        alert('شما از حساب خود خارج شدید .')

    }
}