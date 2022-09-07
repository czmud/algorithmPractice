/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
*/
let collection = [{},{},{}]

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
    Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(n + m) linear, n = collection.length. m = updatedVals num of keys.
 *    Worst case is looping through the full collection because no id matched.
 *    updatedVals is only looped over one time despite being a nested loop
 *    since it is within a condition, hence we use addition instead of
 *    multiplication in the Big O notation.
 * - Space: O(1) constant.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
function findByIdAndUpdate(id, updatedVals, collection) {
    // find entry by id in collection
    for(var i = 0; i<collection.length; i++){
        if(id === collection[i]["id"]){
            break;
        }
    }
    // return null if looped through entire array without finding entry
    if(i >= collection.length ){
        return null;
    }
    // loop through values to update. If they exist on entry, update them.
    Object.entries
    Object.keys
    Object.values

    for( let [ key, value ] of Object.entries(updatedVals) ){
        if( collection[i][key] !== undefined ){
            collection[i][key] = value; 
        }
    }
    // return the updated entry
    return collection[i];
}

function findErikByIdAndUpdate(id, updatedVals, collection) {
    const objects = collection.filter( (item) => item.id == id);
    return objects.length == 0 ? null : Object.assign(objects[0], Object.fromEntries(Object.entries(updatedVals).filter(([key]) => key in objects[0] )));
}

console.log(findErikByIdAndUpdate(id1, updateData1, students));
console.log(findErikByIdAndUpdate(id2, updateData2, students));
console.log(findErikByIdAndUpdate(id3, updateData3, students));
/*****************************************************************************/