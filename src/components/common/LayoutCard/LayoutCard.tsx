import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./LayoutCard.module.css";
import { playersData } from "../../../assets/data/players";
import { SvgAvatar } from "../SvgAvatar";
import { useResponsive, EllipseConfig, TitleConfig, ButtonConfig, LayoutCardConfig } from "../../../hooks/useResponsive";
// Import icons components
import { TuneIcon } from "../../../assets/icons/TuneIcon";
import { AddIcon } from "../../../assets/icons/AddIcon";
import { VisibilityIcon } from "../../../assets/icons/VisibilityIcon";
import { PartyIcon } from "../../../assets/icons/PartyIcon";
import { HeartIcon } from "../../../assets/icons/HeartIcon";
import { AddAvatarIcon } from "../../../assets/icons/AddAvatarIcon";
// Import images components
import centralDark from "../../../assets/images/fortnite_PNG95.png";
import avatarDark1 from "../../../assets/images/fortnite_PNG52.png";
import avatarDark2 from "../../../assets/images/fortnite_PNG45.png";
import centralLigth from "../../../assets/images/fortnite_PNG96.png";
import avatarLigth1 from "../../../assets/images/fortnite_PNG32.png";
import avatarLigth2 from "../../../assets/images/fortnite_PNG68.png";
// Import skeleton components
import PNG96Skeleton from "../../../assets/skeleton/PNG96Skeleton";
import PNG95Skeleton from "../../../assets/skeleton/PNG95Skeleton";
import PNG52Skeleton from "../../../assets/skeleton/PNG52Skeleton";
import PNG45Skeleton from "../../../assets/skeleton/PNG45Skeleton";
import PNG32Skeleton from "../../../assets/skeleton/PNG32Skeleton";
import PNG68Skeleton from "../../../assets/skeleton/PNG68Skeleton";

interface LayoutCardProps {
  theme?: string;
}

