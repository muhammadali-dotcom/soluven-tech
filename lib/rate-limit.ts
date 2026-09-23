// Best-effort in-memory fixed-window limiter. On Vercel each serverless
// instance keeps its own map, so this slows down abuse rather than
// guaranteeing a hard global cap. Swap for @upstash/ratelimit if needed.

type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  if (windows.size > 1000) {
    for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k);
  }

  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  current.count += 1;
  return {
    allowed: current.count <= limit,
    retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
  };
}
