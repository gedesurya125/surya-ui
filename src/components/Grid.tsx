import React, { FC } from 'react';

// External Components
import { Container, ContainerProps } from 'theme-ui';

// Types import
// import type { BoxProps } from 'theme-ui';

export interface GridProps extends ContainerProps {}

// CONSTANTS
const COLUMN_GAP = [0.7, 0.7, 0.7, 0.7, 0.7, 0.8];

const COLUMN_AMMOUNT = [12, 12, 24, 24, 24, 24];

const CONTAINER_WIDTH = [32, 54, 72, 72, 106, 126]; // in rem

const columnWidths = CONTAINER_WIDTH.map(
  (conWidth, index) => conWidth / COLUMN_AMMOUNT[index] - COLUMN_GAP[index]
);

// Styles
const gridTemplateColumns = columnWidths.map(
  (colWidth, index) => `repeat(${COLUMN_AMMOUNT[index]}, ${colWidth}rem)`
);
const width = CONTAINER_WIDTH.map((conWidth) => conWidth + 'rem');

export const Grid: FC<GridProps> = ({ children, sx, ...props }) => {
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns,
        width,
        justifyContent: 'space-between',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
