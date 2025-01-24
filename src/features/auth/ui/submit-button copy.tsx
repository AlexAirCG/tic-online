import { Alert, AlertDescription } from "@/shared/ui/alert";
import React from "react";

export function ErrorMassage({ error }: { error?: string }) {
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return null;
}
