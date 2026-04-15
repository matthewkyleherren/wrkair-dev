"use client";

import styles from "./Button.module.css";

type ButtonVariant = "filled" | "outlined" | "filledTransparent" | "outlinedTransparent";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonElementProps extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface AnchorElementProps extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonElementProps | AnchorElementProps;

const variantMap: Record<ButtonVariant, string> = {
  filled: styles.filled,
  outlined: styles.outlined,
  filledTransparent: styles.filledTransparent,
  outlinedTransparent: styles.outlinedTransparent,
};

export default function Button(props: ButtonProps) {
  const { children, variant = "filled", className } = props;
  const cls = [styles.button, variantMap[variant], className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className={styles.inner}>{children}</span>
      <span className={styles.outer}>{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <a className={cls} href={href} target={target} rel={rel}>
        {inner}
      </a>
    );
  }

  const { onClick, type = "button" } = props as ButtonElementProps;
  return (
    <button className={cls} onClick={onClick} type={type}>
      {inner}
    </button>
  );
}
