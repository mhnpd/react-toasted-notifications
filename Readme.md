<div width="100%" align="center">
  <img align="center width="300" height="300" src="./logo/logo2.png">
</div>

## React Toasted Notifications

## Installation:

## Configuration

### Implement this at the root of your application.

```js
import { Notification } from "../src/";
// rest of the import

const App = (props) => {
  return (
    <Router>
      <App />
      // this can be suitable location for notification and global level.
      <Notification />
    </Router>
  );
};
```

### When you want to use a notification.

```js
import { useNotification } from "../src/";
// rest of the import

export const Implementation = (props) => {
  const [Message, action] = useNotification();

  const handleNotification = () => {
    action.addNotification({ title: "hello", type: "warning" });
  };

  return (
    <p>
      <button onClick={handleNotification}>Click</button>
    </p>
  );
};
```

## List of the update an bugs:

1. div is being used as decedent child of p.
2. Optimize the dependency.
3. ~~Close button is not work~~
