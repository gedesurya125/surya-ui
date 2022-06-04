import React from 'react';
import { COLUMN_GAP, COLUMN_AMMOUNT, CONTAINER_WIDTH } from './theme';

// External Components
import { Container, ContainerProps } from 'theme-ui';

/**
 * get column width for each breakpoints
 */
const columnWidths = CONTAINER_WIDTH.map(
  (conWidth, index) => conWidth / COLUMN_AMMOUNT[index] - COLUMN_GAP[index]
);

/**
 * get grid template columns css value for each breakpoints
 */
const gridTemplateColumns = columnWidths.map(
  (colWidth, index) => `repeat(${COLUMN_AMMOUNT[index]}, ${colWidth}rem)`
);

/**
 * get the container width for each breakpoint times and set the units as rem
 */
const width = CONTAINER_WIDTH.map((conWidth) => conWidth + 'rem');

/**
 * Main Components
 */
export const Grid = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <Container
        ref={ref}
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
  }
);
