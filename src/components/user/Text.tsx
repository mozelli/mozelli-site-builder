import { useNode } from "@craftjs/core";

export const Text = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize: string;
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
