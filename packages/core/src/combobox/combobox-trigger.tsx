/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/ba727bdc0c4a57626131e84d9c9b661d0b65b754/packages/@react-stately/combobox/src/useComboBoxState.ts
 * https://github.com/adobe/react-spectrum/blob/ba727bdc0c4a57626131e84d9c9b661d0b65b754/packages/@react-aria/combobox/src/useComboBox.ts
 */

import { callHandler, mergeDefaultProps, mergeRefs, OverrideComponentProps } from "@kobalte/utils";
import { JSX, splitProps } from "solid-js";

import * as Button from "../button/index.jsx";
import { useFormControlContext } from "../form-control/index.jsx";
import { useComboboxContext } from "./combobox-context.jsx";

export interface ComboboxTriggerProps
  extends OverrideComponentProps<"button", Button.ButtonRootOptions> {}

export function ComboboxTrigger(props: ComboboxTriggerProps) {
  const formControlContext = useFormControlContext();
  const context = useComboboxContext();

  props = mergeDefaultProps(
    {
      id: context.generateId("trigger"),
    },
    props
  );

  const [local, others] = splitProps(props, [
    "ref",
    "disabled",
    "onPointerDown",
    "onClick",
    "aria-labelledby",
  ]);

  const isDisabled = () => {
    return (
      local.disabled ||
      context.isDisabled() ||
      formControlContext.isDisabled() ||
      formControlContext.isReadOnly()
    );
  };

  const onPointerDown: JSX.EventHandlerUnion<HTMLButtonElement, PointerEvent> = e => {
    callHandler(e, local.onPointerDown);

    e.currentTarget.dataset.pointerType = e.pointerType;

    // For consistency with native, open the combobox on mouse down (main button), but touch up.
    if (!isDisabled() && e.pointerType !== "touch" && e.button === 0) {
      // prevent trigger from stealing focus from the active item after opening.
      e.preventDefault();

      context.toggle(false, "manual");
    }
  };

  const onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = e => {
    callHandler(e, local.onClick);

    if (!isDisabled()) {
      if (e.currentTarget.dataset.pointerType === "touch") {
        context.toggle(false, "manual");
      }

      // Focus the input field in case it isn't focused yet.
      context.inputRef()?.focus();
    }
  };

  const ariaLabelledBy = () => {
    return formControlContext.getAriaLabelledBy(
      others.id,
      context.triggerAriaLabel(),
      local["aria-labelledby"]
    );
  };

  return (
    <Button.Root
      ref={mergeRefs(context.setTriggerRef, local.ref)}
      disabled={isDisabled()}
      tabIndex="-1"
      aria-haspopup="listbox"
      aria-expanded={context.isOpen()}
      aria-controls={context.isOpen() ? context.listboxId() : undefined}
      aria-label={context.triggerAriaLabel()}
      aria-labelledby={ariaLabelledBy()}
      onPointerDown={onPointerDown}
      onClick={onClick}
      {...context.dataset()}
      {...others}
    />
  );
}
