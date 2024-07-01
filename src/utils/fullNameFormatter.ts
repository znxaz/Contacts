// to make every first letter of a full name uppercase
export const fullNameFormatter = (Name: string,
): string => {
  const fullName = `${Name}`;
  // Convert the entire string to lowercase
  const lowerCaseText = fullName.toLowerCase().trim();
  // Capitalize the first letter of each word
  return lowerCaseText.replace(/(^\w)|([-\s]\w)/g, (match) =>
    match.toUpperCase()
  );
};
