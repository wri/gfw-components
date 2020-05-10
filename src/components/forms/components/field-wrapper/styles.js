import styled from '@emotion/styled';

export const FieldContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  details {
    cursor: pointer;

    input {
      width: calc(100% - 26px);
    }
  }

  .label {
    text-transform: uppercase;
    font-size: 12px;
    color: #333;
    margin-bottom: 5px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    label {
      margin-right: 10px;
    }

    span {
      text-transform: none;
      color: $error;
      font-size: 12px;
      font-weight: 400;
    }

    .info-button {
      margin-right: 10px;
    }
  }

  .input-field {
    width: 100%;
  }

  input,
  select,
  textarea {
    transition: all 0.1s ease-in-out;
  }

  ${({ error }) =>
    error &&
    `
    input,
    select,
    textarea {
      border-color: #ed1846;
    }
  `}

  ${({ active }) =>
    active &&
    `
    input,
    select,
    textarea {
      border-color: #777;
    }
  `}

  ${({ hidden }) =>
    hidden &&
    `
    display: none;
  `}
`;
