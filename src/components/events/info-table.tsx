import type { ReactNode } from "react";

type InfoTableProps = {
  className?: string;
  rows: ReactNode[][];
  firstColumnClassName?: string;
};

export function InfoTable({
  className,
  rows,
  firstColumnClassName = "w-fit align-top font-medium",
}: InfoTableProps) {
  if (rows.length === 0) return null;

  return (
    <table className={className}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={`row-${rowIndex}`}
            // Striped rows
            className={rowIndex % 2 !== 0 ? "bg-muted" : "bg-transparent"}
          >
            {row.map((cell, cellIndex) => (
              <td
                key={`cell-${cellIndex}`}
                className={`p-2 ${cellIndex === 0 ? firstColumnClassName : ""}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
