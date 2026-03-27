import React from "react";
import styles from "./Home.module.css";
import { LayoutCard } from "../../common/LayoutCard";
import TrendingCategories from "../../common/TrendingCategories";
import { useResponsive, HomeConfig } from "../../../hooks/useResponsive";

interface HomeProps {
  theme?: string;
}

export const Home: React.FC<HomeProps> = ({ theme = "dark" }) => {
  const { size } = useResponsive();
  const config = HomeConfig[size];

  return (
    <main 
      className={styles.homeContainer}
      style={{ padding: config.containerPadding }}
    >
      <div 
        className={styles.layoutCardWrapper}
        style={{ 
          paddingLeft: config.wrapperPaddingLeft,
          justifyContent: config.layoutCardJustifyContent
        }}
      >
        <LayoutCard theme={theme} />
        
        <div className={styles.trendingWrapper}>
          <TrendingCategories theme={theme as string} />
        </div>
      </div>
    </main>
  );
};

export default Home;
