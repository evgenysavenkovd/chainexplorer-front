import { concat } from '@app/utils';
import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

export interface TextInputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'type' | 'className' | 'onBlur' | 'onFocus'
  > {
  value: string;
  onChange: (value: string) => void;
  containerClassName?: string;
  label?: string;
}

export const TextInput = ({
  value,
  onChange,
  className,
  containerClassName,
  label,
  ...textInputProps
}: TextInputProps) => {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={concat(styles['container'], containerClassName)}>
      {label && <span className={styles['label']}>{label}</span>}
      <input
        className={concat(styles['input'], className)}
        value={value}
        onChange={onInputChange}
        {...textInputProps}
      />
    </div>
  );
};
