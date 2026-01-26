export async function captureEmail(email: string, source: string): Promise<void> {
  fetch('/api/capture.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source })
  }).catch(() => {});
}

export function openWithEmail(
  email: string,
  url: string,
  emailRef: React.RefObject<HTMLInputElement | null>,
  eventId?: string,
  source?: string
): void {
  if (!emailRef?.current?.reportValidity() || !email) return;

  captureEmail(email, source || '');

  const params = new URLSearchParams({ email });
  if (eventId) params.set('event', eventId);

  window.open(`${url}?${params.toString()}`, '_blank');
}
