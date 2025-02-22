import { callHandler, EventKey, mergeDefaultProps, OverrideComponentProps } from "@kobalte/utils";
import { JSX, splitProps } from "solid-js";

import { useFormControlContext } from "../form-control/index.jsx";
import { AsChildProp, Polymorphic } from "../polymorphic/index.jsx";
import { useCheckboxContext } from "./checkbox-context.jsx";

export interface CheckboxControlProps extends OverrideComponentProps<"div", AsChildProp> {}

/**
 * The element that visually represents a checkbox.
 */
export function CheckboxControl(props: CheckboxControlProps) {
  const formControlContext = useFormControlContext();
  const context = useCheckboxContext();

  props = mergeDefaultProps(
    {
      id: context.generateId("control"),
    },
    props
  );

  const [local, others] = splitProps(props, ["onClick", "onKeyDown"]);

  const onClick: JSX.EventHandlerUnion<any, MouseEvent> = e => {
    callHandler(e, local.onClick);

    context.toggle();
  };

  const onKeyDown: JSX.EventHandlerUnion<any, KeyboardEvent> = e => {
    callHandler(e, local.onKeyDown);

    if (e.key === EventKey.Space) {
      context.toggle();
    }
  };

  return (
    <Polymorphic
      as="div"
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...formControlContext.dataset()}
      {...context.dataset()}
      {...others}
    />
  );
}
