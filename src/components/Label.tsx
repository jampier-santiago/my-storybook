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
  /**
   * Color del background
   */
  bgColor?: string;
}

const Label = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps,
  fontColor,
  bgColor = "transparent",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor: bgColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default Label;
