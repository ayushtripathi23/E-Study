const PhpDescription = {
  language: "PHP",
  description: [
    {
      languageId: 0,

      languageTitle: "Basic PHP Syntax",
      languageBody: [
        "A PHP script can be placed anywhere in the document.",
        "A PHP script starts with <?php and ends with ?>:",
        "The default file extension for PHP files is '.php'.",
        "A PHP file normally contains HTML tags, and some PHP scripting code.",
        "Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function 'echo' to output the text 'Hello World!'' on a web page:"
      ],
    },
    {
      languageId: 0,

      languageTitle: "PHP Case Sensitivity",
      languageBody: [
        "In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.",
        "In the example below, all three echo statements below are equal and legal:",
        "Look at the example below; only the first statement will display the value of the $color variable! This is because $color, $COLOR, and $coLOR are treated as three different variables:.",
      ],
    },
    {
      languageId: 1,

      languageTitle: "Comments in PHP",
      languageBody: [
        "A comment in PHP code is a line that is not executed as a part of the program. Its only purpose is to be read by someone who is looking at the code.",
        "Comments can be used to:",
        "Let others understand your code",
        "Remind yourself of what you did - Most programmers have experienced coming back to their own work a year or two later and having to re-figure out what they did. Comments can remind you of what you were thinking when you wrote the code",
        "PHP supports several ways of commenting:"
      ],
    },
    {
      languageId: 2,

      languageTitle: "Creating (Declaring) PHP Variables",
      languageBody: [
        "In PHP, a variable starts with the $ sign, followed by the name of the variable:",
        "After the execution of the statements above, the variable $txt will hold the value Hello world!, the variable $x will hold the value 5, and the variable $y will hold the value 10.5.",
        "Note: When you assign a text value to a variable, put quotes around the value.",
        "Note: Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it.",
      ],
    },
    {
      languageId: 2,

      languageTitle: "PHP Variables",
      languageBody: [
        "A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).",
        "Rules for PHP variables:",
        "A variable starts with the $ sign, followed by the name of the variable",
        "A variable name must start with a letter or the underscore character",
        "A variable name cannot start with a number",
        "A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )",
        "Variable names are case-sensitive ($age and $AGE are two different variables)"
      ],
    },
    {
      languageId: 2,

      languageTitle: "Output Variables",
      languageBody: [
        "The PHP echo statement is often used to output data to the screen.",
        "The following example will show how to output text and a variable:",
        "The following example will produce the same output as the example above:",
      ],
    },
    {
      languageId: 3,

      languageTitle: "PHP echo and print Statements",
      languageBody: [
        "With PHP, there are two basic ways to get output: echo and print.",
        "In this tutorial we use echo or print in almost every example. So, this chapter contains a little more info about those two output statements.",
        "PHP echo and print Statements",
        "echo and print are more or less the same. They are both used to output data to the screen.",
        "The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.",

      ],
    },
    {
      languageId: 3,

      languageTitle: "The PHP echo Statement",
      languageBody: [
        "The echo statement can be used with or without parentheses: echo or echo().",
        "Display Text",
        "The following example shows how to output text with the echo command (notice that the text can contain HTML markup):",
      ],
    },
    {
      languageId: 4,

      languageTitle: "PHP Data Types",
      languageBody: [
        "Variables can store data of different types, and different data types can do different things.",
        "PHP supports the following data types:",
        "String",
        "Integer",
        "Float (floating point numbers - also called double)",
        "Boolean",
        "Array",
        "Object",
        "Null",
        "A string is a sequence of characters, like 'Hello world!'.",
        "A string can be any text inside quotes. You can use single or double quotes:"
      ],
    },
    {
      languageId: 4,

      languageTitle: "PHP Integer",
      languageBody: [
        "An integer data type is a non-decimal number between -2,147,483,648 and 2,147,483,647.",
        "Rules for integers:",
        "An integer must have at least one digit",
        "An integer must not have a decimal point",
        "An integer can be either positive or negative",
        "Integers can be specified in: decimal (base 10), hexadecimal (base 16), octal (base 8), or binary (base 2) notation"
      ],
    },
    {
      languageId: 4,
      languageTitle: "PHP Float",
      languageBody: [
        "A float (floating point number) is a number with a decimal point or a number in exponential form.",
        "In the following example $x is a float. The PHP var_dump() function returns the data type and value:",

      ],
    },
    {
      languageId: 4,

      languageTitle: "PHP Boolean",
      languageBody: [
        "A Boolean represents two possible states: TRUE or FALSE.",
        "Booleans are often used in conditional testing. You will learn more about conditional testing in a later chapter of this tutorial.",

      ],
    },
    // php string 
    {
      languageId: 5,

      languageTitle: "PHP String Functions",
      languageBody: [
        "In this chapter we will look at some commonly used functions to manipulate strings.",
        "strlen() - Return the Length of a String",
        "The PHP strlen() function returns the length of a string."
      ],
    },
    {
      languageId: 5,

      languageTitle: "strrev() - Reverse a String",
      languageBody: [
        "The PHP strrev() function reverses a string.",
      ],
    },
    {
      languageId: 5,

      languageTitle: "strpos() - Search For a Text Within a String",
      languageBody: [
        "The PHP strpos() function searches for a specific text within a string. If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.",

      ],
    },
    // php numbers 
    {
      languageId: 6,

      languageTitle: "PHP Integers",
      languageBody: [
        "2, 256, -256, 10358, -179567 are all integers.",
        "An integer is a number without any decimal part.",
        "An integer data type is a non-decimal number between -2147483648 and 2147483647 in 32 bit systems, and between -9223372036854775808 and 9223372036854775807 in 64 bit systems. A value greater (or lower) than this, will be stored as float, because it exceeds the limit of an integer.",
        "Note: Another important thing to know is that even if 4 * 2.5 is 10, the result is stored as float, because one of the operands is a float (2.5).",
        "Here are some rules for integers:",
        "An integer must have at least one digit",
        "An integer must NOT have a decimal point",
        "An integer can be either positive or negative",
        "Integers can be specified in three formats: decimal (10-based), hexadecimal (16-based - prefixed with 0x) or octal (8-based - prefixed with 0)",
        "PHP has the following predefined constants for integers:",
        "PHP_INT_MAX - The largest integer supported",
        "PHP_INT_MIN - The smallest integer supported",
        "PHP_INT_SIZE -  The size of an integer in byte",
        "PHP has the following functions to check if the type of a variable is integer:",
        "is_int()",
        "is_integer() - alias of is_int()",
        "is_long() - alias of is_int()"
      ],
    },
    // php math 
    {
      languageId: 7,

      languageTitle: "PHP Math",
      languageBody: [
        "PHP has a set of math functions that allows you to perform mathematical tasks on numbers.",
        "PHP pi() Function",
        "The pi() function returns the value of PI:"
      ],
    },
    {
      languageId: 7,

      languageTitle: "PHP min() and max() Functions",
      languageBody: [
        "The min() and max() functions can be used to find the lowest or highest value in a list of arguments:",

      ],
    },
    {
      languageId: 7,

      languageTitle: "PHP abs() Function",
      languageBody: [
        "The abs() function returns the absolute (positive) value of a number:",

      ],
    },
    {
      languageId: 7,

      languageTitle: "PHP sqrt() Function",
      languageBody: [
        "The sqrt() function returns the square root of a number:",

      ],
    },
    {
      languageId: 7,

      languageTitle: "PHP round() Function",
      languageBody: [
        "The round() function rounds a floating-point number to its nearest integer:",

      ],
    },

    // php const 
    {
      languageId: 8,

      languageTitle: "PHP Constants",
      languageBody: [
        "A constant is an identifier (name) for a simple value. The value cannot be changed during the script.",
        "A valid constant name starts with a letter or underscore (no $ sign before the constant name).",
        "Note: Unlike variables, constants are automatically global across the entire script."

      ],
    },
    {
      languageId: 8,

      languageTitle: "Create a PHP Constant",
      languageBody: [
        "To create a constant, use the define() function.",
        "Syntax",
        "Parameters",
        "name: Specifies the name of the constant",
        "value: Specifies the value of the constant",
        "case-insensitive: Specifies whether the constant name should be case-insensitive. Default is false"

      ],
    },
    {
      languageId: 8,

      languageTitle: "Constants are Global",
      languageBody: [
        "Constants are automatically global and can be used across the entire script.",
      ],
    },
    // php operators
    {
      languageId: 9,

      languageTitle: "PHP Operators",
      languageBody: [
        "Operators are used to perform operations on variables and values.",
        "PHP divides the operators in the following groups:",
        "Arithmetic operators",
        "Assignment operators",
        "Comparison operators",
        "Increment/Decrement operators",
        "Logical operators",
        "String operators",
        "Array operators",
        "Conditional assignment operators"
      ],
    },
    // php if else
    {
      languageId: 10,

      languageTitle: "PHP Conditional Statements",
      languageBody: [
        "Very often when you write code, you want to perform different actions for different conditions. You can use conditional statements in your code to do this.",
        "if statement - executes some code if one condition is true",
        "if...else statement - executes some code if a condition is true and another code if that condition is false",
        "if...elseif...else statement - executes different codes for more than two conditions",
        "switch statement - selects one of many blocks of code to be executed",
        "The if statement executes some code if one condition is true.",

      ],
    },
    {
      languageId: 10,

      languageTitle: "PHP - The if...else Statement",
      languageBody: [
        "The if...else statement executes some code if a condition is true and another code if that condition is false.",


      ],
    },
    {
      languageId: 10,

      languageTitle: "PHP - The if...elseif...else Statement",
      languageBody: [
        "The if...elseif...else statement executes different codes for more than two conditions.",
      ],
    },
    {
      languageId: 11,

      languageTitle: "The PHP switch Statement",
      languageBody: [
        "Use the switch statement to select one of many blocks of code to be executed.",
        "This is how it works: First we have a single expression n (most often a variable), that is evaluated once. The value of the expression is then compared with the values for each case in the structure. If there is a match, the block of code associated with that case is executed. Use break to prevent the code from running into the next case automatically. The default statement is used if no match is found."
      ],
    },
    {
      languageId: 12,

      languageTitle: "PHP Loops",
      languageBody: [
        "Often when you write code, you want the same block of code to run over and over again a certain number of times. So, instead of adding several almost equal code-lines in a script, we can use loops.",
        "Loops are used to execute the same block of code again and again, as long as a certain condition is true.",
        "In PHP, we have the following loop types:",
        "while - loops through a block of code as long as the specified condition is true",
        "do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true",
        "for - loops through a block of code a specified number of times",
        "foreach - loops through a block of code for each element in an array",
        "The following chapters will explain and give examples of each loop type."
      ],
    },
    {
      languageId: 13,

      languageTitle: "PHP User Defined Functions",
      languageBody: [
        "Besides the built-in PHP functions, it is possible to create your own functions.",
        "A function is a block of statements that can be used repeatedly in a program.",
        "A function will not execute automatically when a page loads.",
        "A function will be executed by a call to the function.",
        "Create a User Defined Function in PHP",
        "A user-defined function declaration starts with the word function:"
      ],
    },
    {
      languageId: 13,

      languageTitle: "PHP Function Arguments",
      languageBody: [
        "Information can be passed to functions through arguments. An argument is just like a variable.",
        "Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.",
        "The following example has a function with one argument ($fname). When the familyName() function is called, we also pass along a name (e.g. Jani), and the name is used inside the function, which outputs several different first names, but an equal last name:",
        "The following example has a function with two arguments ($fname and $year):",

      ],
    },
    // array
    {
      languageId: 14,

      languageTitle: "What is an Array?",
      languageBody: [
        "An array is a special variable, which can hold more than one value at a time.",
        "If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:",
        "However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?",
        "The solution is to create an array!",
        "An array can hold many values under a single name, and you can access the values by referring to an index number.",

      ],
    },
    {
      languageId: 14,

      languageTitle: "Create an Array in PHP",
      languageBody: [
        "In PHP, the array() function is used to create an array:",
        "In PHP, there are three types of arrays:",
        "Indexed arrays - Arrays with a numeric index",
        "Associative arrays - Arrays with named keys",
        "Multidimensional arrays - Arrays containing one or more arrays",

      ],
    },
    {
      languageId: 14,

      languageTitle: "Get The Length of an Array - The count()",
      languageBody: [
        "The count() function is used to return the length (the number of elements) of an array:",
      ],
    },
  ],
};
export default PhpDescription;
