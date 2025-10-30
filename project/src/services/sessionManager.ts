const SESSION_KEY = 'pragzyy_session_token';

export function getSessionToken(): string {
  let token = localStorage.getItem(SESSION_KEY);

  if (!token) {
    token = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(SESSION_KEY, token);
  }

  return token;
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}
