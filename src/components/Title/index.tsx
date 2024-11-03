import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./style.module.css";

const Title = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <div>
      <h1 className={styles.title}>{t('name')}</h1>
      <h2 className={styles.subtitle}>{t('job')}</h2>
    </div>
  );
};

export default Title;
