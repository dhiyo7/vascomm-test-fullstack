import React from 'react'
import {cn} from "@/utils/general";

const Card = ({ children, className }) => {
  return (
    <div className={cn('rounded-lg p-6 bg-white', className)}>
      {children}
    </div>
  );
};

export default Card;
