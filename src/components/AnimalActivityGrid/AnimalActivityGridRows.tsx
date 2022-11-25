import { AnimalActivityGridRow } from './AnimalActivityGridRow';
import { AnimalActivityGridRowsProps } from './types';
import styles from './AnimalActivityGridRows.module.css';

export const AnimalActivityGridRows = (props: AnimalActivityGridRowsProps) => {
  const { animals } = props;

  return (
    <div className={styles.AnimalActivityGridRows}>
      {animals.map(animal => (
        <AnimalActivityGridRow animal={animal} key={animal.id} />
      ))}
    </div>
  );
};