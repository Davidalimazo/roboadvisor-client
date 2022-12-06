import React from 'react';

interface ErrorDisplayProps{
    string:string | number | undefined
}
const styles ={
    color:'red'
}
export default function ErrorDisplay({string}:ErrorDisplayProps) {
  return (
    <span style={styles}>
        {string}
    </span>
  );
}
