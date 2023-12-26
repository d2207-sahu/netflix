import { BASE_API_URL, TMDB_API_KEY } from "../config/constants";


const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json',
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

/**
 * @function
 * @constant
 * @param {string} requestType - The type of HTTP request (e.g., "GET", "POST", "DELETE").
 * @param {string} url - The URL endpoint for the API request.
 * @param {object} body - The payload or data to include in the request body (used for POST requests).
 * @param {function} successCallback - A callback function to handle a successful response.
 * @param {function} errorCallback - A callback function to handle errors or unsuccessful API requests.
 * @description
 *   This function makes generic API requests using the fetch API.
 *   It supports various HTTP request types and handles both successful responses and errors.
 *   The provided callbacks allow for custom handling of the response data or errors.
 * @throws {Error} If an unsupported request type is provided.
 */
export async function baseFetchAPI(
  requestType,
  url,
  body,
  successCallback,
  errorCallback,
) {
  try {
    if (requestType === 'POST') {
      headers['Content-Type'] = 'application/json';
    }

    if (requestType === 'GET' || requestType === 'DELETE') {
      delete headers['Content-Type'];
    }

    const fetchOptions = {
      method: requestType,
      headers,
      credentials: 'include', // Equivalent to Axios withCredentials: true
      mode: 'cors',
      // Additional fetch options can be added here
    };

    if (body && requestType !== 'GET') {
      fetchOptions.body = JSON.stringify(body);
    }
    const response = await fetch(BASE_API_URL + url, fetchOptions);

    if (response.ok) {
      const responseData = await response.json();
      successCallback(responseData);
    } else {
      const errorData = await response.json();
      errorHandler(url, errorData, errorCallback);
    }
  } catch (e) {
    errorHandler(url, e, errorCallback);
  }
}

/**
 * @function
 * @param {string} url - The URL where the error occurred.
 * @param {object} error - The error object or response received from the API request.
 * @param {function} errorCallback - A callback function to handle errors or failed API requests.
 * @description
 *   This function is responsible for handling and formatting errors that may occur during API requests.
 *   The provided callbacks allow for custom handling of the error.
 */
const errorHandler = (url, error, errorCallback) => {
  let errorM = '';
  if (error.message) {
    errorM = error.message;
  } else {
    errorM = error;
  }
  errorCallback(errorM);
};
