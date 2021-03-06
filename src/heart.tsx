import React from "react";
import './App.css';

export const HeartIcon = (props: {
    width: number,
    height: number,
    borderColor: string,
    color: string
}) => (
    <svg width={props.width} height={props.height} viewBox="0 0 13 12" fill="none">
        <path
            d="M12.48 3.624l.002.017.003.017c.005.033.067.449-.104 1.164h0c-.244 1.03-.81 1.973-1.646 2.725L6.464 11.33 2.267 7.548h0C1.43 6.796.863 5.852.618 4.822h0c-.17-.716-.11-1.13-.104-1.163l.003-.018.002-.017C.69 1.757 1.996.5 3.54.5c1.026 0 1.949.543 2.493 1.468l.426.724.434-.72A3.002 3.002 0 019.46.5c1.544 0 2.85 1.258 3.02 3.124z"
            stroke={props.borderColor}
            fill={props.color}
        />
    </svg>
);