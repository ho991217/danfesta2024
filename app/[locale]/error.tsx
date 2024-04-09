"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@components/common";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center">
      <h2 className="text-xl">에러 발생</h2>
      <span className="text-sm text-neutral-500">{error.message}</span>
      <Button onClick={() => reset()} variant="bottom">
        다시 시도
      </Button>
    </div>
  );
}
