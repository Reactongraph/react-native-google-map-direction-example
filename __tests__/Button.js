/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import Button from '../src/components/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('button snapshots', () => {
  const snap = renderer.create(
    <Button />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
