export type APIErrorResponse = {
  timestamp: string;
  trackingId: string;
  statusCode: number;
  status: string;
  code: string;
  message: string[];
};

export class APIError extends Error {
  timestamp: string;
  trackingId: string;
  statusCode: number;
  status: string;
  code: string;

  constructor({
    message,
    statusCode,
    timestamp,
    trackingId,
    status,
    code,
  }: APIErrorResponse) {
    super();
    this.name = '';
    this.message = message.join('\n');
    this.statusCode = statusCode;
    this.code = code;
    this.status = status;
    this.timestamp = timestamp;
    this.trackingId = trackingId;
  }
}
