export class IframeController {
  private iframe: HTMLIFrameElement;

  constructor(private container: HTMLElement, private url: string) {
    this.iframe = document.createElement('iframe');
    this.iframe.src = this.url;
    this.iframe.style.width = '100%';
    this.iframe.style.height = '100%';
    this.container.appendChild(this.iframe);
  }

  public setUrl(url: string): void {
    this.url = url;
    if (this.iframe) {
      this.iframe.src = this.url;
    }
  }

  public destroy(): void {
    if (this.container && this.iframe) {
      this.container.removeChild(this.iframe);
    }
  }

  public sendMessage(message: string): void {
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(message, this.url);
    }
  }
}
