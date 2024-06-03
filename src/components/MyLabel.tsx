import React from 'react';
import './MyLabel.css';


interface props {
    /**
     * Text to display 
     */
    label: string;
    /**
     * Label size 
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all letters
     */
    allCaps?: boolean;
    /**
     * Color 
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color 
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor
}:props) => {
  return (
    <div className={`${size} ${color} `} style={{color:fontColor}}>{
      allCaps ? label.toUpperCase() : label
    }</div>
  )
}
