import { BACKEND_API_URL } from '../config/constants';

const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Credentials': 'include'
};

/**
 * @function
 * @constant
 * @param {string} requestType - The type of HTTP request (e.g., "GET", "POST", "DELETE").
 * @param {string} url - The URL endpoint for the API request.
 * @param {object} body - The payload or data to include in the request body (used for POST requests).
 * @param {function} successCallback - A callback function to handle a successful response.
 * @param {function} finalCallback - A callback function to handle errors or unsuccessful API requests.
 * @description
 *   This function makes generic API requests using the fetch API.
 *   It supports various HTTP request types and handles both successful responses and errors.
 *   The provided callbacks allow for custom handling of the response data or errors.
 * @throws {Error} If an unsupported request type is provided.
 */
export async function basePublicFetchAPI(requestType, url, body, successCallback, showBoundary) {
  try {
    if (requestType === 'POST') {
      headers['Content-Type'] = 'application/json';
    }

    const fetchOptions = {
      method: requestType
    };

    if (body && requestType !== 'GET') {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(BACKEND_API_URL + url, fetchOptions);
    if (response.ok) {
      const responseData = await response.json();
      return successCallback(responseData);
    } else {
      const errorData = await response.json();
      console.error(errorData);
      showBoundary('Server Error Happened while trying to fetch data: ' + url);
      return;
    }
  } catch (e) {
    console.error(e);
    showBoundary('Internal Error Happened while trying to fetch data: ' + url);
    return;
  }
}
