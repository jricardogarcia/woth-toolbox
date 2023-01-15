import { SectionHeader } from 'components/SectionHeader';
import { useTranslator } from 'hooks';
import { getTierKey } from 'lib/i18n';
import { WeaponListItem } from './WeaponListItem';
import { WeaponListGroupProps } from './types';
import styles from './WeaponListGroup.module.css';

export const WeaponListGroup = (props: WeaponListGroupProps) => {
  const { group, selected, onWeaponClick } = props;

  // Retrieve application translator
  const translate = useTranslator();

  return (
    <>
      <li className={styles.WeaponListGroupHeader}>
        <SectionHeader>{translate(getTierKey(group.tier))}</SectionHeader>
      </li>

      {group.entities.map(weapon => (
        <WeaponListItem
          active={weapon.slug === selected?.slug}
          weapon={weapon}
          key={weapon.slug}
          onClick={onWeaponClick}
        />
      ))}
    </>
  );
};
