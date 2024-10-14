// components/ui/Typography.tsx
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const headingVariants = cva('font-bold leading-tight', {
  variants: {
    size: {
      h1: 'text-4xl md:text-5xl lg:text-6xl',
      h2: 'text-3xl md:text-4xl lg:text-5xl',
      h3: 'text-2xl md:text-3xl lg:text-4xl',
      h4: 'text-xl md:text-2xl lg:text-3xl',
      h5: 'text-lg md:text-xl lg:text-2xl',
      h6: 'text-base md:text-lg lg:text-xl',
    },
  },
  defaultVariants: {
    size: 'h1',
  },
});

const paragraphVariants = cva('leading-relaxed', {
  variants: {
    size: {
      small: 'text-sm',
      base: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

const textVariants = cva('', {
  variants: {
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
  },
  defaultVariants: {
    weight: 'normal',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h1',
  size,
  className,
  ...props
}) => {
  return (
    <Component className={headingVariants({ size, className })} {...props} />
  );
};

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  className,
  ...props
}) => {
  return <p className={paragraphVariants({ size, className })} {...props} />;
};

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {}

export const Text: React.FC<TextProps> = ({
  weight,
  italic,
  underline,
  className,
  ...props
}) => {
  return (
    <span
      className={textVariants({ weight, italic, underline, className })}
      {...props}
    />
  );
};

// Convenience components for headings
export const H1: React.FC<HeadingProps> = (props) => (
  <Heading as="h1" size="h1" {...props} />
);
export const H2: React.FC<HeadingProps> = (props) => (
  <Heading as="h2" size="h2" {...props} />
);
export const H3: React.FC<HeadingProps> = (props) => (
  <Heading as="h3" size="h3" {...props} />
);
export const H4: React.FC<HeadingProps> = (props) => (
  <Heading as="h4" size="h4" {...props} />
);
export const H5: React.FC<HeadingProps> = (props) => (
  <Heading as="h5" size="h5" {...props} />
);
export const H6: React.FC<HeadingProps> = (props) => (
  <Heading as="h6" size="h6" {...props} />
);
