/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("class-variance-authority").VariantProps<(props?: ({
        variant?: "link" | "default" | "error" | "outline" | "ghost" | null | undefined;
        size?: "small" | "icon" | "default" | "medium" | null | undefined;
        fullWidth?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("./button-content").ButtonContentProps & {
        asChild?: boolean | undefined;
    } & import("react").RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            control: string;
            defaultValue: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        disabled: {
            control: string;
            defaultValue: boolean;
        };
        isLoading: {
            control: string;
            defaultValue: boolean;
        };
        loadingText: {
            control: string;
        };
        icon: {
            control: string;
        };
        iconPosition: {
            options: string[];
            control: {
                type: string;
            };
        };
        className: {
            control: string;
        };
        type: {
            control: string;
        };
        onClick: {
            action: string;
        };
    };
};
type Story = StoryObj<typeof meta>;
export default meta;
export declare const Contained: Story;
