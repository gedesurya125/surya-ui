import React from 'react';
import { ThemeConfigContext } from './context/themeConfigContext';

// External Components
import { Box } from 'theme-ui';
import type { BoxProps } from 'theme-ui';

/**
 * Main Components
 */
export interface GridTemplateProps extends BoxProps {
  variant?:
    | 'inside.autoColumns'
    | 'outside.autoColumns'
    | 'inside.templateColumns'
    | 'outside.templateColumns';
}

export const GridTemplate = React.forwardRef<HTMLDivElement, GridTemplateProps>(
  ({ children, variant = 'outside.templateColumns', sx, ...props }, ref) => {
    const ThemeConfig = React.useContext(ThemeConfigContext);

    const [placement, behavior] = variant?.split('.');
    const gridPlacementStyle = {
      mx: placement === 'inside' ? 0 : 'auto',
    };
    const gridBehaviorStyle =
      behavior === 'autoColumns'
        ? {
            gridAutoColumns: ThemeConfig.getColumnWidths(),
            columnGap: ThemeConfig.getColumnGaps(),
          }
        : {
            gridTemplateColumns: ThemeConfig.getGridTemplateColumns(),
            columnGap: ThemeConfig.getColumnGaps(),
            width: ThemeConfig.getContainerWidths(),
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
