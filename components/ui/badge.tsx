export const Badge = ({ children, className = '' }) => (
  <span className={`px-2 py-1 text-xs rounded ${className}`}>
    {children}
  </span>
);