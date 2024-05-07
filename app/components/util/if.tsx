import React, { type PropsWithChildren } from 'react';

type IfProps = {
  condition: boolean;
  children: React.ReactNode;
};

export default function If({ condition, children }: IfProps) {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (condition) {
        if (child.type === If.Then) {
          return child;
        }
      } else {
        if (child.type === If.Else) {
          return child;
        }
      }
    }
  });
}

If.Then = function Then({ children }: PropsWithChildren) {
  return children;
};

If.Else = function Else({ children }: PropsWithChildren) {
  return children;
};
