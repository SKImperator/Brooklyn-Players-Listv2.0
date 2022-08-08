import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.logoImage}
        src="https://cdn.nba.com/teams/uploads/sites/1610612751/2022/05/bkn-logo.svg"
        alt="logo"
      />
      <nav className={styles.navBar}>
        <a className={styles.aTag} href="#">
          Home Page
        </a>
        <a className={styles.aTag} href="#">
          Schedule
        </a>
        <a className={styles.aTag} href="#">
          Tickets
        </a>
        <a className={styles.aTag} href="#">
          Roster
        </a>
      </nav>
    </header>
  );
};

export default Header;
