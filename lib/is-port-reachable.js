/**
 * This file is part of node-is-port-reachable
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */
const net = require('net');
const Promise = require('bluebird');
const {HostPortEntity} = require('host-port');


const {PortReachableError, PortReachableValidationError} = require('./is-port-reachable-errors');


/**
 * Test if a port of host is reachable.
 *
 * @class
 * @public
 */
class PortReachable {

  /**
   * Create a new instance of {PortReachable}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor(...args) {
    this.hostPort = PortReachable.validateHostPort(...args);
    this._timeout = 1000;
  }

  timeout(value) {
    this._timeout = value;
    return this;
  }

  /**
   * Validate host and port formatting using [node-host-port](https://github.com/9fv/node-host-port) entity.
   *
   * @param args - The arguments.
   * @return {HostPortEntity} The {HostPortEntity} if formatting of host and port is validated.
   * @throws {PortReachableValidationError} On validation error.
   */
  static validateHostPort(...args) {
    try {
      return new HostPortEntity(...args); // @todo: use a factory to create a new instance of {HostPortEntity}.
    } catch (e) {
      throw new PortReachableValidationError(e);
    }
  }

  /**
   * Try to reach the port of host.
   *
   * @return {Promise}
   */
  try() {
    return new Promise((resolve, reject) => {
      const client = new net.createConnection(this.hostPort.port, this.hostPort.host)
        .on('connect', () => {
          client.end();
          resolve(true);
        })
        .on('data', () => {
        })
        .on('error', (err) => {
          client.destroy();
          reject(err);
        })
        .on('disconnect', () => {
        });
    }).timeout(this._timeout);
  }

  /**
   * Factory to create a new instance of {PortReachable}.
   *
   * @param args
   * @return {PortReachable}
   */
  static factory(...args) {
    return new PortReachable(...args);
  }
}

module.exports = {}
module.exports.PortReachable = PortReachable;