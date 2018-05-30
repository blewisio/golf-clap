class Game {
    constructor({ holes, players } = {}) {
        if (!players || !players.length) {
            throw new Error('Must have at least one player in the players list');
        }
        this._players = players;
        this._holes = holes || 18;
        this._hole = 1;
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
        throw new Error('Not implemented');
    }
}

module.exports = Game;
