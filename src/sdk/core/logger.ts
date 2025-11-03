export class Logger {
  private debug: boolean;

  constructor(debug: boolean) {
    this.debug = debug;
  }

  logRequest(method: string, url: string, headers: Record<string, string>, body?: any) {
    if (!this.debug) return;

    console.group(`🚀 TMF SDK Request: ${method} ${url}`);
    console.log('Headers:', headers);
    if (body) console.log('Body:', body);
    console.groupEnd();
  }

  logResponse(status: number, body: string) {
    if (!this.debug) return;

    console.group(`✅ TMF SDK Response: ${status}`);
    console.log('Body:', body);
    console.groupEnd();
  }

  logError(error: any) {
    if (!this.debug) return;

    console.group('❌ TMF SDK Error');
    console.error(error);
    console.groupEnd();
  }
}
