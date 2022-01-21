function countingValleys(steps, path) {
    let valleys = 0;
    let altitude = 0;

    for(let i = 0; i < steps; i++){
        if( path[i] == 'D'){
            altitude--;
        }
        else{
            if(altitude == -1){
                valleys++;
            }
            altitude++;
        }
    }
    return valleys;
}