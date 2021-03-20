// Only change code below this line
function myNes() {
    var myStorage = {
        car: {
            inside: {
                'glove box': 'maps',
                'passanger seat': 'crumbs',
            },
            outside: {
                'trunk': 'jack',
            }
        }
    };
    const gloveBoxContents = myStorage.car.inside['glove box'];
    return gloveBoxContents;
}
// Only change code above this line 

console.log(myNes()); // Change this line
module.exports = myNes;