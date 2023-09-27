/**
 * This class provides common utility functions
 */
export default class Utils {
  private defaultErrorMessage: string = "Oops something went wrong";

  /**
   * This methord is used to create error objects wich http status codes and status messages
   * @param status Http status code for error
   * @param error Error message
   * @param optionalData Additional data for more actions
   * @returns Objects with error details
   */
  createError(status?: number, error?: string, optionalData?: object | null) {
    return {
      error: error ? error : "Oops thats an error",
      status: Number(status) || 500,
      ...optionalData,
    };
  }

  /**
   * To handle error in .Catch of a promise in simple way customizable error message and code
   * @param status https status code
   * @param errorMessage Error Message
   * @returns a fuction wich throws an expection with createError object with error message and code
   */
  throwCustomError(status: number, errorMessage?: string) {
    return (error: Error) => {
      throw this.createError(status, errorMessage ?? error?.message ?? this.defaultErrorMessage, error);
    };
  }

  /**
   * To handle error in .Catch of a promise in simple way as internal server error
   * @param errorMessage Error message
   * @returns a fuction wich throws an expection with createError object with error message
   */
  throwInternalError(errorMessage?: string) {
    return (error: Error) => {
      throw this.createError(500, errorMessage ?? error?.message ?? this.defaultErrorMessage, error);
    };
  }

  /**
   * This funtions handles and converts normal error to internal server error using throwInternalError.
   * First argumet is promise funcion and rest of arguments are passed to the promise function
   * @param promiseFunction Promise funtctios to be handled
   * @param args Argumients for the promise function
   * @returns Result of promise function
   */
  async handleInteralError<T extends (...args: Parameters<T>) => ReturnType<T>>(
    promiseFunction: T,
    ...args: Parameters<T>
  ) {
    try {
      return await promiseFunction(...args);
    } catch (error) {
      return this.createError(500, error?.message ?? this.defaultErrorMessage, error);
    }
  }

  /**
   * Creates a new random id string
   * @param options Options for creating random id
   * @returns promise with random id generated according to options
   */
  generateRandomId(options?: {
    length?: number;
    withLowerCase?: boolean;
    withNumber?: boolean;
    withUpperCase?: boolean;
    withSpecialChars?: boolean;
  }): string {
    const defaultLength = 22;
    const length = options?.length || defaultLength;

    const possibilities = {
      lowerCased: "abcdefghijklmnopqrstuvwxyz",
      capitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      special: "~!@#$%^&()_+-={}[];',",
    };

    // Storage for setting selected chars from pattern
    let chars = "";

    if (options?.withNumber) chars += possibilities.numbers;
    if (options?.withLowerCase) chars += possibilities.lowerCased;
    if (options?.withUpperCase) chars += possibilities.capitals;
    if (options?.withSpecialChars) chars += possibilities.special;

    // default pattern
    if (chars.length == 0) chars += possibilities.capitals;

    // accumilator for result
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  /**
   * * This function returs a random id when the promise funtion returns nothing or nullishing value.
   * * This is used in creation of unique ids.
   * @param options Options for creating random id
   * @param promiseFunctionWithResults Promise function to be called to return data to generate random id on non existance of response
   * @param argsOfPromiseFunction Arguments for the promise funtions function
   * @returns promise with random id (string) generated according to options
   */
  async generateRandomIdWithExistingValidation<T extends (...args: Parameters<T>) => ReturnType<T>>(
    options: Parameters<typeof this.generateRandomId>[0],
    promiseFunctionWithResults: T,
    ...argsOfPromiseFunction: Parameters<T>
  ): Promise<string> {
    let id: string;
    do {
      id = this.generateRandomId(options);
    } while (await promiseFunctionWithResults(...argsOfPromiseFunction));
    return id;
  }
}
