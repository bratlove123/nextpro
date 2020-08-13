import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
  it('should have HomePage component', () => {
    const subject = mount(<Index />);

    expect(subject.find('HomePage')).toHaveLength(1);
  });
});
