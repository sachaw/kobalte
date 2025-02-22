import { mergeDefaultProps, OverrideComponentProps } from "@kobalte/utils";

import { useFormControlContext } from "../form-control/index.jsx";
import { AsChildProp, Polymorphic } from "../polymorphic/index.jsx";
import { useSwitchContext } from "./switch-context.jsx";

export interface SwitchThumbProps extends OverrideComponentProps<"div", AsChildProp> {}

/**
 * The thumb that is used to visually indicate whether the switch is on or off.
 */
export function SwitchThumb(props: SwitchThumbProps) {
  const formControlContext = useFormControlContext();
  const context = useSwitchContext();

  props = mergeDefaultProps(
    {
      id: context.generateId("thumb"),
    },
    props
  );

  return (
    <Polymorphic as="div" {...formControlContext.dataset()} {...context.dataset()} {...props} />
  );
}
