function songDecoder(song) {
    let counter = 0;
    return song.split('WUB').filter(x => {
        if (x == ' ' && counter == 0) {
            counter++;
            return x;
        } else if (x == ' ' && counter == 0) {
            counter = 0;
            return;
        } else {
            return x;
        }
    }).join(' ');
}