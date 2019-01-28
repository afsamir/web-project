import Axios from "axios";
import Urls from "./Urls";

export default class Auth{

    static profile;
    static setToken(t){

        localStorage.setItem('token', t)
        alert(t)
    }

    static getToken(){
        return localStorage.getItem('token')
    }
    static is_loggedIn(token){


        Axios.get(Urls.userProfile).then(res => this.profile = res.data.user).then()

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
        let formJSON = this.formToJSON(formID);
        // alert(formJSON);
        Axios.post(Urls.login, formJSON).then(response => alert(response.data.token))

    }
}