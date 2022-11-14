import classnames from 'classnames';
import { useMemo } from 'react';
import { formatNumber } from 'lib/utils';
import { PivotTableEnergyRatingProps } from './types';
import styles from './PivotTableEnergyRating.module.css';

export const PivotTableEnergyRating = (props: PivotTableEnergyRatingProps) => {
  const { optimal = false, suboptimal = false, value } = props;

  // Generate component's class name
  const className = useMemo(
    () =>
      classnames(styles.PivotTableEnergyRating, {
        [styles.PivotTableEnergyRatingOptimal]: optimal,
        [styles.PivotTableEnergyRatingSuboptimal]: suboptimal,
      }),
    [optimal, suboptimal],
  );

  // Format numeric value based on the current locale
  const formattedValue = useMemo(() => formatNumber(value), [value]);

  return <div className={className}>{formattedValue}</div>;
};
