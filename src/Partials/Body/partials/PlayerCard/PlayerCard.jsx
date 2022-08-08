import { useState } from "react";
import CloseIcon from "../../../../Icons/CloseButton";
import styles from "./playercard.module.scss";

const PlayerCard = ({ children }) => {
  const [cardState, setCardState] = useState(null);

  const showStats = () => {
    setCardState(!cardState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.avatar}
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png"
          alt="kd_image"
        />
        {cardState && (
          <div className={styles.infoContainerActive}>Some extra info</div>
        )}
        {!cardState && (
          <div className={styles.infoContainerInactive}>Some extra info</div>
        )}
        {!cardState && (
          <button
            onClick={() => showStats()}
            className={styles.activeButton}
            type="button"
          >
            Show stats
          </button>
        )}
        {cardState && (
          <button
            onClick={() => {
              showStats();
            }}
          >
            <CloseIcon></CloseIcon>
          </button>
        )}
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.numberPositionContainer}>
          <span>Number</span>
          <span>SF</span>
        </div>
        <span>Kevin Durant</span>
        <span></span>
      </div>
    </div>
  );
};

export default PlayerCard;
