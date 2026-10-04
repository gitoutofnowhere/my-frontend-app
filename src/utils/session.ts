function getOrCreateSessionId(): string {
  let sessionId = localStorage.getItem('rightcard_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID(); // tự sinh mã ngẫu nhiên
    localStorage.setItem('rightcard_session_id', sessionId);
  }
  return sessionId;
}
