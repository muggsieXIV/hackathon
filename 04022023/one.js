/* 
    Given a string, containing letters, single digit ints, and question marks
    return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
        - if there are no two ints that add up to 10, return false
    Helpful functions:
        parseInt(char) => NaN or the string parsed to an int
        isNaN(x) => true or false
            - need to use isNaN if you want to know if something is NaN
            - the number 0 is falsy
            - NaN is falsy
    
    EXAMPLE:
    questionMarks("acc?7??sss?3rr1??????5") will return true, because there are 3 question marks between 7 and 3
    questionMarks("aa2?1??aalkg") will return false, because there are not 3 question marks between 2 and 1

*/


function questionMarks(string) {
    let isTruthful = false; 
    let markCount = 0; 
    let temp = null; // 7

    //for loop
    for(let i=0; i<string.length; i++) {

        //checks if a character is a number
        if(!isNaN(string[i])) {
            //if temp hasn't been assigned means we hit the first number so assign to temp
            if (temp == null) {
                temp = parseInt(string[i]);
            //markcount != 3 or temp + string(i) != 10 returning false
            //will hit this when you hit your second number in the string
            } else if(markCount != 3 || temp + parseInt(string[i]) != 10){
                return isTruthful; //return false
                console.log("false");
            }

        //else if temp is already set and character is not number check for ? 
        } else if(temp != null && string[i] === '?' && markCount < 3) {
            markCount++;
            console.log(`${markCount} index = ${i}`);
        }
    }

    return !isTruthful;

}


test_1 = questionMarks("acc?7??sss?3rr1??????5") // return true
test_2 = questionMarks("aa2?1??aalkg") // return false 
test_3 = questionMarks("aa2?3??8") //return fasle
test_4 = questionMarks("1???9") // return true

console.log(test_1);
console.log(test_2);
console.log(test_3);
console.log(test_4);
console.log('\n')

function questionMarksDos(string) {
    let isTruthful = false; 
    let markCount = 0; 
    let temp = null; // 7

    //for loop
    for(let i=0; i<string.length; i++) {
        //checks
        if(!isNaN(string[i])) {
            if (temp == null) {
                temp = string[i];
            } else {
                if(Number(temp) + Number(string[i]) == 10) {
                    if (markCount == 3) {
                        temp = string[i];
                        markCount = 0; 
                        isTruthful = true; 
                    }
                    else {
                        return false; 
                    }
                } else {
                    temp = string[i];
                    markCount = 0;
                }
            }
        } 
        
        else if(temp != null && string[i] == "?") {
            markCount ++;
        }
    } 
    return isTruthful;

}

test_1 = questionMarksDos("acc?7??sss?3rr1??????5") // return true
test_2 = questionMarksDos("aa2?1??aalkg") // return false 
test_3 = questionMarksDos("aa2?3??8") //return fasle 
test_4 = questionMarksDos("1???9") // return true

console.log(test_1);
console.log(test_2);
console.log(test_3);
console.log(test_4);
