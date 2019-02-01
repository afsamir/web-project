export default class FrontUrls {
    static base = '/#/';
    static news = '/news/';
    static teams = '/teams/';
    static login = '/login/';
    static signup = '/register/';
    static logout = '/logout/';
    static players = '/players/';
    static leagues = '/leagues/';
    static game = '/games/';
    static resetPassword = '/reset_password/';
    static newPassword = '/new_password/';

    static teamPage(team__slug) {
        return FrontUrls.teams + team__slug + '/'
    }

    static playerPage(player__slug) {
        return FrontUrls.players + player__slug + '/'
    }
    static leaguePage(league__slug){
        return FrontUrls.leagues  + league__slug + '/'
    }

}