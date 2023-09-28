import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const addItemsHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItemHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItemHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearListHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItemsHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onToggleItem={toggleItemHandler}
        onClearList={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
