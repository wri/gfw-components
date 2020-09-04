export const globalStringReplace = (string, params) => {
  let parsedString = string;

  Object.keys(params).forEach((key) => {
    const regex = new RegExp(`{{ ${key} }}`, 'g');
    parsedString = parsedString.replace(regex, params[key]);
  });

  return parsedString;
};
