import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Highlighter from '../src/index';

const stories = storiesOf('Highlighter', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <Highlighter
    text={text('text', 'Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching.')}
    highlightText={text('highlightText', "like")}
  />
));
