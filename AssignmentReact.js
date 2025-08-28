import React, { useState } from 'react';

// 1. Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// 2. UserForm Component
const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>User Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

// 3. Parent-Child Components
const Child = ({ onInputChange }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Type something..."
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  );
};

const Parent = () => {
  const [childInput, setChildInput] = useState('');
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Parent Component</h2>
      <p>Child Input: {childInput}</p>
      <Child onInputChange={setChildInput} />
    </div>
  );
};

// Main App component that combines all above
const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Combined React Components</h1>
      <Counter />
      <UserForm />
      <Parent />
    </div>
  );
};

export default App;
