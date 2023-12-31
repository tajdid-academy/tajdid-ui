import React, { useState } from 'react';
import { EyeCloseIcon, EyeOpenIcon, LockIcon } from '../../icons';
import Input, { InputProps } from '../input/input';
import { Tooltip } from '../tooltip';
import ValidationStatusItem from './ValidationStatusItem';
import usePasswordSchema from './usePasswordSchema';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    enableRules?: boolean;
  }
>(
  (
    {
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      startIcon,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      endIcon,
      inputClassName,
      placeholder,
      onChange,
      enableRules,
      label,
      error,
      ...props
    },
    ref,
  ) => {
    const id = React.useId();
    const [showPassword, setShowPassword] = useState(false);
    const [capsError, setCapsError] = useState(false);

    const { handlePasswordValidation, passwordState } = usePasswordSchema();

    const handleShowHidePassword = () => {
      setShowPassword(!showPassword);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      setCapsError(event.getModifierState('CapsLock'));
    };

    const renderEndIcon = () => {
      if (error || capsError) {
        return '';
      }

      if (showPassword) {
        return <EyeOpenIcon />;
      }

      return <EyeCloseIcon />;
    };

    return (
      <div className={className}>
        <div className="mb-2">
          <label id={id} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        </div>
        <div className="relative">
          <Input
            onKeyDown={handleKeyDown}
            inputClassName={inputClassName}
            startIcon={<LockIcon />}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            error={error}
            warning={capsError ? 'CAPS LOCK may be turned on.' : ''}
            {...props}
            onChange={e => {
              handlePasswordValidation(e.target.value);
              onChange?.(e);
            }}
          />

          <div
            onClick={handleShowHidePassword}
            className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3 bottom-[2px]"
          >
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  className="unset"
                  type="button"
                  onClick={e => e.preventDefault()}
                >
                  {renderEndIcon()}
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                {showPassword ? 'Hide password' : 'Reveal password'}
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
        <div className={`${enableRules && 'mt-6'}`}>
          {enableRules && (
            <p className="mb-2 text-sm font-medium text-gray-600">
              Your password must have:
            </p>
          )}
          {enableRules &&
            Object.entries(passwordState).map(([key, { isValid, message }]) => (
              <ValidationStatusItem
                key={key}
                isValid={isValid}
                text={message}
              />
            ))}
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'Input';

export default PasswordInput;
