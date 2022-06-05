import React from 'react';
import { COLUMN_GAP, COLUMN_AMMOUNT, CONTAINER_WIDTH } from './theme';
import { useThemeUI } from 'theme-ui';

// External Components
import { Box, ContainerProps } from 'theme-ui';

/**
 * get column width for each breakpoints
 */
const columnWidths = CONTAINER_WIDTH.map(
  (conWidth, index) =>
    (conWidth - (COLUMN_AMMOUNT[index] - 1) * COLUMN_GAP[index]) /
      COLUMN_AMMOUNT[index] +
    'rem'
);

/**
 * get grid template columns css value for each breakpoints
 */
const gridTemplateColumns = COLUMN_AMMOUNT.map(
  (colAmmount) => `repeat(${colAmmount}, 1fr)`
);

/**
 * get the container width for each breakpoint times and set the units as rem
 */
const width = CONTAINER_WIDTH.map((conWidth) => conWidth + 'rem');

/**
 * grid column width for auto column styles
 */
const gridAutoColumns = columnWidths;

/**
 * grid column gap for auto column styles
 */
const columnGap = COLUMN_GAP.map((gap) => gap + 'rem');

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
    const { theme } = useThemeUI();
    console.log('this is theme context', theme);

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
            columnGap,
            width,
          };
    return (
      <Box
        ref={ref}
        sx={{
          ...sx,
          display: 'grid',
          ...gridPlacementStyle,
          ...gridBehaviorStyle,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
