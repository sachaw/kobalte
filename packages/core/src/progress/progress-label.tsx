import { mergeDefaultProps, OverrideComponentProps } from "@kobalte/utils";
import { createEffect, onCleanup, splitProps } from "solid-js";

import { AsChildProp, Polymorphic } from "../polymorphic/index.jsx";
import { useProgressContext } from "./progress-context.jsx";

export interface ProgressLabelProps extends OverrideComponentProps<"span", AsChildProp> {}

/**
 * An accessible label that gives the user information on the progress.
 */
export function ProgressLabel(props: ProgressLabelProps) {
  const context = useProgressContext();

  props = mergeDefaultProps(
    {
      id: context.generateId("label"),
    },
    props
  );

  const [local, others] = splitProps(props, ["id"]);

  createEffect(() => onCleanup(context.registerLabelId(local.id!)));

  return <Polymorphic as="span" id={local.id} {...context.dataset()} {...others} />;
}
