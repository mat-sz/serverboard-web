import React from 'react';
import styles from './styles.module.scss';

const InfoItem: React.FC<{
  title: string;
  value: string;
}> = ({ title, value }) => {
  return (
    <div className={styles.item}>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default InfoItem;
