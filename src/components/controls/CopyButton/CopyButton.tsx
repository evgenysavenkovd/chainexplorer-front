import { memo, useCallback, useEffect, useState } from 'react';
import { RiCheckLine, RiFileCopyFill } from 'react-icons/ri';
import styles from './CopyButton.module.scss';

export interface CopyButtonProps {
  content: string;
}

export const CopyButton = memo(({ content }: CopyButtonProps) => {
  const [showSuccess, setSuccess] = useState(false);

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(content).then(() => setSuccess(true));
  }, [content]);

  useEffect(() => {
    if (showSuccess) setTimeout(() => setSuccess(false), 750);
  }, [showSuccess]);

  return (
    <button
      className={styles['button']}
      onClick={onClick}
      data-success={showSuccess}
    >
      {showSuccess ? <RiCheckLine /> : <RiFileCopyFill />}
    </button>
  );
});
