// lib/sendResponse.ts
import { NextResponse } from "next/server";

type Meta = {
  page?: number;
  limit?: number;
  total?: number;
};

type JsonData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: Meta;
  data?: T | null;
};

export const sendResponse = <T>(jsonData: JsonData<T>) => {
  return NextResponse.json(
    {
      success: jsonData.success,
      message: jsonData.message,
      meta: jsonData.meta ?? null,
      data: jsonData.data ?? null,
    },
    { status: jsonData.statusCode }
  );
};
