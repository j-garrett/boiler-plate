import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Big2AppContainer from '../src/components/Big2App';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(true).to.equal(true);
  });

  // it('contains spec with an expectation', () => {
  //   expect(shallow(<Big2AppContainer />).is('.foo')).to.equal(true);
  // });

  // it('contains spec with an expectation', () => {
  //   expect(mount(<Big2AppContainer />).find('.foo').length).to.equal(1);
  // });
});
