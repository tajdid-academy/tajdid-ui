import React, { useEffect, useState } from 'react';
import { EyeCloseIcon, EyeOpenIcon, LockIcon } from '../../icons';
import Input, { InputProps } from '../input/input';
import { Tooltip } from '../tooltip';
import ValidationStatusItem from './ValidationStatusItem';
import usePasswordSchema from './usePasswordSchema';
import { AnimatePresence, motion } from 'framer-motion';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  Omit<InputProps, 'type' | 'startIcon' | 'endIcon'> & {
    enableRules?: boolean;
    onPasswordValidation?: (isValid: boolean) => void;
  }
>(
  (
    {
      className,
      inputClassName,
      placeholder,
      onChange,
      enableRules,
      onPasswordValidation,
      label,
      error,
      ...props
    },
    ref,
  ) => {
    const id = React.useId();
    const [showPassword, setShowPassword] = useState(false);
    const [capsError, setCapsError] = useState(false);

    const { handlePasswordValidation, passwordState, isValidPassword } =
      usePasswordSchema();

    useEffect(() => {
      onPasswordValidation?.(isValidPassword);
    }, [isValidPassword, onPasswordValidation]);

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
        return <EyeCloseIcon className="text-gray-500" />;
      }

      return <EyeOpenIcon className="text-gray-500" />;
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
            startIcon={<LockIcon className="text-gray-500" />}
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
        <AnimatePresence initial={false}>
          {enableRules && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="mt-6">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Your password must have:
                </p>
                <div className="mb-2">
                  {Object.entries(passwordState).map(
                    ([key, { isValid, message }]) => (
                      <ValidationStatusItem
                        key={key}
                        isValid={isValid}
                        text={message}
                      />
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

PasswordInput.displayName = 'Input';

export default PasswordInput;
