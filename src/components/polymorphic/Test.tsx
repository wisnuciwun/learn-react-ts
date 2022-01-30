import React from 'react';

// type TestOwnProps = {
type TestOwnProps<AS extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode 
    // as?: React.ElementType
    as?: AS
}

type TestProps<AS extends React.ElementType> = TestOwnProps<AS> & Omit<React.ComponentProps<AS>, keyof TestOwnProps<AS>>

export const Test = <AS extends React.ElementType = 'div'>({ size, color, children, as }: TestProps<AS>) => {
  const Component = as || 'div'
    return <Component className={`mytst-${size}-${color}`} >{children}</Component>;
};
