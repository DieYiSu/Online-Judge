function countSheeps(arrayOfSheep) {
    let counter = 0;
    for(x of arrayOfSheep){
        x == true ? counter++ : null;
    }
    return counter;
}