import { render, fireEvent } from '@testing-library/react-native';
import { axiosRegister } from '../../api/userApi';
import RegisterBlind from '../../views/blind/registerBlind';

jest.mock('../../api/userApi');

test('Validation du formulaire et appel de axiosRegister', () => {
  const { getByTestId } = render(<RegisterBlind />);
  
  // Remplir le formulaire avec des valeurs valides
  fireEvent.changeText(getByTestId('gender-input'), 'FEMALE');
  fireEvent.changeText(getByTestId('lastName-input'), 'Doe');
  fireEvent.changeText(getByTestId('firstName-input'), 'John');
  fireEvent.changeText(getByTestId('email-input'), 'john.doe@example.com');
  fireEvent.changeText(getByTestId('phoneNumber-input'), '1234567890');
  fireEvent.changeText(getByTestId('password-input'), 'password');
  fireEvent.changeText(getByTestId('confirmPassword-input'), 'password');
  
  fireEvent.press(getByTestId('inscription-button'));
  
  // Vérifier que la fonction axiosRegister est appelée avec les bonnes données
  expect(axiosRegister).toHaveBeenCalledWith(
    'FEMALE',
    'Doe',
    'John',
    'john.doe@example.com',
    'password',
    true,
    '1234567890',
    navigation
  );
});
