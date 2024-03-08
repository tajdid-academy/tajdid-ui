import { CheckSuccessIcon, DotIcon } from '@/icons';
import DotIconV2 from '@/icons/dot-icon-v2';
import { cn } from '@/utils';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useEffect, useState } from 'react';

export type Step = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  isCompleted?: boolean;
};

export type StepperProps = {
  steps: Step[];
  rootClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  onStepChange?: (step: number) => void;
  currentStep?: number;
};

const getActiveStep = (activeStep: string, index: number) => {
  const activeStepNumber = Number(activeStep.replace('tab', ''));

  if (activeStepNumber === index + 1) {
    return true;
  }

  return false;
};

export default function Stepper({
  steps,
  currentStep,
  rootClassName,
  tabClassName,
  contentClassName,
  onStepChange,
}: StepperProps) {
  const [activeStep, setActiveStep] = useState('tab1');
  const [isUserChangeStep, setIsUserChangeStep] = useState(false);

  const getStepState = (
    activeStep: string,
    index: number,
    isCompleted?: boolean,
  ) => {
    if (getActiveStep(activeStep, index)) {
      return <DotIcon className="text-primary-600" />;
    }

    if (isCompleted) {
      return (
        <CheckSuccessIcon
          width={24}
          height={24}
          outlinecolor="#F0FDFA"
          className="text-primary-600"
        />
      );
    }

    return <DotIconV2 />;
  };

  useEffect(() => {
    if (currentStep && !isUserChangeStep) {
      setActiveStep(`tab${currentStep}`);
      onStepChange?.(currentStep);
    }
  }, [currentStep, isUserChangeStep, onStepChange]);

  return (
    <TabsPrimitive.Root
      className={rootClassName}
      value={activeStep}
      onValueChange={value => {
        setActiveStep(value);
        onStepChange?.(Number(value.replace('tab', '')));

        if (!isUserChangeStep) {
          setIsUserChangeStep(true);
        }
      }}
    >
      <TabsPrimitive.List
        style={{
          gridTemplateColumns: `repeat(${steps.length - 1}, 1fr) max-content`,
        }}
        className={cn('grid w-full mb-6', tabClassName)}
      >
        {steps.map((step, index) => (
          <TabsPrimitive.Trigger
            key={index}
            value={index === 0 ? 'tab1' : `tab${index + 1}`}
            disabled={step.disabled}
            className={cn(
              "flex w-full items-center text-gray-700 after:content-[''] after:w-full after:h-[2px]  after:bg-gray-200 after:mx-4",
              getActiveStep(activeStep, index) &&
                `text-primary-700 after:bg-primary-600`,
              step.disabled && 'cursor-not-allowed text-gray-400',
            )}
          >
            <span className="flex items-center font-semibold gap-x-3 whitespace-nowrap">
              {getStepState(activeStep, index, step.isCompleted)}
              {step.label}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {steps.map((step, index) => (
        <TabsPrimitive.Content
          key={index}
          className={cn('w-full', contentClassName)}
          value={index === 0 ? 'tab1' : `tab${index + 1}`}
        >
          {step.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
