import "./my-label.css";

export interface Props {
  /**
   * Este es el texto de la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizar toda la palabra
   */
  allCaps?: boolean;
  /**
   * Color de la palabra
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Color custom de la palabra
   */
  fontColor?: string;
}

const Label = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default Label;
