import React, { FC } from 'react';
import { COLUMN_GAP, COLUMN_AMMOUNT, CONTAINER_WIDTH } from './theme';

// External Components
import { Container, ContainerProps } from 'theme-ui';

export interface GridProps extends ContainerProps {}

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
