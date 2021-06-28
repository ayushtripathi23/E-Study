const JavaScriptDescription = {
  language: "JAVASCRIPT",
  description: [
    {
      languageId: 0,

      languageTitle: "JavaScript Literals",
      languageBody: [
        "The two most important syntax rules for fixed values are:",
        "1. Numbers are written with or without decimals:",
        "2. Strings are text, written within double or single quotes:",
      ],
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Variables",
      languageBody: [
        "In a programming language, variables are used to store data values.",
        "JavaScript uses the keywords var, let and const to declare variables.",
        "An equal sign is used to assign values to variables.",
        "In this example, x is defined as a variable. Then, x is assigned (given) the value 6:",
      ],
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Operators",
      languageBody: [
        "JavaScript uses arithmetic operators ( + - * / ) to compute values:",
        "JavaScript uses an assignment operator ( = ) to assign values to variables:",
      ],
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Expressions",
      languageBody: [
        "An expression is a combination of values, variables, and operators, which computes to a value.",
        "The computation is called an evaluation.",
        "For example, 5 * 10 evaluates to 50:",
        "Expressions can also contain variable values:",
        "The values can be of various types, such as numbers and strings.",
      ],
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Keywords",
      languageBody: [
        "JavaScript keywords are used to identify actions to be performed.",
        "The let keyword tells the browser to create variables:",
        "The var keyword also tells the browser to create variables:",
      ],
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Comments",
      languageBody: [
        "Not all JavaScript statements are 'executed'.",
        "Code after double slashes // or between /* and */ is treated as a comment.",
        "Comments are ignored, and will not be executed:",
      ],
    },
    {
      languageId: 1,

      languageTitle: "Single Line Comments",
      languageBody: [
        "Single line comments start with //.",
        "Any text between // and the end of the line will be ignored by JavaScript (will not be executed).",
        "This example uses a single-line comment before each code line:",
        "This example uses a single line comment at the end of each line to explain the code:",
      ],
    },
    {
      languageId: 1,

      languageTitle: "Multi-line Comments",
      languageBody: [
        "Multi-line comments start with /* and end with */.",
        "Any text between /* and */ will be ignored by JavaScript.",
        "This example uses a multi-line comment (a comment block) to explain the code:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Variables",
      languageBody: [
        "Variables are containers for storing data (values).",
        "In this example, x, y, and z, are variables, declared with the var keyword:",
        "From the example above, you can expect:",
        "x stores the value 5",
        "y stores the value 6",
        "z stores the value 11",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Much Like Algebra",
      languageBody: [
        "In this example, price1, price2, and total, are variables:",
        "In programming, just like in algebra, we use variables (like price1) to hold values.",
        "In programming, just like in algebra, we use variables in expressions (total = price1 + price2).",
        "From the example above, you can calculate the total to be 11.",
      ],
    },
    {
      languageId: 3,

      languageTitle: "Cannot be Redeclared",
      languageBody: [
        "Variables defined with let cannot be redeclared.",
        "You cannot accidentally redeclare a variable.",
        "In programming, just like in algebra, we use variables in expressions (total = price1 + price2).",
        "From the example above, you can calculate the total to be 11.",
      ],
    },
    {
      languageId: 3,

      languageTitle: "Block Scope",
      languageBody: [
        "Before ES6 (2015), JavaScript had only Global Scope and Function Scope.",
        "ES6 introduced two important new JavaScript keywords: let and const.",
        "These two keywords provide Block Scope in JavaScript.",
        "Variables declared inside a { } block cannot be accessed from outside the block:",
        "Variables declared with the var keyword can NOT have block scope.",
        "Variables declared inside a { } block can be accessed from outside the block."
      ],
    },
    {
      languageId: 3,

      languageTitle: "Redeclaring Variables",
      languageBody: [
        "Redeclaring a variable using the var keyword can impose problems.",
        "Redeclaring a variable inside a block will also redeclare the variable outside the block:",
        "Redeclaring a variable using the let keyword can solve this problem.",
        "Redeclaring a variable inside a block will not redeclare the variable outside the block:",
      ],
    },
    // javascript const 
    {
      languageId: 4,

      languageTitle: "Must be Assigned",
      languageBody: [
        "JavaScript const variables must be assigned a value when they are declared:",

      ],
    },
    {
      languageId: 4,

      languageTitle: "Constant Objects and Arrays",
      languageBody: [
        "The keyword const is a little misleading.",
        "It does not define a constant value. It defines a constant reference to a value.",
        "Because of this you can NOT:",
        "Reassign a constant value",
        "Reassign a constant array",
        "Reassign a constant object",
        "But you CAN:",
        "Change a constant array",
        "Change a constant object",
        "You can change the elements of a constant array:"

      ],
    },
    {
      languageId: 4,

      languageTitle: "Constant Objects",
      languageBody: [
        "You can change the properties of a constant object:",
        "But you can NOT reassign the object:",
      ],
    },
    // javascript operators 
    {
      languageId: 5,

      languageTitle: "Must be Assigned",
      languageBody: [
        "JavaScript const variables must be assigned a value when they are declared:",
      ],
    },
    {
      languageId: 5,

      languageTitle: "Constant Objects and Arrays",
      languageBody: [
        "The keyword const is a little misleading.",
        "It does not define a constant value. It defines a constant reference to a value.",
        "Because of this you can NOT:",
        "Reassign a constant value",
        "Reassign a constant array",
        "Reassign a constant object",
        "But you CAN:",
        "Change a constant array",
        "Change a constant object",
        "You can change the elements of a constant array:"
      ],
    },
    {
      languageId: 5,

      languageTitle: "Constant Objects",
      languageBody: [
        "You can change the properties of a constant object:",
        "But you can NOT reassign the object:",
      ],
    },
    // javascript arithematic
    {
      languageId: 6,

      languageTitle: "Arithmetic Operations",
      languageBody: [
        "A typical arithmetic operation operates on two numbers.",
        "The two numbers can be literals:",
        "or variables:"
      ],
    },
    {
      languageId: 6,

      languageTitle: "Operators and Operands",
      languageBody: [
        "The numbers (in an arithmetic operation) are called operands.",
        "The operation (to be performed between the two operands) is defined by an operator.",
        "or variables:"
      ],
    },
    {
      languageId: 6,

      languageTitle: "Adding",
      languageBody: [
        "The addition operator (+) adds numbers:",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Subtracting",
      languageBody: [
        "The subtraction operator (-) subtracts numbers.",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Multiplying",
      languageBody: [
        "The multiplication operator (*) multiplies numbers.",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Dividing",
      languageBody: [
        "The division operator (/) divides numbers.",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Remainder",
      languageBody: [
        "The modulus operator (%) returns the division remainder.",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Incrementing",
      languageBody: [
        "The increment operator (++) increments numbers.",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Decrementing",
      languageBody: [
        "The decrement operator (--) decrements numbers.",
      ],
    },
    // javascript assignment 
    {
      languageId: 7,

      languageTitle: "Assignment Examples",
      languageBody: [
        "The = assignment operator assigns a value to a variable.",
        "The += assignment operator adds a value to a variable.",
        "The -= assignment operator subtracts a value from a variable.",
        "The *= assignment operator multiplies a variable.",
        "The /= assignment divides a variable.",
        "The %= assignment operator assigns a remainder to a variable."
      ],
    },
    // javascript data types 
    {
      languageId: 8,

      languageTitle: "The Concept of Data Types",
      languageBody: [
        "In programming, data types is an important concept.",
        "To be able to operate on variables, it is important to know something about the type.",
        "Without data types, a computer cannot safely solve this:",
        "Does it make any sense to add 'Volvo' to sixteen? Will it produce an error or will it produce a result?",
        "JavaScript will treat the example above as:",
      ],
    },

    {
      languageId: 8,

      languageTitle: "JavaScript Types are Dynamic",
      languageBody: [
        "JavaScript has dynamic types. This means that the same variable can be used to hold different data types:",

      ],
    },

    {
      languageId: 8,

      languageTitle: "JavaScript Strings",
      languageBody: [
        "A string (or a text string) is a series of characters like 'zJohn Doe'.",
        "Strings are written with quotes. You can use single or double quotes:",
        "You can use quotes inside a string, as long as they don't match the quotes surrounding the string:",
        "You will learn more about strings later in this tutorial."

      ],
    },
    {
      languageId: 8,

      languageTitle: "JavaScript Numbers",
      languageBody: [
        "JavaScript has only one type of numbers.",
        "Numbers can be written with, or without decimals:",
        "Extra large or extra small numbers can be written with scientific (exponential) notation:",
        "You will learn more about strings later in this tutorial."

      ],
    },
    {
      languageId: 8,

      languageTitle: "JavaScript Booleans",
      languageBody: [
        "Booleans can only have two values: true or false.",
        "Booleans are often used in conditional testing.",
        "You will learn more about conditional testing later in this tutorial.",
        "You will learn more about strings later in this tutorial."

      ],
    },
    {
      languageId: 8,

      languageTitle: "JavaScript Arrays",
      languageBody: [
        "JavaScript arrays are written with square brackets.",
        "Array items are separated by commas.",
        "The following code declares (creates) an array called cars, containing three items (car names):",
        "Array indexes are zero-based, which means the first item is [0], second is [1], and so on."

      ],
    },

    // javascript function
    {
      languageId: 9,

      languageTitle: "JavaScript Functions",
      languageBody: [
        "A JavaScript function is a block of code designed to perform a particular task.",
        "A JavaScript function is executed when 'something' invokes it (calls it).",
      ],
    },
    {
      languageId: 9,

      languageTitle: "JavaScript Function Syntax",
      languageBody: [
        "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().",
        "Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).",
        "The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)",
        "The code to be executed, by the function, is placed inside curly brackets: {}",
        "Function parameters are listed inside the parentheses () in the function definition.",
        "Function arguments are the values received by the function when it is invoked.",
        "Inside the function, the arguments (the parameters) behave as local variables."

      ],
    },
    {
      languageId: 9,

      languageTitle: "Function Invocation",
      languageBody: [
        "The code inside the function will execute when 'something' invokes (calls) the function:",
        "When an event occurs (when a user clicks a button)",
        "When it is invoked (called) from JavaScript code",
        "Automatically (self invoked)",
        "You will learn a lot more about function invocation later in this tutorial.",

      ],
    },
    // javascript object
    {
      languageId: 10,

      languageTitle: "JavaScript Objects",
      languageBody: [
        "You have already learned that JavaScript variables are containers for data values.",
        "This code assigns a simple value (Fiat) to a variable named car:",
        "Objects are variables too. But objects can contain many values.",
        "This code assigns many values (Fiat, 500, white) to a variable named car:",
        "The values are written as name:value pairs (name and value separated by a colon).",

      ],
    },
    // javascript events 
    {
      languageId: 11,

      languageTitle: "JavaScript Events",
      languageBody: [
        "An HTML event can be something the browser does, or something a user does.",
        "Here are some examples of HTML events:",
        "An HTML web page has finished loading",
        "An HTML input field was changed",
        "An HTML button was clicked",
        "Often, when events happen, you may want to do something.",
        "JavaScript lets you execute code when events are detected.",
        "HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.",
        "With single quotes:",
        "With double quotes:",
        "In the following example, an onclick attribute (with code), is added to a <button> element:"
      ],
    },
    // javascript string 
    {
      languageId: 12,

      languageTitle: "JavaScript Strings",
      languageBody: [
        "A JavaScript string is zero or more characters written inside quotes.",
        "You can use single or double quotes:",
        "You can use quotes inside a string, as long as they don't match the quotes surrounding the string:",
      ],
    },

    {
      languageId: 12,

      languageTitle: "String Length",
      languageBody: [
        "To find the length of a string, use the built-in length property:",
      ],
    },
    // javastring methods
    {
      languageId: 13,

      languageTitle: "String Methods and Properties",
      languageBody: [
        "Primitive values, like 'John Doe', cannot have properties or methods (because they are not objects).",
        "But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.",
        "The length property returns the length of a string:"
      ],
    },
    {
      languageId: 13,

      languageTitle: "Finding a String in a String",
      languageBody: [
        "The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:",
        "The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:",
        "Both indexOf(), and lastIndexOf() return -1 if the text is not found:",
        "Both methods accept a second parameter as the starting position for the search:",
        "The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string."
      ],
    },


  ],
};
export default JavaScriptDescription;
