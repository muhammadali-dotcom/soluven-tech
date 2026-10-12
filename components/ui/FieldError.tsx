export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="text-sm font-semibold text-[var(--color-error)]">
      {message}
    </p>
  );
}
