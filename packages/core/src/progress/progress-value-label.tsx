import { OverrideComponentProps } from "@kobalte/utils";

import { AsChildProp, Polymorphic } from "../polymorphic/index.jsx";
import { useProgressContext } from "./progress-context.jsx";

export interface ProgressValueLabelProps extends OverrideComponentProps<"div", AsChildProp> {}

/**
 * The accessible label text representing the current value in a human-readable format.
 */
export function ProgressValueLabel(props: ProgressValueLabelProps) {
  const context = useProgressContext();

  return <Polymorphic as="div" children={context.valueLabel()} {...context.dataset()} {...props} />;
}
