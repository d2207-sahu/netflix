interface Headers {
  [key: string]: string;
}

const headers: Headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  Authorization: 'Bearer ' + process.env['API_KY']
};

/**
 * @function
 * @constant
 * @param {string} requestType - The type of HTTP request (e.g., "GET", "POST", "DELETE").
 * @param {string} url - The URL endpoint for the API request.
 * @param {object} body - The payload or data to include in the request body (used for POST requests).
 * @description
 *   This function makes generic API requests using the fetch API.
 *   It supports various HTTP request types and handles both successful responses and errors.
 *   The provided callbacks allow for custom handling of the response data or errors.
 * @throws {Error} If an unsupported request type is provided.
 */
export async function baseFetchAPI(requestType: string, url: string, body: any) {
  if (requestType === 'POST') {
    headers['Content-Type'] = 'application/json';
  }

  if (requestType === 'GET' || requestType === 'DELETE') {
    if ('Content-Type' in headers) {
      delete headers['Content-Type'];
    }
    delete headers['Content-Type'];
  }

  const fetchOptions: any = {
    method: requestType,
    headers,
    mode: 'cors'
  };

  if (body && requestType !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }
  const response = await fetch(process.env['BASE_API_URL'] + url, fetchOptions);

  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    const errorData = await response.json();
    return errorData;
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
const errorHandler = (url: string, error: any, errorCallback: Function) => {
  let errorM = '';
  if (error.message) {
    errorM = error.message;
  } else {
    errorM = error;
  }
  errorCallback(errorM);
};
