import React, { useState, useEffect } from "react";
import styles from "./TrendingCategories.module.css";
import { categories } from "../../../assets/data/categories";

interface TrendingCategoriesProps {
  theme?: string;
}

export const TrendingCategories: React.FC<TrendingCategoriesProps> = ({ theme = "dark" }) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Load all category images
    const categoryImages = categories
      .map(c => c.image)
      .filter((img): img is string => !!img);

    if (categoryImages.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = categoryImages.length;

    categoryImages.forEach((src) => {
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
  }, []);

  const currentCategories = categories;
  const isLight = theme === "light";

  return (
    <div className={`${styles.trendingSection} ${isLight ? styles.lightTheme : ""}`}>
      <div className={styles.backgroundDecor}>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
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
                ['--bg-image' as string]: category.image && imagesLoaded ? `url(${category.image})` : 'none'
              }}
            >
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
