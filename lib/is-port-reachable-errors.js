/**
 * This file is part of node-is-port-reachable
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * Base error for {PortReachable}.
 *
 * @class
 */
class PortReachableError extends Error {

  /**
   * Create a new instance of {PortReachableError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

/**
 * Error thrown when formatting of host or formatting of network port cannot be validated.
 *
 * @class
 */
class PortReachableValidationError extends PortReachableError {

  /**
   * Create a new instance of {PortReachableValidationError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

module.exports = {};
module.exports.PortReachableError = PortReachableError;
module.exports.PortReachableValidationError = PortReachableValidationError;