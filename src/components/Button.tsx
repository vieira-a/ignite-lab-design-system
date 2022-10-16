import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot: 'button';

    return (
        <Comp 
            className={clsx(
                'py-4 px-3 bg-cyan-medium-light rounded text-gray-900 font-semibold text-sm w-full transition-colors hover:bg-cyan-light',
            )}
                >{children}</Comp>
    )
}