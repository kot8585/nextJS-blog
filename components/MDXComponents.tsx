const Heading2 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return <h2 id={idText}>{children}</h2>;
};

const Heading3 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return <h3 id={idText}>{children}</h3>;
};

const MDXComponents = {
  h2: Heading2,
  h3: Heading3,
};

export default MDXComponents;
