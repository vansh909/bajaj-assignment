// Replace with your actual details
const FULL_NAME = "vansh tomer";
const DOB = "31012004";
const EMAIL = "vansh4857.be22@chitkara.edu.in";
const ROLL_NUMBER = "2210994857";

exports.processData = (req, res) => {
  const { data } = req.body;

  //validating input data
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "data should be an array",
    });
  }
  if (data.length === 0) {
    return res.status(400).json({
      is_success: false,
      message: "data array cannot be empty",
    });
  }

  //output arrays
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];

  let totalSum = 0;
  let collectedAlphabets = "";

  for (let item of data) {
    const str = String(item);

    const num = Number(str);
    // Checking valid integer number
    if (!isNaN(num) && Number.isInteger(num)) {
      totalSum += num;

      // Checking even/odd
      if (num % 2 === 0) {
        even_numbers.push(str);
      } else {
        odd_numbers.push(str);
      }
    } else if (str.length === 1 &&
      ((str >= "A" && str <= "Z") || (str >= "a" && str <= "z"))
    ) {
      alphabets.push(str.toUpperCase());
      collectedAlphabets += str;
    } else {
      special_characters.push(str);
    }
  }

  //Generating reverse + alternating caps string
  let concat_string = "";
  let toggle = true;

  for (let i = collectedAlphabets.length - 1; i >= 0; i--) {
    const char = collectedAlphabets[i];
    concat_string += toggle ? char.toUpperCase() : char.toLowerCase();
    toggle = !toggle;
  }

  const response = {
    is_success: true,
    user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: totalSum.toString(),
    concat_string,
  };

  return res.status(200).json(response);
};
