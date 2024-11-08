// components/ui/Layout.tsx
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

// Container
const containerVariants = cva('mx-auto px-4', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    maxWidth: 'lg',
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container: React.FC<ContainerProps> = ({
  maxWidth,
  className,
  ...props
}) => {
  return (
    <div className={containerVariants({ maxWidth, className })} {...props} />
  );
};

// Grid
const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
    },
  },
  defaultVariants: {
    cols: 12,
    gap: 4,
  },
});

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export const Grid: React.FC<GridProps> = ({
  cols,
  gap,
  className,
  ...props
}) => {
  return <div className={gridVariants({ cols, gap, className })} {...props} />;
};

// Flex
const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'nowrap',
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

export const Flex: React.FC<FlexProps> = ({
  direction,
  justify,
  align,
  wrap,
  className,
  ...props
}) => {
  return (
    <div
      className={flexVariants({ direction, justify, align, wrap, className })}
      {...props}
    />
  );
};

// Stack (Vertical)
const vStackVariants = cva('flex flex-col', {
  variants: {
    spacing: {
      0: 'space-y-0',
      1: 'space-y-1',
      2: 'space-y-2',
      4: 'space-y-4',
      6: 'space-y-6',
      8: 'space-y-8',
    },
  },
  defaultVariants: {
    spacing: 4,
  },
});

interface VStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof vStackVariants> {}

export const VStack: React.FC<VStackProps> = ({
  spacing,
  className,
  ...props
}) => {
  return <div className={vStackVariants({ spacing, className })} {...props} />;
};

// Stack (Horizontal)
const hStackVariants = cva('flex flex-row', {
  variants: {
    spacing: {
      0: 'space-x-0',
      1: 'space-x-1',
      2: 'space-x-2',
      4: 'space-x-4',
      6: 'space-x-6',
      8: 'space-x-8',
    },
  },
  defaultVariants: {
    spacing: 4,
  },
});

interface HStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hStackVariants> {}

export const HStack: React.FC<HStackProps> = ({
  spacing,
  className,
  ...props
}) => {
  return <div className={hStackVariants({ spacing, className })} {...props} />;
};