export const LayoutCard: React.FC<LayoutCardProps> = ({ theme = "dark" }) => {
  const { size } = useResponsive();
  const ellipseCfg = EllipseConfig[size];
  const titleCfg = TitleConfig[size];
  const buttonCfg = ButtonConfig[size];
  const layoutCfg = LayoutCardConfig[size];

  const [searchTerm] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("party");
  const [centerGames, setCenterGames] = useState<any[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<string>(
    "Fortnite New Season",
  );
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Reset when theme changes
    setImagesLoaded(false);
    
    // Load only images for current theme
    const isLight = theme === "light";
    const imageSources = isLight 
      ? [centralLigth, avatarLigth1, avatarLigth2]
      : [centralDark, avatarDark1, avatarDark2];

    let loadedCount = 0;
    const totalImages = imageSources.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    imageSources.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [theme]);

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

  return (
    <div 
      className={styles.layoutCard}
      style={{ flexDirection: layoutCfg.flexDirection }}
    >
      <div 
        className={styles.colLeft} 
        style={{ 
          padding: titleCfg.padding,
          minHeight: layoutCfg.colLeftMinHeight,
          width: layoutCfg.colLeftWidth
        }}
      >
        <svg
          className={styles.scribbleSvg}
          style={{
            width: ellipseCfg.width,
            height: ellipseCfg.height,
            left: ellipseCfg.left,
            top: ellipseCfg.top,
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.ellipse1}
            style={{
              transform: `rotate(-15deg) translate(${ellipseCfg.translateX}, ${ellipseCfg.translateY})`,
            }}
            d="M 80 135 A 80 35 0 1 0 160 135"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
          <path
            className={styles.ellipse2}
            style={{
              transform: `rotate(-15deg) translate(${ellipseCfg.translateX}, ${ellipseCfg.translateY})`,
            }}
            d="M 80 135 A 80 35 0 1 0 160 135"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            strokeLinecap="round"
          />
          <path
            className={styles.ellipse3}
            style={{
              transform: `rotate(-15deg) translate(${ellipseCfg.translateX}, ${ellipseCfg.translateY})`,
            }}
            d="M 80 135 A 80 35 0 1 0 160 135"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
        </svg>

        <h1 className={styles.titleMain} style={{ fontSize: titleCfg.fontSize }}>
          start <br />
          <span className={styles.titleAccent}>streaming</span> <br />
          games <br />
          differently
        </h1>

        <div className={styles.subtitleBox} style={{ fontSize: titleCfg.subtitleFontSize }}>
          <p>
            gamor now has{" "}
            <span className={styles.subtitleHighlight}>stream party</span>{" "}
            platform
          </p>
        </div>

        <div className={styles.actionArea}>
          <button
            className={styles.btnPrimary}
            style={{
              padding: buttonCfg.padding,
              fontSize: buttonCfg.fontSize,
              width: buttonCfg.width,
            }}
          >
            Create account
          </button>
          <Link to="/login" className={styles.linkSignin} style={{ fontSize: titleCfg.subtitleFontSize }}>
            Sign in
          </Link>
        </div>
      </div>

      <div 
        className={styles.colMid}
        style={{
          minHeight: layoutCfg.colMidMinHeight,
          width: layoutCfg.colMidWidth
        }}
      >
        <div className={styles.heroGradient}></div>
        <div className={styles.heroHeader}>
          <h2 
            className={styles.heroTitle}
            style={{ fontSize: layoutCfg.heroTitleSize }}
          >
            {currentPlayer}
          </h2>
          <p className={styles.heroSubtitle}>Join Live Stream</p>
          <div 
            className={styles.badgeWrapper}
            style={{ padding: layoutCfg.badgePadding }}
          >
            <div className={styles.addAvatar}>
              <AddAvatarIcon />
            </div>
            <div 
              className={styles.countdownBadge}
              style={{ 
                fontSize: layoutCfg.countdownFontSize,
                padding: layoutCfg.countdownPadding
              }}
            >
              {new Date().getHours()} :{" "}
              {new Date().getMinutes().toString().padStart(2, "0")}
            </div>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          {!imagesLoaded ? (
            <>
              <div className={styles.skeletonHeroImage}>
                <div className={styles.skeletonHeroImageInner}>
                  {theme === "light" ? (
                    <PNG96Skeleton />
                  ) : (
                    <PNG95Skeleton />
                  )}
                </div>
              </div>
              <div
                className={`${styles.skeletonFloatingAvatar} ${styles.skeletonAvatar1}`}
              >
                <div className={styles.skeletonImg}>
                  {theme === "light" ? (
                    <PNG32Skeleton />
                  ) : (
                    <PNG52Skeleton />
                  )}
                </div>
              </div>

              <div
                className={`${styles.skeletonFloatingAvatar} ${styles.skeletonAvatar2}`}
              >
                <div className={styles.skeletonImg}>
                  {theme === "light" ? (
                    <PNG68Skeleton />
                  ) : (
                    <PNG45Skeleton />
                  )}
                </div>
              </div>
            </>
          ) : theme === "light" ? (
            <>
              <img
                alt="Fortnite Character"
                className={styles.heroImage}
                style={{ height: layoutCfg.heroImageHeight }}
                src={centralLigth}
              />

              <div
                className={`${styles.floatingAvatar} ${styles.avatar1} ${styles.lightOnly} ${styles.slideUp}`}
                key="avatar1-light"
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
                className={`${styles.floatingAvatar} ${styles.avatar2} ${styles.lightOnly} ${styles.slideDown}`}
                key="avatar2-light"
              >
                <img
                  className={styles.floatingImg}
                  src={avatarLigth2}
                  alt="User"
                />
              </div>
            </>
          ) : (
            <>
              <img
                alt="Dark Character"
                className={styles.heroImage}
                style={{ height: layoutCfg.heroImageHeight }}
                src={centralDark}
              />

              <div
                className={`${styles.floatingAvatar} ${styles.avatar1} ${styles.darkOnly} ${styles.slideDown}`}
                key="avatar1-dark"
              >
                <img
                  className={styles.floatingImg}
                  src={avatarDark1}
                  alt="Dark User"
                />
              </div>

              <div
                className={`${styles.floatingAvatar} ${styles.avatar2} ${styles.darkOnly} ${styles.slideUp}`}
                key="avatar2-dark"
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

      <div 
        className={styles.colRight}
        style={{
          minHeight: layoutCfg.colRightMinHeight,
          width: layoutCfg.colRightWidth,
          justifyContent: layoutCfg.colRightJustifyContent,
          padding: layoutCfg.colRightPadding
        }}
      >
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
                      <span className={styles.playerName}>
                        {player.name}
                      </span>
                    </div>
                    <div className={styles.avatarsStack}>
                      <div className={styles.avatarStackInner}>
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
                        <SvgAvatar
                          seed={`${player.name}_avatar_3`}
                          size={24}
                          className={styles.avatarSm}
                        />
                      </div>
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
  );
};

export default LayoutCard;