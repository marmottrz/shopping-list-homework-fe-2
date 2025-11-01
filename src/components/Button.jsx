export default function Button({
  children,
  variant = "dark",
  className = "",
  ...props
}) {
  const cls = ["btn", variant, className].filter(Boolean).join(" ");
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
