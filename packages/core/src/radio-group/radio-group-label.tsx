import { OverrideComponentProps } from "@kobalte/utils";

import { FormControlLabel } from "../form-control/index.jsx";
import { AsChildProp } from "../polymorphic/index.jsx";

export interface RadioGroupLabelProps extends OverrideComponentProps<"span", AsChildProp> {}

/**
 * The label that gives the user information on the radio group.
 */
export function RadioGroupLabel(props: RadioGroupLabelProps) {
  return <FormControlLabel as="span" {...(props as any)} />;
}
