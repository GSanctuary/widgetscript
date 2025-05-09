// Overall Widget Tag

export type Widget = {
  id: string;
  metadata: WidgetMetadata;
  children: WidgetChildren[];
};

type WidgetChildren = WidgetScript | WidgetCompoenent | Widget;

// Metadata

type WidgetMetadataChildren = WidgetDescription;

export type WidgetMetadata = {
  nameTag: WidgetName[];
  children: WidgetMetadataChildren;
};

export type WidgetName = {
  locale?: string;
  name: string;
};

export type WidgetDescription = {
  locale?: string;
  description: string;
};

// Elements

type WidgetCompoenent = WidgetPanel | WidgetButton | WidgetText;

export type WidgetPanel = {
  width?: number;
  height?: number;
  backgroundColor?: number;
  id?: string;
  children: WidgetCompoenent[];
};

export type WidgetButton = {
  width?: number;
  height?: number;
  backgroundColor?: number;
  id?: string;
  onClick?: string;
  text: WidgetText;
};

type WidgetTextHorizontalDirection = 'l2r' | 'r2l';
type WidgetTextVerticalDirection = 't2b' | 'b2t';

export type WidgetText = {
  textSize: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  horizontalDirection?: WidgetTextHorizontalDirection;
  verticalDirection?: WidgetTextVerticalDirection;
  prioritizeVertical?: boolean;
  font: string;
  value: string;
};

// Scripting

export type WidgetScript = {
  start?: WidgetFunction;
  functions: Record<string, WidgetFunction>;
};

export type WidgetFunction = {
  id: string;
  public?: boolean;
  commands: WidgetScriptCommand[];
};

type WidgetScriptCommand =
  | WidgetScriptConditionalBranch
  | WidgetScriptFunctionCall
  | WidgetScriptVariableSet
  | WidgetScriptAttributeSet
  | WidgetScriptAttributeGet
  | WidgetScriptLog;

type WidgetScriptConditional = {
  condition: string;
  commands: WidgetScriptCommand[];
};

export type WidgetScriptConditionalBranch = {
  if: WidgetScriptConditional;
  elseif?: WidgetScriptConditional[];
  else?: WidgetScriptConditional;
};

export type WidgetScriptFunctionCall = {
  id: string;
};

type WidgetScriptType = 'string' | 'int' | 'float' | 'boolean';

export type WidgetScriptVariableSet = {
  name: string;
  type: WidgetScriptType;
  value: string;
};

export type WidgetScriptAttributeSet = {
  target: string;
  attribute: string;
  value: string;
};

export type WidgetScriptAttributeGet = {
  target: string;
  attribute: string;
  variable: string;
};

type WidgetScriptLogType = 'error' | 'info' | 'warn';

export type WidgetScriptLog = {
  output: string;
  type: WidgetScriptLogType;
};
