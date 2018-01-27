/**
 * @author Alfredo Gomez
 */

import React from 'react';
import { render } from 'react-dom';
import Hola from './Hola';
import Adios from './Adios';

render(<Hola />, document.getElementById('root'));
render(<Adios />, document.getElementById('some'));