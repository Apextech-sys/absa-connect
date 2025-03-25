const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        
        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <pattern id="dots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#A78BFA" fillOpacity="0.5" />
        </pattern>
      </defs>

      {/* Base Background */}
      <rect width="100%" height="100%" fill="url(#hero-gradient)" />
      
      {/* Dot Grid Pattern */}
      <rect width="100%" height="100%" fill="url(#dots)" className="animate-pulse-slow" />

      {/* Large Background Blobs */}
      <circle 
        cx="5%" 
        cy="20%" 
        r="400" 
        fill="#A78BFA" 
        fillOpacity="0.4" 
        className="animate-float-slow"
        filter="url(#glow-strong)"
      />
      
      <circle 
        cx="95%" 
        cy="80%" 
        r="500" 
        fill="#8B5CF6" 
        fillOpacity="0.4" 
        className="animate-float"
        filter="url(#glow-strong)"
      />

      {/* Decorative Elements */}
      <g className="animate-float-slow" filter="url(#glow-strong)">
        <circle cx="20%" cy="30%" r="120" fill="#C4B5FD" fillOpacity="0.45" />
        <circle cx="22%" cy="28%" r="80" fill="#A78BFA" fillOpacity="0.5" />
      </g>

      <g className="animate-float" filter="url(#glow-strong)">
        <circle cx="80%" cy="70%" r="150" fill="#C4B5FD" fillOpacity="0.45" />
        <circle cx="78%" cy="72%" r="100" fill="#A78BFA" fillOpacity="0.5" />
      </g>

      {/* Larger Geometric Shapes */}
      <path 
        d="M1500 100 L1650 250 L1500 400 Z" 
        fill="#C4B5FD" 
        fillOpacity="0.45"
        className="animate-spin-slow"
        filter="url(#glow-strong)"
      />
      
      <path
        d="M200 600 L350 750 L200 900 Z"
        fill="#A78BFA"
        fillOpacity="0.5"
        className="animate-spin-slower"
        filter="url(#glow-strong)"
      />

      {/* Bold Wave Lines */}
      <path 
        d="M-300 500 Q 400 400 800 550 T 1800 500" 
        stroke="#C4B5FD" 
        strokeWidth="6" 
        fill="none" 
        strokeOpacity="0.5"
        className="animate-pulse-slow"
        filter="url(#glow-strong)"
      />
      
      <path 
        d="M-300 600 Q 500 450 900 600 T 1800 600" 
        stroke="#A78BFA" 
        strokeWidth="4" 
        fill="none" 
        strokeOpacity="0.45"
        className="animate-pulse-slower"
        filter="url(#glow-strong)"
      />

      {/* Additional Large Shapes */}
      <g className="animate-wiggle" filter="url(#glow-strong)">
        <rect 
          x="70%" 
          y="20%" 
          width="100" 
          height="100" 
          fill="#C4B5FD" 
          fillOpacity="0.45" 
          transform="rotate(45)"
        />
      </g>

      {/* Large Plus Symbols */}
      <g className="animate-float" filter="url(#glow-strong)">
        <path 
          d="M100 200 h40 v-40 h40 v40 h40 v40 h-40 v40 h-40 v-40 h-40 z" 
          fill="#A78BFA" 
          fillOpacity="0.5"
        />
      </g>

      <g className="animate-float-slow" filter="url(#glow-strong)">
        <path 
          d="M1700 700 h30 v-30 h30 v30 h30 v30 h-30 v30 h-30 v-30 h-30 z" 
          fill="#C4B5FD" 
          fillOpacity="0.45"
        />
      </g>

      {/* Large Arc Lines */}
      <path
        d="M-200 300 C 300 200, 600 400, 900 300 S 1300 200, 1600 300"
        stroke="#A78BFA"
        strokeWidth="4"
        fill="none"
        strokeOpacity="0.5"
        className="animate-float"
        filter="url(#glow-strong)"
      />

      {/* Additional Circles with Strong Glow */}
      <circle
        cx="60%"
        cy="40%"
        r="80"
        fill="#C4B5FD"
        fillOpacity="0.45"
        className="animate-pulse-slow"
        filter="url(#glow-strong)"
      />

      <circle
        cx="30%"
        cy="70%"
        r="100"
        fill="#A78BFA"
        fillOpacity="0.5"
        className="animate-float-slow"
        filter="url(#glow-strong)"
      />
    </svg>
  </div>
);

export default BackgroundShapes;