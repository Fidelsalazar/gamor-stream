import React from "react";
import styles from "./Home.module.css";
import { LayoutCard } from "../../common/LayoutCard";
import TrendingCategories from "../../common/TrendingCategories";

interface HomeProps {
  theme?: string;
}

export const Home: React.FC<HomeProps> = ({ theme = "dark" }) => {

  return (
    <main className={styles.homeContainer}>
      <div className={styles.layoutCardWrapper}>
        <LayoutCard theme={theme} />
        
        <div className={styles.trendingWrapper}>
          <TrendingCategories theme={theme as string} />
        </div>
      </div>
    </main>
  );
};

export default Home;
