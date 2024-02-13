
function List(){

    const fruits =[{id: 1, name: "mango", calor: 30 }, // we use id to separate the names cuz some people may havhe the same name so we use id to be more specictic
                  {id: 2, name: "apple", calor: 46 },
                    {id: 3, name: "grape", calor: 89 }, 
                    {id: 4, name: "orange", calor: 456 }];

                   // fruits.sort((a, b) => a.name.localeCompare(b.name));  How to make the lsit in alphabetical order and to reverse it switch the b.name to a.name
                   // fruits.sort((a, b) => a.calor - b.calor) Lowest to highest

                   const lowCal = fruits.filter(fruit => fruit.calor < 100)
// Key is like an id and map is for every value in the array it will do as the array function says
    const listItems = fruits.map(fruit => <li key ={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calor}</b></li>);

    return(<ul>{listItems}</ul>);
}
export default List