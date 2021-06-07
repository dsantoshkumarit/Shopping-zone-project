export default function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    //The req was made and the server responded with a status code that is not in the range of 2XX
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //The req was made, but no response was received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    //something else happened in making req that triggered an error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }
  displayError(errorMsg);
}
