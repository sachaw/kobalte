import {
  ComboboxContent as Content,
  type ComboboxContentOptions,
  type ComboboxContentProps,
} from "../combobox/combobox-content.jsx";
import { ComboboxInput as Input, type ComboboxInputProps } from "../combobox/combobox-input.jsx";
import {
  ComboboxListbox as Listbox,
  type ComboboxListboxOptions,
  type ComboboxListboxProps,
} from "../combobox/combobox-listbox.jsx";
import {
  ComboboxPortal as Portal,
  type ComboboxPortalProps,
} from "../combobox/combobox-portal.jsx";
import {
  FormControlDescription as Description,
  type FormControlDescriptionProps as ComboboxDescriptionProps,
  FormControlErrorMessage as ErrorMessage,
  type FormControlErrorMessageOptions as ComboboxErrorMessageOptions,
  type FormControlErrorMessageProps as ComboboxErrorMessageProps,
  FormControlLabel as Label,
  type FormControlLabelProps as ComboboxLabelProps,
} from "../form-control/index.jsx";
import {
  Item,
  ItemDescription,
  ItemIndicator,
  ItemLabel,
  type ListboxItemDescriptionProps as ComboboxItemDescriptionProps,
  type ListboxItemIndicatorOptions as ComboboxItemIndicatorOptions,
  type ListboxItemIndicatorProps as ComboboxItemIndicatorProps,
  type ListboxItemLabelProps as ComboboxItemLabelProps,
  type ListboxItemOptions as ComboboxItemOptions,
  type ListboxItemProps as ComboboxItemProps,
  type ListboxSectionProps as ComboboxSectionProps,
  Section,
} from "../listbox/index.jsx";
import {
  PopperArrow as Arrow,
  type PopperArrowOptions as ComboboxArrowOptions,
  type PopperArrowProps as ComboboxArrowProps,
} from "../popper/index.jsx";
import {
  type ComboboxBaseItemComponentProps as ComboboxRootItemComponentProps,
  type ComboboxBaseSectionComponentProps as ComboboxRootSectionComponentProps,
} from "./combobox-base.jsx";
import {
  ComboboxControl as Control,
  type ComboboxControlOptions,
  type ComboboxControlProps,
} from "./combobox-control.jsx";
import {
  ComboboxHiddenSelect as HiddenSelect,
  type ComboboxHiddenSelectProps,
} from "./combobox-hidden-select.jsx";
import { ComboboxIcon as Icon, type ComboboxIconProps } from "./combobox-icon.jsx";
import {
  type ComboboxMultipleSelectionOptions,
  ComboboxRoot as Root,
  type ComboboxRootOptions,
  type ComboboxRootProps,
  type ComboboxSingleSelectionOptions,
} from "./combobox-root.jsx";
import { ComboboxTrigger as Trigger, type ComboboxTriggerProps } from "./combobox-trigger.jsx";
import { type ComboboxTriggerMode } from "./types.js";

export type {
  ComboboxArrowOptions,
  ComboboxArrowProps,
  ComboboxContentOptions,
  ComboboxContentProps,
  ComboboxControlOptions,
  ComboboxControlProps,
  ComboboxDescriptionProps,
  ComboboxErrorMessageOptions,
  ComboboxErrorMessageProps,
  ComboboxHiddenSelectProps,
  ComboboxIconProps,
  ComboboxInputProps,
  ComboboxItemDescriptionProps,
  ComboboxItemIndicatorOptions,
  ComboboxItemIndicatorProps,
  ComboboxItemLabelProps,
  ComboboxItemOptions,
  ComboboxItemProps,
  ComboboxLabelProps,
  ComboboxListboxOptions,
  ComboboxListboxProps,
  ComboboxMultipleSelectionOptions,
  ComboboxPortalProps,
  ComboboxRootItemComponentProps,
  ComboboxRootOptions,
  ComboboxRootProps,
  ComboboxRootSectionComponentProps,
  ComboboxSectionProps,
  ComboboxSingleSelectionOptions,
  ComboboxTriggerMode,
  ComboboxTriggerProps,
};

export {
  Arrow,
  Content,
  Control,
  Description,
  ErrorMessage,
  HiddenSelect,
  Icon,
  Input,
  Item,
  ItemDescription,
  ItemIndicator,
  ItemLabel,
  Label,
  Listbox,
  Portal,
  Root,
  Section,
  Trigger,
};
