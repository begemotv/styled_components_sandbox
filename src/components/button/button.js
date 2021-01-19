import styled, {css} from 'styled-components';

const LargeStyles = ({large}) => {
  if (large) {
    return css`
      padding: 14px;
      font-size: 1.5em;
      border-radius: 6px;
    `;
  } else {
    return css`
      padding: 8px;
      font-size: 1em;
      border-radius: 4px;
    `
  }
}

const Button = styled.button`
  color: white;
  background: ${props => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  ${LargeStyles}  
  box-shadow: none;  
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled{
    background: #eeeeee;
    color: #666;    
  }
`;

export {Button};