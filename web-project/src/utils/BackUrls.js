export default class BackUrls {

    static base = 'http://localhost:8000/api/';
    static home = BackUrls.base + 'home/';
    static news = BackUrls.home + 'news/';
    static footballNewsSummary = BackUrls.news + 'football/';
    static basketballNewsSummary = BackUrls.news + 'basketball/';
    static homeSliders = BackUrls.home + 'slider-images/';
    static matchCards;
    static accounts = BackUrls.base + 'accounts/';
    static register = BackUrls.accounts + 'register/';
    static login = BackUrls.accounts + 'login/';
    static resetPassword = BackUrls.accounts + 'reset/';
    static resetPasswordRequest = BackUrls.accounts + 'password_reset/';
    static userProfile = BackUrls.accounts + 'user-profile/';

    static detailedNews = function (slug) {
        // alert(slug);
        return BackUrls.base + 'news/' + slug +'/'
    }

}