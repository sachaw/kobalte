import {
  DialogCloseButton as CloseButton,
  type DialogCloseButtonProps,
} from "./dialog-close-button.jsx";
import {
  DialogContent as Content,
  type DialogContentOptions,
  type DialogContentProps,
} from "./dialog-content.jsx";
import {
  DialogDescription as Description,
  type DialogDescriptionProps,
} from "./dialog-description.jsx";
import {
  DialogOverlay as Overlay,
  type DialogOverlayOptions,
  type DialogOverlayProps,
} from "./dialog-overlay.jsx";
import { DialogPortal as Portal, type DialogPortalProps } from "./dialog-portal.jsx";
import {
  DialogRoot as Root,
  type DialogRootOptions,
  type DialogRootProps,
} from "./dialog-root.jsx";
import { DialogTitle as Title, type DialogTitleProps } from "./dialog-title.jsx";
import { DialogTrigger as Trigger, type DialogTriggerProps } from "./dialog-trigger.jsx";

export type {
  DialogCloseButtonProps,
  DialogContentOptions,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayOptions,
  DialogOverlayProps,
  DialogPortalProps,
  DialogRootOptions,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
};

export { CloseButton, Content, Description, Overlay, Portal, Root, Title, Trigger };
