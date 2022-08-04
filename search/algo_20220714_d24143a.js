// Is Anagram (Basic)

function isAnagram(string_a, string_b) {
    string_a = string_a.replace(/ /g,"")
    string_b = string_b.replace(/ /g,"")
    if(string_a.length !== string_b.length){
        return false;
    }
    let dictA = stringToFrequencyCount(string_a.toLowerCase());
    let dictB = stringToFrequencyCount(string_b.toLowerCase());
    for (let key of Object.keys(dictA)){
        if(dictA[key] !== dictB[key]){
        return false;
        }
    }
    return true;
}

function stringToFrequencyCount(string){
    let stringDict = {}
    for ( let i = 0; i < string.length; i++){
        if(stringDict[string[i]]){
            stringDict[string[i]]++;
        }else{
            stringDict[string[i]] = 1;
        }
    }
    return stringDict;
}