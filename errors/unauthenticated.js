import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default Unauthenticated;
