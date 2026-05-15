

const { useState, Fragment } = React;

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

/*
The ListItem component is memoized using React.memo to prevent unnecessary re-renders.

const ListItem = React.memo(({ item, isSelected, onClick }) => {
  return (
    <li
      key={item.name}
      className={`List__item List__item--${item.color} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {item.name}
    </li>
  );
});
>

*/

const List = ({ items }) => {
  const [selectedItemNames, setSelectedItemNames] = useState([]);

  const handleItemClick = (name) => {
    setSelectedItemNames((prevNames) =>
      prevNames.includes(name)
        ? prevNames.filter((itemName) => itemName !== name)
        : [...prevNames, name]
    );
  };
  return (
    <Fragment>
      <div>
        { selectedItemNames.map((itemName) => (
          <span key={ itemName }> { itemName } </span>
        )) }
      </div>
      <ul className="List">
        { items.map((item) => (
          <li
            key={ item.name }
            className={ `List__item List__item--${item.color} ${selectedItemNames.includes(item.name) ? 'selected' : ''}` }
            onClick={ () => handleItemClick(item.name) }
          >
            { item.name }
          </li>
        )) }
      </ul>
    </Fragment>
  );
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List items={ items } />,
);