/**
 * This file is part of node-is-port-reachable
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should');

const {PortReachable} = require('../lib/is-port-reachable');

describe('Test a valid port of valid host ', () => {
  it('should return a {Promise}', () => {
    return (PortReachable.factory('www.google.com:80').try()).should.be.a.Promise;
  });
  it('should be finally equal to {true}', () => {
    return (PortReachable.factory('www.google.com:80').try()).should.be.finally.equal(true);
  });
});


describe('Test an invalid port of valid host ', () => {
  it('should be rejected', () => {
    return (PortReachable.factory('www.google.com:444').try()).should.be.rejected();
  });
});

