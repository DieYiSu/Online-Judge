function points(games) {
    let total = 0;
    for (game of games) {
        game = game.split(':');
        if (game[0] > game[1]) total += 3;
        else if (game[0] == game[1]) total++;
    }
    return total;
}