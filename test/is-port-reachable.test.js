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

describe('', () => {

  it('', () => {
    return (PortReachable.factory('www.google.com:80').try()).should.be.a.Promise;
  });

  it('', () => {
    return (PortReachable.factory('www.google.com:80').try()).should.be.finally.equal(true);
  });

  it('', () => {
    return (PortReachable.factory('www.google.com:444').try()).should.be.rejected();
  }).timeout(5000);


});
