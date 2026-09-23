export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="text-sm font-semibold text-red-700">
      {message}
    </p>
  );
}
