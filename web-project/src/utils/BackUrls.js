export default class BackUrls {

    static base = 'http://localhost:8000/api/';
    static home = BackUrls.base + 'home/';
    static news = BackUrls.home + 'news/';
    static footballNewsSummary = BackUrls.news + 'all/football/';
    static basketballNewsSummary = BackUrls.news + 'all/basketball/';
    static homeSliders = BackUrls.home + 'slider-images/';
    static matchCards = BackUrls.home + 'games/';
    static accounts = BackUrls.base + 'accounts/';
    static register = BackUrls.accounts + 'register/';
    static login = BackUrls.accounts + 'login/';
    static resetPassword = BackUrls.accounts + 'reset/';
    static resetPasswordRequest = BackUrls.accounts + 'password_reset/';
    static userProfile = BackUrls.accounts + 'user-profile/';
    static detailedNews = function (slug) {
        return BackUrls.base + 'news/' + slug +'/'
    };
    static leagueSummary = BackUrls.home + 'league-names/';

    static leagueTable(slug) {
        return BackUrls.home + 'league-tables/' + slug + '/';
    }
    static leagueGames(slug){
        return BackUrls.home + 'league-games/' + slug + '/';

    }
}