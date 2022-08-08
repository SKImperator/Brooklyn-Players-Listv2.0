import styles from "./global.module.scss";
import Header from "./Partials/Header";
import PlayerCard from "./Partials/Body/partials/PlayerCard";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <PlayerCard></PlayerCard>
    </div>
  );
}

export default App;
