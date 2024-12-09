import React from 'react';

interface IconWrapperProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className, ...props }) => {
  return <Icon className={className} {...props} />;
};

export default IconWrapper;
