export async function readApiResponse(response) {
  const body = await response.text();

  if (!body) {
    return null;
  }

  try {
    return JSON.parse(body);
  } catch {
    return body;
  }
}

function collectMessages(value) {
  if (typeof value === "string") {
    return value.trim() ? [value.trim()] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectMessages);
  }

  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectMessages);
  }

  return [];
}

export function getApiErrorMessage(data, status) {
  const fieldMessages = collectMessages(data?.errors);
  const messages = fieldMessages.length
    ? fieldMessages
    : [
        ...collectMessages(data?.message),
        ...collectMessages(data?.error),
        ...(typeof data === "string" ? collectMessages(data) : []),
      ];
  const uniqueMessages = [...new Set(messages)];

  return uniqueMessages.length
    ? uniqueMessages.join(" ")
    : `Request failed with status ${status}.`;
}

export function getRequestErrorMessage(error) {
  return error instanceof Error && error.message
    ? error.message
    : "The request could not be completed. Please try again.";
}
