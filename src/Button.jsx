function Button({ type, children, emoji }) {
  return (
    <>
      <button className={type}>
        <span>{emoji}</span>
        {children}
      </button>
    </>
  );
}

export default Button;
