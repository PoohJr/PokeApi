import PropTypes from 'prop-types'
function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key ={item.id}>
                                                    {item.name}: 
                                         &nbsp;<b>{item.calor}</b></li>);

    return(
    <>
        <h3>{category}</h3><ul>{listItems}</ul>
    </>);
}
export default List

List.defaultProps = {
    category: "Category", 
    item: [],
}

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, 
                                            name: PropTypes.string.isRequired,
                                            calor:PropTypes.number.isRequired})
                                            ),

}.isRequired

// we use id to separate the names cuz some people may havhe the same name so we use id to be more specictic
// fruits.sort((a, b) => a.name.localeCompare(b.name));  How to make the lsit in alphabetical order and to reverse it switch the b.name to a.name
                   // fruits.sort((a, b) => a.calor - b.calor) Lowest to highest

                  // const lowCal= fruits.filter(fruit => fruit.calor < 100)  THis Filters fruits that are less them 100cal
                  // const highCal = fruits.filter(fruit => fruit.calor >= 100)
// Key is like an id and map is for every value in the array it will do as the array function says
