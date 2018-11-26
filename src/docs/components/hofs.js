export function withLead(Component, lead) {
  return ({ children }) => (
    <Component lead={lead}>
      {children}
    </Component>
  );
}
