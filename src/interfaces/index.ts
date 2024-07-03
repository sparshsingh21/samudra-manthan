import * as React from "react";

type voidFn = () => void;

export interface ButtonProps {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  isShadow?: boolean;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  onClick: voidFn;
  isDisabled?: boolean;
  paddingY?: string | number;
  paddingX?: string | number;
  icon?: React.ReactElement;
  borderRadius?: string;
  id?: String;
  bgColor?: string;
}

export interface InputProps {
  question: string;
  warning?: string;
}

export interface BasicModalProps {
  title: string;
  onClose: voidFn;
  isOpen: boolean;
  body: string;
  secondaryActionLabel?: string;
  secondaryActionFn?: voidFn;
}

export interface TestimonialProps {
  id: string;
  description: string;
  name: string;
  image?: string;
}

export interface AgentProps {
  id: string;
  name: string;
  expertise: string;
  description: string;
  image?: string;
}
