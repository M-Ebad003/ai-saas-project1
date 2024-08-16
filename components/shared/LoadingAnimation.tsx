"use client"
import React from 'react'

const LoadingAnimation = () => {
    return (
        <div className="loader">
            <style jsx>{`
        .loader {
          width: 50px;
          aspect-ratio: 4;
          background: radial-gradient(closest-side at calc(100%/6) 50%, #000 90%, #0000) 0/75% 100%;
          position: relative;
          bottom: -1%;
          animation: l15-0 1s infinite linear;
        }

        .loader::before {
          content: "";
          position: absolute;
          background: inherit;
          clip-path: inset(0 0 0 50%);
          inset: 0;
          animation: l15-1 0.5s infinite linear;
        }

        @keyframes l15-0 {
          0%, 49.99% {
            transform: scale(1);
          }
          50%, 100% {
            transform: scale(-1);
          }
        }

        @keyframes l15-1 {
          0% {
            transform: translateX(-37.5%) rotate(0turn);
          }
          80%, 100% {
            transform: translateX(-37.5%) rotate(1turn);
          }
        }
      `}</style>
        </div>
    )
}

export default LoadingAnimation