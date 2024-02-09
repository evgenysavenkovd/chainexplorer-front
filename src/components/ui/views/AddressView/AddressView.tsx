import { CopyButton } from '@app/components/controls';
import { routes } from '@app/navigation';
import { transformLongString } from '@app/utils';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddressView.module.scss';

export interface AddressViewProps {
  address: string;
  link?: keyof typeof routes;
}

export const AddressView = memo(
  ({ address, link = 'address' }: AddressViewProps) => (
    <div className={styles['address']}>
      <Link
        to={routes[link].path.replace(
          routes[link].paramReplace ?? ':address',
          address,
        )}
        className={styles['link']}
        target="_blank"
      >
        {transformLongString(address)}
      </Link>
      <CopyButton content={address} />
    </div>
  ),
);
