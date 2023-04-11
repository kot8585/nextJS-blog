import { parseISO, format } from "date-fns";
import React from "react";

type param = {
  dateString: string;
};
export default function Date({ dateString }: param) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
}
