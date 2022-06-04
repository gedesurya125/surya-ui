import React from 'react';
import type { FC } from 'react';

import { Box } from 'theme-ui';
import type { BoxProps } from 'theme-ui';

import ReactDOM from 'react-dom';

export interface OverlayProps extends BoxProps {
  handleCloseOverlay: () => void;
}

export const Overlay: FC<OverlayProps> = ({
  children,
  handleCloseOverlay,
  sx,
  ...props
}) => {
  let portalRoot = document.getElementById('portal');
  if (!portalRoot) {
    const newPortalElement = document.createElement('div');
    newPortalElement.id = 'portal';
    document.body.appendChild(newPortalElement);
    portalRoot = newPortalElement;
  }

  return ReactDOM.createPortal(
    <OverlayContainer
      handleCloseOverlay={handleCloseOverlay}
      sx={sx}
      {...props}
    >
      {children}
    </OverlayContainer>,
    portalRoot
  );
};

const OverlayContainer: FC<OverlayProps> = ({
  children,
  handleCloseOverlay,
  sx,
  ...props
}) => {
  // Stop Parent onClick event propagation to the childrens
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    handleCloseOverlay();
  };

  React.useEffect(() => {
    const onEscPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseOverlay();
      }
    };
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', onEscPressed);

    return () => {
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('keydown', onEscPressed);
    };
  }, [handleCloseOverlay]);

  return (
    <Box
      role="dialog"
      aria-modal="true"
      className="overlay-background"
      onClick={handleBackgroundClick}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bg: 'rgba(0,0,0,0.75)',
        zIndex: 100,
        overflow: 'auto',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
