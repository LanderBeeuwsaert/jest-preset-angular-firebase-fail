/* eslint-disable */
import { jest, test } from '@jest/globals';

import c from '../__test_modules__/c';
import d from '../__test_modules__/d';
import Unmocked from '../__test_modules__/Unmocked';

// The virtual mock call below will be hoisted above this `require` call.
const virtualModule = require('virtual-module');

// These will all be hoisted above imports
jest.deepUnmock('../__test_modules__/Unmocked');
jest.unmock('../__test_modules__/c').unmock('../__test_modules__/d');

let e: any;
(function () {
  // @ts-expect-error testing purpose
  const _getJestObj = 42;
  e = require('../__test_modules__/e').default;
  // hoisted to the top of the function scope
  jest.unmock('../__test_modules__/e');
})();

jest.mock('virtual-module', () => 'kiwi', { virtual: true });

// These will not be hoisted
jest.unmock('../__test_modules__/a').dontMock('../__test_modules__/b');
jest.unmock('../__test_modules__/' + 'a');
jest.dontMock('../__test_modules__/Mocked');

test('does not throw during transform', () => {
  const object = {};
  // @ts-expect-error
  object.__defineGetter__('foo', () => 'bar');
  // @ts-expect-error
  expect(object.foo).toEqual('bar');
});

test('hoists unmocked modules before imports', () => {
  // @ts-expect-error
  expect(Unmocked._isMockFunction).toBeUndefined();
  expect(new Unmocked().isUnmocked).toEqual(true);

  // @ts-expect-error
  expect(c._isMockFunction).toBeUndefined();
  expect(c()).toEqual('unmocked');

  // @ts-expect-error
  expect(d._isMockFunction).toBeUndefined();
  expect(d()).toEqual('unmocked');

  expect(e._isMock).toBeUndefined();
  expect(e()).toEqual('unmocked');
});

test('requires modules that also call jest.mock', () => {
  require('../__test_modules__/mockFile');
  const mock = require('../__test_modules__/banana');
  expect(mock).toEqual('apple');
});

test('works with virtual modules', () => {
  expect(virtualModule).toBe('kiwi');
});
