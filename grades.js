let grades = [ 38, 42, 56, 78, 89, 33, 4];
let computedGrade = [];
for(let grade of grades){
    if( grade < 38 ){
        computedGrade.push(grade);
    }
    else if(grade % 5 < 3) {
        computedGrade.push(grade);
    }
    else{
        while(grade % 5 != 0){
            grade++;
        }
        computedGrade.push(grade);
    }
}
console.log(computedGrade);