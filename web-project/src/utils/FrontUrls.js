export default class FrontUrls {
    static base = '/#/';
    static news =  '/news/';
    static teams = '/teams/';
    static login = '/login/';
    static signup = '/register/';
    static logout = '/logout/';
    static newPassword = '/new_password/';
    static teamPage(team__slug) {
    return FrontUrls.teams + team__slug + '/'
    }

}