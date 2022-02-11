/// <reference types="react" />
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
export declare const Label: ({ label, size, color, allCaps, fontColor, bgColor, }: Props) => JSX.Element;
