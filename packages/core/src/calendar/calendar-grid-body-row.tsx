import { OverrideComponentProps } from "@kobalte/utils";
import { Accessor, createMemo, Index, JSX, splitProps } from "solid-js";

import { Polymorphic } from "../polymorphic/index.jsx";
import { useCalendarContext } from "./calendar-context.jsx";
import { useCalendarGridContext } from "./calendar-grid-context.jsx";
import { DateValue } from "./types.js";

export interface CalendarGridBodyRowOptions {
  /** The index of the week to render. */
  weekIndex: number;

  /**
   * Render prop used to render each cell of the week row,
   * it receives a date accessor as parameter.
   */
  children: (date: Accessor<DateValue | null>) => JSX.Element;
}

export type CalendarGridBodyRowProps = OverrideComponentProps<"tr", CalendarGridBodyRowOptions>;

/**
 * A calendar grid body row displays a row of calendar cells within a month.
 */
export function CalendarGridBodyRow(props: CalendarGridBodyRowProps) {
  const rootContext = useCalendarContext();
  const context = useCalendarGridContext();

  const [local, others] = splitProps(props, ["weekIndex", "children"]);

  const datesInWeek = createMemo(() => {
    return rootContext.getDatesInWeek(local.weekIndex, context.startDate());
  });

  return (
    <Polymorphic as="tr" {...others}>
      <Index each={datesInWeek()}>{local.children}</Index>
    </Polymorphic>
  );
}
