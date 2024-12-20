import './App.css';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "bags", quantity: 5, packed: false },
  { id: 4, description: "snacks", quantity: 2, packed: true },
  { id: 5, description: "ticket", quantity: 20, packed: true },
  { id: 6, description: "shoes", quantity: 20, packed: true },
];
function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Form />
        <PackingList />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div>
        <h1>🌴🌴Travel list🌴🌴</h1>
      </div>
    </>
  )
}
function Form() {
  let option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <>
      <div className='add-form'>What do you need for your trip
        <select>
          {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num}>{num}</option>
          ))} */}
          {option.map((num) => ( //parenthesis means returning default by react
            <option value={num}>{num}</option>
          ))}
        </select>
        <input type='text' placeholder='item...' />
        <button>Add</button>
      </div>
    </>
  )
}
function PackingList() {
  return (
    <>
      <div className='list'>
        <ul>
          {
            initialItems.map((item) => (
              <span style={
                item.packed ? { textDecoration: 'line-through' } : {}} >
                <li>{item.quantity} {item.description}
                  <button>➕</button></li>
              </span>
            ))
          }
        </ul>
      </div>
    </>
  )
}
function Footer() {
  return (
    <>
      <div className='stats'>You have X item in your list</div>
    </>
  )
}

export default App;
