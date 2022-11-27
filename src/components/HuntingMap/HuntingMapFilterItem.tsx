import classnames from 'classnames';
import { useCallback } from 'react';
import { Icon } from 'components/Icon';
import { HuntingMapFilterItemProps } from './types';
import styles from './HuntingMapFilter.module.css';

export const HuntingMapFilterItem = (props: HuntingMapFilterItemProps) => {
  const { children, selected, type, onToggle } = props;

  /**
   * Handle clicking on the filter item
   */
  const handleClick = useCallback(() => {
    onToggle(type, !selected);
  }, [onToggle, selected, type]);

  return (
    <li
      className={classnames(styles.HuntingMapFilterMenuItem, {
        [styles.HuntingMapFilterMenuItemEnabled]: selected,
      })}
      onClick={handleClick}
    >
      <span className={styles.HuntingMapFilterMenuItemLabel}>{children}</span>
      <Icon highlighted={selected} size={40} type={type} />
    </li>
  );
};
