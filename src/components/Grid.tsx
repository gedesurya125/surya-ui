import React, { FC } from 'react';

// External Components
import { Container, ContainerProps } from 'theme-ui';

// Types import
// import type { BoxProps } from 'theme-ui';

export interface GridProps extends ContainerProps {}

export const Grid: FC<GridProps> = ({ children, sx, ...props }) => {
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: [
          'repeat(12, 1fr)',
          'repeat(12, 1fr)',
          'repeat(24, 1fr)',
          'repeat(24, 1fr)',
          'repeat(24, 1fr)',
          'repeat(24, 1fr)',
        ],
        width: ['34rem', '58rem', '76rem', '76rem', '110rem', '130rem'],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
