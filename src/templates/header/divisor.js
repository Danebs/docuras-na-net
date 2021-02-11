import React from 'react'
import './styles.scss'

export default () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-divisor" height="57.05" viewBox="0 0 1378.758 57.05">
        <defs>
            <filter id="Path_1" x="0" y="0" width="100%" height="57.05" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-color="#ccc" flood-opacity="0.361"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
            <path id="Path_1-2" data-name="Path 1" d="M1.083-9.315H1361.841l-161.853,27.2s-89.26,11.841-188.914,11.841S869.683,3.88,694.957,3.88,446.588,29.462,312.17,29.726c-118.826.233-121-4.128-176-9.7C129.8,19.379,1.083-9.315,1.083-9.315Z" transform="translate(7.92 15.31)" fill="#fff"/>
        </g>
    </svg>
)