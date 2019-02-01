export default class BackUrls {

    static base = 'http://localhost:8000/api/';
    static home = BackUrls.base + 'home/';
    static news = BackUrls.home + 'news/';
    static team = BackUrls.base + 'team/';
    static player = BackUrls.base + 'player/';
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
        return BackUrls.base + 'news/' + slug + '/'
    };
    static leagueSummary = BackUrls.home + 'league-names/';

    static leagueTable(slug) {
        return BackUrls.home + 'league-tables/' + slug + '/';
    }

    static leagueGames(slug) {
        return BackUrls.home + 'league-games/' + slug + '/';

    }

    static teamInfo(slug) {
        return this.team + slug + '/info/'
    }

    static teamStats(slug) {
        return this.team + slug + '/statistics/'
    }

    static teamMembers(slug) {
        return this.team + slug + '/members/'
    }

    static teamSlider(slug) {
        return this.team + slug + '/slider/'
    }

    static teamLeagues(slug) {
        return this.team + slug + '/leagues/'
    }

    static teamGames(slug){
        return this.team +slug + '/games/'
    }


    static teamNewsByPlayer(slug){
        return this.team +slug + '/news/by-team/'
    }

    static teamNewsByTeam(slug){
        return this.team +slug + '/news/by-player/'
    }
    static playerInfo(slug) {
        return this.player + slug + '/info/'
    }

    static playerStats(slug) {
        return this.player + slug + '/statistics/'
    }

    static playerSlider(slug) {
        return this.player + slug + '/slider/'
    }
    static playerNews(slug){
        return this.player +slug + '/news/'
    }

}