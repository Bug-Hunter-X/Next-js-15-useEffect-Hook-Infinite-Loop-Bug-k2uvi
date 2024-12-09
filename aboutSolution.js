```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Functional update
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>About Page - Count: {count}</div>
  );
}
```