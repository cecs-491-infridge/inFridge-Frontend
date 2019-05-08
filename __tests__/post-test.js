import React from 'react';
import PostForm from '../components/PostForm.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PostForm />).toJSON();
  expect(tree).toMatchSnapshot();

    console.log(tree.validateStatusPost())
});