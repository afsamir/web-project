export default class BackUrls {

    static base = 'http://localhost:8000/api/';
    static home = BackUrls.base + 'home/';
    static news = BackUrls.home + 'news/';
    static team = BackUrls.base + 'team/';
    static player = BackUrls.base + 'player/';
    static league = BackUrls.base + 'league/';
    static games = BackUrls.base + 'game/';
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

    static homeLeagueTable(slug) {
        return BackUrls.home + 'league-tables/' + slug + '/';
    }

    static homeLeagueGames(slug) {
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

    static teamGames(slug) {
        return this.team + slug + '/games/'
    }


    static teamNewsByPlayer(slug) {
        return this.team + slug + '/news/by-team/'
    }

    static teamNewsByTeam(slug) {
        return this.team + slug + '/news/by-player/'
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

    static playerNews(slug) {
        return this.player + slug + '/news/'
    }

    static leagueInfo(slug) {
        return this.league + slug + '/info/'
    }

    static leagueStats(slug) {
        return this.league + slug + '/statistics/'
    }

    static leagueSlider(slug) {
        return this.league + slug + '/slider/'
    }


    static leagueBests(slug) {
        return this.league + slug + '/best_players/'
    }


    static leagueNews(slug) {
        return this.league + slug + '/news/'
    }

    static leagueGames(slug) {
        return this.league + slug + '/games/'
    }

    static leagueInfo(slug) {
        return this.league + slug + '/info/'
    }


    static gamesInfo(slug) {
        return BackUrls.games + slug + '/info/'
    }

    static gamePlayers(slug) {
        return BackUrls.games + slug + '/players/'
    }


    static gameTimeLine(slug) {
        return BackUrls.games + slug + '/time_lines/'
    }


    static gameNews(slug) {
        return BackUrls.games + slug + '/news/'
    }

    static gameReport(slug) {
        return BackUrls.games + slug + '/reports/'
    }

    static gameSlider(slug) {
        return BackUrls.games + slug + '/slider/'
    }


}