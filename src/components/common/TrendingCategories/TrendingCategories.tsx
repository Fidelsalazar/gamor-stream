import React from "react";
import styles from "./TrendingCategories.module.css";
import { categories } from "../../../assets/data/categories";

interface TrendingCategoriesProps {
  theme?: string;
}

export const TrendingCategories: React.FC<TrendingCategoriesProps> = ({ theme = "dark" }) => {
  const currentCategories = categories;

  return (
    <div className={`${styles.trendingSection} ${theme === "light" ? styles.lightTheme : ""}`}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleAccent}>Trending</span> Categories
        </h2>
        
        <div className={styles.categoriesContainer}>
          {currentCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={styles.categoryCard}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                ['--bg-image' as string]: category.image ? `url(${category.image})` : 'none'
              }}
            >
              {/* Color overlay on hover */}
              <div className={styles.colorHover}></div>
              
              <div className={styles.categoryContent}>
                <span className={styles.categoryId}>/ {category.id}</span>
                <div className={styles.categoryTextContent}>
                  <span className={styles.categoryName}>{category.name}</span>
                  <div className={styles.categoryArrow}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="6" cy="12" r="2"/>
                      <path d="M11 5l7 7-7 7V5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* All Categories Card */}
          <div className={styles.categoryCard}>
            <div className={styles.colorHover}></div>
            <div className={styles.categoryAllContent}>
              <span className={styles.categoryViewAll}>View All</span>
              <span className={styles.categoryName}>All Categories</span>
              <div className={styles.categoryArrow}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6" cy="12" r="2"/>
                  <path d="M11 5l7 7-7 7V5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
