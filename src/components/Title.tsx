type TitleProps = {
  /**
   * Element displayed in title.
   */
  children: React.ReactNode,
}

/**
 * Component to display title on page.
 */
export const Title = ({ children }: TitleProps) => <h1>{children}</h1>