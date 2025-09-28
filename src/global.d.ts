// src/types/global.d.ts
import type { Row } from "@tanstack/react-table";

declare global {
  type TError = {
    data: {
      message: string;
      stack: string;
      success: boolean;
    };
    status: number;
  };

  type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };

  type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
  };

  type TQueryParam = {
    name: string;
    value: boolean | React.Key;
  };

  interface DataTableRowAction<TData> {
    row: Row<TData>;
    variant: "update" | "delete" | "UPLOAD" | "SELECT" | "SIDEBAR";
  }
}

export {};
