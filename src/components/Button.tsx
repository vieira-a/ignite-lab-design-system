import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot: 'button';

    return (
        <Comp 
            className={clsx(
                'py-3 px-4 bg-cyan-medium-light rounded text-gray-900 font-semibold text-sm w-full transition-colors hover:bg-cyan-light',
                className
            )}
                >{children}</Comp>
    )
}