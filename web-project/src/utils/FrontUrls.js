export default class FrontUrls {
    static base = '/#/';
    static news =  '/news/';
    static teams = '/teams/';
    static teamPage(team__slug) {
    return FrontUrls.teams + team__slug + '/'
    }

}