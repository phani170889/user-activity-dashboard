import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns the
   * response in an `ArrayBuffer`.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
   */
  get(url: string, options?: any) {
    return this.httpClient.get(url, options);
  }

  /**
   * Constructs a `PUT` request that interprets the body as JSON
   * and returns an observable of JavaScript object.
   *
   * @param url The endpoint URL.
   * @param body The resources to add/update.
   * @param options HTTP options
   *
   * @return An `Observable` of the response as a JavaScript object.
   */
  put(url: string, body?: any, options?: any) {
    return this.httpClient.put(url, body, options);
  }

  /**
   * Constructs a DELETE request that interprets the body as an ArrayBuffer and returns the response as an ArrayBuffer.
   * @param url — The endpoint URL.
   * @param options — The HTTP options to send with the request.
   * @return — An Observable of the response body as an ArrayBuffer.
   */
  delete(url: string, body?: any) {
    return this.httpClient.delete(url, body);
  }
}
