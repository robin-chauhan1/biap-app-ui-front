import styles from "./styles/globalStyles.module.scss";

import "./api/firebase-init";
import Orders from "./components/application/orders/orders";
import Issues from "./components/application/issues/issues";

function App() {
  return (
    <div className={styles.background}>
      <Orders />
      <Issues />
    </div>
  );
}

export default App;
