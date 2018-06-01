class Game {
    constructor({ holes, players } = {}) {
        if (!players || !players.length) {
            throw new Error('Must have at least one player in the players list');
        }
        this._players = players;
        this._holes = holes || 18;
        this._hole = 1;
        this._scores = [{
            hole: 1,
            values: {}
        }];
    }

    nextHole() {
        this._hole += 1;
    }

    holes() {
        return { 
            current: this._hole,
            total: this._holes,
            remaining: this._holes - this._hole
        };
    }

    players() {
        return this._players;
    }

    scores() {
        return this._scores;
    }

    addScore(player, score) {
        if (!player) throw new Error('Must specify a player name');
        if (!score || score < 1) throw new Error('Must record a score of at least 1');
        if (!this._players.includes(player)) throw new Error('Player not found in list');

        this._scores.values = this._scores.values || {};
        this._scores.values[player] = score;
    }
}

module.exports = Game;
