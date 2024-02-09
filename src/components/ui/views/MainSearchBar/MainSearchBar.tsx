import { Button, TextInput } from '@app/components/controls';
import { routes } from '@app/navigation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainSearchBar.module.scss';

export const MainSearchBar = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const onClick = () => {
    navigate(routes.address.path.replace(':address', address));
  };

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Search address</h3>
      <TextInput
        value={address}
        onChange={setAddress}
        placeholder="Address you want to explore"
        containerClassName={styles['input-container']}
      />
      <Button onClick={onClick}>Search</Button>
    </div>
  );
};
