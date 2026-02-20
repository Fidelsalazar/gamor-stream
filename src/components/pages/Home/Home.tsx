import React, { useState, type ReactNode} from "react";
import styles from "./Home.module.css";
import { TuneIcon } from "./icons/TuneIcon";
import { AddIcon } from "./icons/AddIcon";
import { VisibilityIcon } from "./icons/VisibilityIcon";
import { PartyIcon } from "./icons/PartyIcon";
import { HeartIcon } from "./icons/HeartIcon";
import { AddAvatarIcon } from "./icons/AddAvatarIcon";
import { SvgAvatar } from "../../common/SvgAvatar";
import { useNavigate } from "react-router-dom";
import { playersData } from "../../../assets/data/players";

import centralDark from "../../../assets/images/fortnite_PNG95.png";
import avatarDark1 from "../../../assets/images/fortnite_PNG52.png";
import avatarDark2 from "../../../assets/images/fortnite_PNG45.png";
import centralLigth from "../../../assets/images/fortnite_PNG96.png";
import avatarLigth1 from "../../../assets/images/fortnite_PNG32.png";
import avatarLigth2 from "../../../assets/images/fortnite_PNG68.png";

interface HomeProps {
  children?: ReactNode;
  theme?: String;
}

export const Home: React.FC<HomeProps> = ({ theme = "dark" }) => {
  const [searchTerm] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("party");
  const [centerGames, setCenterGames] = useState<any[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("Fortnite New Season");
  const navigate = useNavigate();

  const currentPlayers =
    playersData[selectedPlatform as keyof typeof playersData] || [];

  const addToCenter = (player: any) => {
    if (!centerGames.some((g) => g.id === player.id)) {
      setCenterGames((prev) => [...prev, player]);
      setCurrentPlayer(player.name);
    }
  };

  const handleSearch = () => {
    alert(`Buscando: ${searchTerm}`);
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <main className={styles.homeContainer}>
      <div className={styles.layoutCard}>
        <div className={styles.colLeft}>
          <svg
            className={styles.scribbleSvg}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 80 135 A 80 35 0 1 0 160 135"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              transform="rotate(-15 100 100) translate(-20, -100)"
              opacity="0.6"
              strokeLinecap="round"
            />
            <path
              d="M 80 135 A 80 35 0 1 0 160 135"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              transform="rotate(-15 100 100) translate(-30, -65)"
              opacity="0.3"
              strokeLinecap="round"
            />
            <path
              d="M 80 135 A 80 35 0 1 0 160 135"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              transform="rotate(-15 100 100) translate(-40, -25)"
              opacity="0.6"
              strokeLinecap="round"
            />
          </svg>

          <h1 className={styles.titleMain}>
            start <br />
            <span className={styles.titleAccent}>streaming</span> <br />
            games <br />
            differently
          </h1>

          <div className={styles.subtitleBox}>
            <p>
              gamor now has{" "}
              <span className={styles.subtitleHighlight}>stream party</span>{" "}
              platform
            </p>
          </div>

          <div className={styles.actionArea}>
            <button className={styles.btnPrimary} onClick={handleCreateAccount}>
              Create account
            </button>
            <a className={styles.linkSignin} href="/login">
              Sign in
            </a>
          </div>
        </div>

        <div className={styles.colMid}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroHeader}>
            <h2 className={styles.heroTitle}>{currentPlayer}</h2>
            <p className={styles.heroSubtitle}>Join Live Stream</p>
            <div className={styles.badgeWrapper}>
              <div className={styles.addAvatar}>
                <AddAvatarIcon />
              </div>
              <div className={styles.countdownBadge}>
                {new Date().getHours()} :{" "}
                {new Date().getMinutes().toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            {theme === "light" ? (
              <>
                <img
                  alt="Fortnite Character"
                  className={styles.heroImage}
                  src={centralLigth}
                />

                <div
                  className={`${styles.floatingAvatar} ${styles.avatar1} ${styles.lightOnly}`}
                >
                  <img
                    className={styles.floatingImg}
                    src={avatarLigth1}
                    alt="User"
                  />
                  <div className={styles.viewerBadge}>
                    <VisibilityIcon />
                  </div>
                </div>

                <div
                  className={`${styles.floatingAvatar} ${styles.avatar2} ${styles.lightOnly}`}
                >
                  <img
                    className={styles.floatingImg}
                    src= {avatarLigth2}
                    alt="User"
                  />
                </div>
              </>
            ) : (
              <>
                <img
                  alt="Dark Character"
                  className={styles.heroImage}
                  src={centralDark}
                />

                <div
                  className={`${styles.floatingAvatar} ${styles.avatar1} ${styles.darkOnly}`}
                >
                  <img
                    className={styles.floatingImg}
                    src={avatarDark1}
                    alt="Dark User"
                  />
                </div>

                <div
                  className={`${styles.floatingAvatar} ${styles.avatar2} ${styles.darkOnly}`}
                >
                  <img
                    className={styles.floatingImg}
                    src={avatarDark2}
                    alt="Dark User"
                  />
                  <div className={styles.viewerBadge}>
                    <HeartIcon />
                  </div>
                </div>
              </>
            )}
          </div>

          <svg
            className={styles.absoluteBottomLeft}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M0,100 Q50,0 100,50" strokeWidth="1"></path>
          </svg>
        </div>

        <div className={styles.colRight}>
          <div className={styles.colRightContent}>
            <div className={styles.sectionFirstContainer}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionLabel}>01.</h3>
                <p className={styles.sectionText}> Choose Platform</p>
              </div>
              <div className={styles.platformTabs}>
                <button
                  className={`${styles.tabBtn} ${
                    selectedPlatform === "party" ? styles.active : ""
                  }`}
                  onClick={() => setSelectedPlatform("party")}
                >
                  <PartyIcon />
                  Party
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    selectedPlatform === "matches" ? styles.active : ""
                  }`}
                  onClick={() => setSelectedPlatform("matches")}
                >
                  Matchs
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    selectedPlatform === "streams" ? styles.active : ""
                  }`}
                  onClick={() => setSelectedPlatform("streams")}
                >
                  Streams
                </button>
              </div>
            </div>

            <div className={styles.sectionSecondContainer}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionLabel}>02.</h3>
                <p className={styles.sectionText}> Searching Game</p>
              </div>

              <div className={styles.searchCard}>
                <div className={styles.searchHeader}>
                  <span className={styles.gameTag}>COD Warzone</span>
                  <div
                    className={styles.tuneIcon}
                    onClick={() => alert("Configuración")}
                  >
                    <TuneIcon />
                  </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.playersList}>
                  {currentPlayers.map((player) => (
                    <div key={player.id} className={styles.playerRow}>
                      <div className={styles.playerInfo}>
                        <span className={styles.rankNum}>{player.rank}</span>
                        <span className={styles.playerName}>{player.name}</span>
                      </div>
                      <div className={styles.avatarsStack}>
                        <SvgAvatar
                          seed={`${player.name}_avatar_1`}
                          size={24}
                          className={styles.avatarSm}
                        />
                        <SvgAvatar
                          seed={`${player.name}_avatar_2`}
                          size={24}
                          className={styles.avatarSm}
                        />
                        <button
                          className={styles.btnAdd}
                          onClick={() => addToCenter(player)}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.searchInputContainer}>
                  <button className={styles.searchBtn} onClick={handleSearch}>
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
