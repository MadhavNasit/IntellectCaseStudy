import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const mockColors = {
  primary: '#007BFF',
  secondary: '#FF6347',
  white: '#FFFFFF',
  text: '#000000',
  background: '#F1F1F1',
  card: '#ffffff',
  border: '#e6e4e5',
};

export const mockTranslation = 'IntellectCaseStudy';

export const mockUseTranslation = () => {
  (useTranslation as jest.Mock).mockReturnValue({
    t: jest.fn().mockReturnValue(mockTranslation),
  });
};

export const mockUseTheme = () => {
  (useTheme as jest.Mock).mockReturnValue({ colors: mockColors });
};
