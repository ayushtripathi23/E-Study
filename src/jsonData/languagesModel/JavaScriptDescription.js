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
      codeName: 'language-js',
      codeDescription: "10.50",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_numbers"
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
      codeName: 'language-js',
      codeDescription: "let x;\nx = 6;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_variables"
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Operators",
      languageBody: [
        "JavaScript uses arithmetic operators ( + - * / ) to compute values:",
        "JavaScript uses an assignment operator ( = ) to assign values to variables:",
      ],
      codeName: 'language-js',
      codeDescription: "(5 + 6) * 10",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_operators"
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
      codeName: 'language-js',
      codeDescription: "5 * 10",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_expressions"
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Keywords",
      languageBody: [
        "JavaScript keywords are used to identify actions to be performed.",
        "The let keyword tells the browser to create variables:",
        "The var keyword also tells the browser to create variables:",
      ],
      codeName: 'language-js',
      codeDescription: "let x, y;\nx = 5 + 6;\ny = x * 10;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_let"
    },
    {
      languageId: 0,

      languageTitle: "JavaScript Comments",
      languageBody: [
        "Not all JavaScript statements are 'executed'.",
        "Code after double slashes // or between /* and */ is treated as a comment.",
        "Comments are ignored, and will not be executed:",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;   // I will be executed",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_comments"
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
      codeName: 'language-js',
      codeDescription: "// Change heading:\ndocument.getElementById('myH').innerHTML = 'My First Page';",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_comments1"
    },
    {
      languageId: 1,

      languageTitle: "Multi-line Comments",
      languageBody: [
        "Multi-line comments start with /* and end with */.",
        "Any text between /* and */ will be ignored by JavaScript.",
        "This example uses a multi-line comment (a comment block) to explain the code:",
      ],
      codeName: 'language-js',
      codeDescription: "/*\nThe code below will change\nthe heading with id = 'myH'\nand the paragraph with id = 'myP'\nin my web page:\n* /\ndocument.getElementById('myH').innerHTML = 'My First Page';",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_comments2"
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
      codeName: 'language-js',
      codeDescription: "var x = 5;\nvar y = 6;\nvar z = x + y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_variables"
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
      codeName: 'language-js',
      codeDescription: "var price1 = 5;\nvar price2 = 6;\nvar total = price1 + price2;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_variables_total"
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
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "var x = 10;\n// Here x is 10\nvar x = 2;\n// Here x is 2\n}",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_es6_var"
    },
    // javascript const 
    {
      languageId: 4,

      languageTitle: "Must be Assigned",
      languageBody: [
        "JavaScript const variables must be assigned a value when they are declared:",

      ],
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "// You can create a constant array:\nconst cars = ['Saab', 'Volvo', 'BMW'];\n // You can change an element:\ncars[0] = 'Toyota';",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_const_array"
    },
    {
      languageId: 4,

      languageTitle: "Constant Objects",
      languageBody: [
        "You can change the properties of a constant object:",
        "But you can NOT reassign the object:",
      ],
      codeName: 'language-js',
      codeDescription: "// You can create a const object:\nconst car = { type: 'Fiat', model: '500', color: 'white' };\n// You can change a property:\ncar.color = 'red';",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_const_object"
    },
    // javascript operators 
    {
      languageId: 5,

      languageTitle: "Must be Assigned",
      languageBody: [
        "JavaScript const variables must be assigned a value when they are declared:",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;         // assign the value 5 to x\nlet y = 2;         // assign the value 2 to y",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper"
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
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 5,

      languageTitle: "Constant Objects",
      languageBody: [
        "You can change the properties of a constant object:",
        "But you can NOT reassign the object:",
      ],
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "let x = 100 + 50;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_operation"
    },
    {
      languageId: 6,

      languageTitle: "Operators and Operands",
      languageBody: [
        "The numbers (in an arithmetic operation) are called operands.",
        "The operation (to be performed between the two operands) is defined by an operator.",
        "or variables:"
      ],
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 6,

      languageTitle: "Adding",
      languageBody: [
        "The addition operator (+) adds numbers:",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 2;\nlet z = x + y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_add"
    },
    {
      languageId: 6,

      languageTitle: "Subtracting",
      languageBody: [
        "The subtraction operator (-) subtracts numbers.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 2;\nlet z = x - y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_sub"
    },
    {
      languageId: 6,

      languageTitle: "Multiplying",
      languageBody: [
        "The multiplication operator (*) multiplies numbers.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 2;\nlet z = x * y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mult"
    },
    {
      languageId: 6,

      languageTitle: "Dividing",
      languageBody: [
        "The division operator (/) divides numbers.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 2;\nlet z = x * y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_div"
    },
    {
      languageId: 6,

      languageTitle: "Remainder",
      languageBody: [
        "The modulus operator (%) returns the division remainder.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 2;\nlet z = x % y;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mod"
    },
    {
      languageId: 6,

      languageTitle: "Incrementing",
      languageBody: [
        "The increment operator (++) increments numbers.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nx++;\nlet z = x;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_increment"
    },
    {
      languageId: 6,

      languageTitle: "Decrementing",
      languageBody: [
        "The decrement operator (--) decrements numbers.",
      ],
      codeName: 'language-js',
      codeDescription: "let x = 5;\nx--;\n  let z = x;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decrement"
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
      codeName: 'language-js',
      codeDescription: "let x = 10;\nx += 5;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_plusequal"
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
      codeName: 'language-js',
      codeDescription: "let x = 'Volvo' + 16;",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_addstring2"
    },

    {
      languageId: 8,

      languageTitle: "JavaScript Types are Dynamic",
      languageBody: [
        "JavaScript has dynamic types. This means that the same variable can be used to hold different data types:",

      ],
      codeName: 'language-js',
      codeDescription: "let x;           // Now x is undefined\nx = 5;           // Now x is a Number\n      x = 'John';      // Now x is a String",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_dynamic"
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
      codeName: 'language-js',
      codeDescription: "let carName2 = 'Volvo XC60';   // Using single quotes",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_string_quotes"
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
      codeName: 'language-js',
      codeDescription: "let x2 = 34;        // Written without decimals",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_numbers"
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
      codeName: 'language-js',
      codeDescription: "let x = 5;\nlet y = 5;\nlet z = 6;\n(x == y)       // Returns true\n(x == z)       // Returns false",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_bolean"
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
      codeName: 'language-js',
      codeDescription: "const cars = ['Saab', 'Volvo', 'BMW'];",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_array"
    },

    // javascript function
    {
      languageId: 9,

      languageTitle: "JavaScript Functions",
      languageBody: [
        "A JavaScript function is a block of code designed to perform a particular task.",
        "A JavaScript function is executed when 'something' invokes it (calls it).",
      ],
      codeName: 'language-js',
      codeDescription: "function myFunction(p1, p2)\n {  return p1 * p2;   // The function returns the product of p1 and p2\n    }",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions"
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
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "",
      codeEditorLink: ""
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
      codeName: 'language-js',
      codeDescription: "const car = {type:'Fiat', model:'500', color:'white'};",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_object"
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
      codeName: 'language-js',
      codeDescription: "<button onclick='document.getElementById('demo').innerHTML = Date()'>The time is?</button>",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1"
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
      codeName: 'language-js',
      codeDescription: "let carName2 = 'Volvo XC60';  // Single quotes",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_quotes"
    },

    {
      languageId: 12,

      languageTitle: "String Length",
      languageBody: [
        "To find the length of a string, use the built-in length property:",
      ],
      codeName: 'language-js',
      codeDescription: "let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\ntext.length;    // Will return 26",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_length"
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
      codeName: 'language-js',
      codeDescription: "let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\ntext.length;    // Will return 26",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_length"
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
      codeName: 'language-js',
      codeDescription: "let str = 'Please locate where 'locate' occurs!';\nstr.indexOf('locate', 15)    // Returns 21",
      codeEditorLink: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_indexof_2"
    },


  ],
};
export default JavaScriptDescription;
