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
 * grid column width for auto column styles
 */
const gridAutoColumns = columnWidths.map((colWidth) => colWidth + 'rem');

/**
 * grid column gap for auto column styles
 */
const columnGap = COLUMN_GAP.map(
  (gap, index) =>
    `${(gap * COLUMN_AMMOUNT[index]) / (COLUMN_AMMOUNT[index] - 1)}rem`
);

/**
 * Main Components
 */
export interface GridTemplateProps extends ContainerProps {
  variant?:
    | 'inside.autoColumns'
    | 'outside.autoColumns'
    | 'inside.templateColumns'
    | 'outside.templateColumns';
}

export const GridTemplate = React.forwardRef<HTMLDivElement, GridTemplateProps>(
  ({ children, variant = 'outside.templateColumns', sx, ...props }, ref) => {
    const [placement, behavior] = variant?.split('.');
    console.log('this is behavior', behavior);

    const gridPlacementStyle = {
      mx: placement === 'inside' ? 0 : 'auto',
    };
    const gridBehaviorStyle =
      behavior === 'autoColumns'
        ? {
            gridAutoColumns,
            columnGap,
          }
        : {
            gridTemplateColumns,
            width,
            justifyContent: 'space-between',
          };
    return (
      <Container
        ref={ref}
        sx={{
          display: 'grid',
          ...gridPlacementStyle,
          ...gridBehaviorStyle,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  }
);
