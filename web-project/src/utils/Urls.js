export default class Urls {

    static base = 'http://localhost:8000/api/';
    static home = Urls.base + 'home/' ;
    static news = Urls.home + 'news/';
    static footballNewsSummary = Urls.news + 'football/';
    static basketballNewsSummary = Urls.news + 'basketball/';
    static homeSliders = Urls.home + 'slider-images/';
    static matchCards;
    static accounts = Urls.base + 'accounts/';
    static register = Urls.accounts + 'register/';
    static login = Urls.accounts + 'login/';
    static resetPassword = Urls.accounts + 'reset/';
    static resetPasswordRequest = Urls.accounts + 'password_reset/';
    static userProfile = Urls.accounts + 'user-profile/';

}