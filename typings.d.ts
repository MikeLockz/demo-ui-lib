declare module "*.json" {
  const value: any;
  export default value;
}
declare module "*.scss" {
  const content: any;
  export default content;
}
declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "rimble-ui" {
  export interface ButtonProps {
    selected?: boolean;
    children?: React.ReactNode;
    [propName: string]: any;
  }
  export declare const Button: (props: ButtonProps) => JSX.Element;
  export default Button;

  export interface BoxProps {
    children?: React.ReactNode;
    maxWidth?: string;
    width?: string;
    height?: string;
    [propName: string]: any;
  }
  export declare const Box: (props: BoxProps) => JSX.Element;
  export default Box;

  export interface FlexProps {
    children?: React.ReactNode;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    height?: string;
    bg?: string;
    justifyContent?: string;
    flex?: string;
    [propName: string]: any;
  }
  export declare const Flex: (props: FlexProps) => JSX.Element;
  export default Flex;

  export interface InputProps {
    children?: React.ReactNode;
    type?: string;
    width?: string;
    [propName: string]: any;
  }
  export declare const Input: (props: InputProps) => JSX.Element;
  export default Input;

  export interface FormProps {
    children?: React.ReactNode;
    [propName: string]: any;
  }
  export declare const Form: (props: FormProps) => JSX.Element;
  export default Form;

  export interface FieldProps {
    children?: React.ReactNode;
    label?: string;
    required?: boolean;
    width?: string;
    [propName: string]: any;
  }
  export declare const Field: (props: FieldProps) => JSX.Element;
  export default Field;

  export interface ButtonProps {
    children?: React.ReactNode;
    width?: string;
    [propName: string]: any;
  }
  export declare const Button: (props: ButtonProps) => JSX.Element;
  export default Button;

  export interface HeadingProps {
    children?: React.ReactNode;
    [propName: string]: any;
  }
  export declare const Heading: (props: HeadingProps) => JSX.Element;
  export default Heading;

  export interface TextProps {
    children?: React.ReactNode;
    [propName: string]: any;
  }
  export declare const Text: (props: TextProps) => JSX.Element;
  export default Text;

  export interface CardProps {
    children?: React.ReactNode;
    maxWidth?: string;
    [propName: string]: any;
  }
  export declare const Card: (props: CardProps) => JSX.Element;
  export default Card;

  export interface LinkProps {
    children?: React.ReactNode;
    [propName: string]: any;
  }
  export declare const Link: (props: LinkProps) => JSX.Element;
  export default Link;

  export interface IconProps {
    name: string;
    [propName: string]: any;
  }
  export declare const Icon: (props: IconProps) => JSX.Element;
  export default Icon;
}
