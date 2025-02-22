import { focusWithoutScrolling, OverrideComponentProps } from "@kobalte/utils";
import { splitProps } from "solid-js";

import { MenuContent, MenuContentOptions } from "../menu/index.jsx";
import { useMenuContext } from "../menu/menu-context.jsx";
import { useMenuRootContext } from "../menu/menu-root-context.jsx";
import { InteractOutsideEvent } from "../primitives/index.js";

export interface DropdownMenuContentProps
  extends OverrideComponentProps<"div", MenuContentOptions> {}

/**
 * Contains the content to be rendered when the dropdown menu is open.
 */
export function DropdownMenuContent(props: DropdownMenuContentProps) {
  const rootContext = useMenuRootContext();
  const context = useMenuContext();

  const [local, others] = splitProps(props, ["onCloseAutoFocus", "onInteractOutside"]);

  let hasInteractedOutside = false;

  const onCloseAutoFocus = (e: Event) => {
    local.onCloseAutoFocus?.(e);

    if (!hasInteractedOutside) {
      focusWithoutScrolling(context.triggerRef());
    }

    hasInteractedOutside = false;

    // Always prevent autofocus because we either focus manually or want user agent focus
    e.preventDefault();
  };

  const onInteractOutside = (e: InteractOutsideEvent) => {
    local.onInteractOutside?.(e);

    if (!rootContext.isModal() || e.detail.isContextMenu) {
      hasInteractedOutside = true;
    }
  };

  return (
    <MenuContent
      onCloseAutoFocus={onCloseAutoFocus}
      onInteractOutside={onInteractOutside}
      {...others}
    />
  );
}
