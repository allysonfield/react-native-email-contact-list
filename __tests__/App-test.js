import React from 'react';
import '@testing-library/jest-native/extend-expect';


import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Home from '../src/pages/home';




describe('Contact list', () => {
    it('Should be able to add a new contact', async () => {
        const {getByTestId, getByText, getAllByTestId, queryByText} = render(<Home />);
        fireEvent.press(
            getByText('NEW CONTACT')
        );
        fireEvent.changeText(getByTestId('name'), 'John Doe');
        fireEvent.changeText(getByTestId('email'), 'johndoe@gmail.com');
        fireEvent.press(getByText('SAVE'));
        
        await waitFor(() => {
          const list = getByTestId('list');
          expect(list).toContainElement(getByText('johndoe@gmail.com'))
        });
       
    });

    


});

