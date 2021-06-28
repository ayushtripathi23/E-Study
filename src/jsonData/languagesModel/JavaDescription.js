const JavaDescription = {
  language: "JAVA",
  description: [
    {
      languageId: 0,

      languageTitle: "Java Syntax",
      languageBody: [
        "In the previous chapter, we created a Java file called Main.java, and we used the following code to print 'Hello World' to the screen:",
        "Example explained",
        "Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.",
        "Note: Java is case-sensitive: 'MyClass' and 'myclass' has different meaning.",
        "The name of the java file must match the class name. When saving the file, save it using the class name and add '.java' to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: Go to the Get Started Chapter for how to install Java. The output should be:"

      ],
    },
    {
      languageId: 0,

      languageTitle: "The main Method",
      languageBody: [
        "The main() method is required and you will see it in every Java program:",
        "Any code inside the main() method will be executed. You don't have to understand the keywords before and after main. You will get to know them bit by bit while reading this tutorial.",
        "For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.",
        "System.out.println()",
        "Inside the main() method, we can use the println() method to print a line of text to the screen:"
      ],
    },
    {
      languageId: 1,

      languageTitle: "Java Comments",
      languageBody: [
        "Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.",
        "Single-line Comments",
        "Single-line comments start with two forward slashes (//).",
        "Any text between // and the end of the line is ignored by Java (will not be executed).",
        "This example uses a single-line comment before a line of code:",
        "This example uses a single-line comment at the end of a line of code:",

      ],
    },
    {
      languageId: 2,

      languageTitle: "Java Variables",
      languageBody: [
        "Variables are containers for storing data values.",
        "In Java, there are different types of variables, for example:.",
        "String - stores text, such as 'Hello'. String values are surrounded by double quotes",
        "int - stores integers (whole numbers), without decimals, such as 123 or -123",
        "float - stores floating point numbers, with decimals, such as 19.99 or -19.99",
        "char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes",
        "boolean - stores values with two states: true or false"
      ],
    },
    {
      languageId: 2,

      languageTitle: "Declaring (Creating) Variables",
      languageBody: [
        "To create a variable, you must specify the type and assign it a value:",
        "Where type is one of Java's types (such as int or String), and variable is the name of the variable (such as x or name). The equal sign is used to assign values to the variable.",
        "To create a variable that should store text, look at the following example:",
        "To create a variable that should store a number, look at the following example:",
        "You can also declare a variable without assigning the value, and assign the value later:",
        "Note that if you assign a new value to an existing variable, it will overwrite the previous value:"
      ],
    },
    {
      languageId: 2,

      languageTitle: "Final Variables",
      languageBody: [
        "However, you can add the final keyword if you don't want others (or yourself) to overwrite existing values (this will declare the variable as 'final' or 'constant', which means unchangeable and read-only):",
        "Code after double slashes // or between /* and */ is treated as a comment.",
        "Comments are ignored, and will not be executed:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Other Types",
      languageBody: [
        "A demonstration of how to declare variables of other types:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Display Variables",
      languageBody: [
        "The println() method is often used to display variables.",
        "To combine both text and a variable, use the + character:",
        "You can also use the + character to add a variable to another variable:",
        "For numeric values, the + character works as a mathematical operator (notice that we use int (integer) variables here):"
      ],
    },
    {
      languageId: 3,

      languageTitle: "Java Data Types",
      languageBody: [
        "As explained in the previous chapter, a variable in Java must be a specified data type:",
        "Data types are divided into two groups:",
        "Primitive data types - includes byte, short, int, long, float, double, boolean and char",
        "Non-primitive data types - such as String, Arrays and Classes (you will learn more about these in a later chapter)",

      ],
    },
    {
      languageId: 3,

      languageTitle: "Numbers",
      languageBody: [
        "Primitive number types are divided into two groups:",
        "Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.",
        "Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.",
        "Even though there are many numeric types in Java, the most used for numbers are int (for whole numbers) and double (for floating point numbers). However, we will describe them all as you continue to read."
      ],
    },
    {
      languageId: 3,

      languageTitle: "Integer Types",
      languageBody: [
        "Byte",
        "The byte data type can store whole numbers from -128 to 127. This can be used instead of int or other integer types to save memory when you are certain that the value will be within -128 and 127:",
      ],
    },
    // type casting
    {
      languageId: 4,

      languageTitle: "Java Type Casting",
      languageBody: [
        "Type casting is when you assign a value of one primitive data type to another type.",
        "In Java, there are two types of casting:",
        "Widening Casting (automatically) - converting a smaller type to a larger type size byte -> short -> char -> int -> long -> float -> double",
        "Narrowing Casting (manually) - converting a larger type to a smaller size type double -> float -> long -> int -> char -> short -> byte",
        "Widening Casting",
        "Widening casting is done automatically when passing a smaller size type to a larger size type:"
      ],
    },
    {
      languageId: 4,

      languageTitle: "Narrowing Casting",
      languageBody: [
        "Narrowing casting must be done manually by placing the type in parentheses in front of the value:",
      ],
    },
    {
      languageId: 5,

      languageTitle: "Java Operators",
      languageBody: [
        "Operators are used to perform operations on variables and values.",
        "In the example below, we use the + operator to add together two values:",
        "Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:",
        "Java divides the operators into the following groups:",
        "Arithmetic operators",
        "Assignment operators",
        "Comparison operators",
        "Logical operators",
        "Bitwise operators"
      ],
    },
    {
      languageId: 5,

      languageTitle: "Arithmetic Operators",
      languageBody: [
        "Arithmetic operators are used to perform common mathematical operations.",
      ],
    },
    {
      languageId: 5,

      languageTitle: "Java Assignment Operators",
      languageBody: [
        "Assignment operators are used to assign values to variables.",
        "In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:",
        "The addition assignment operator (+=) adds a value to a variable:",
        "A list of all assignment operators:"
      ],
    },
    {
      languageId: 5,

      languageTitle: "Java Comparison Operators",
      languageBody: [
        "Comparison operators are used to compare two values:",
      ],
    },
    {
      languageId: 5,

      languageTitle: "Java Logical Operators",
      languageBody: [
        "Logical operators are used to determine the logic between variables or values:",
      ],
    },
    // string 
    {
      languageId: 6,

      languageTitle: "Java Strings",
      languageBody: [
        "Strings are used for storing text.",
        "A String variable contains a collection of characters surrounded by double quotes:"
      ],
    },
    {
      languageId: 6,

      languageTitle: "String Length",
      languageBody: [
        "A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method:",

      ],
    },
    {
      languageId: 6,

      languageTitle: "More String Methods",
      languageBody: [
        "There are many string methods available, for example toUpperCase() and toLowerCase():",

      ],
    },
    {
      languageId: 6,

      languageTitle: "Finding a Character in a String",
      languageBody: [
        "The indexOf() method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):",

      ],
    },
    {
      languageId: 6,

      languageTitle: "String Concatenation",
      languageBody: [
        "The + operator can be used between strings to combine them. This is called concatenation:",
        "You can also use the concat() method to concatenate two strings:"

      ],
    },
    {
      languageId: 6,

      languageTitle: "Special Characters",
      languageBody: [
        "Because strings must be written within quotes, Java will misunderstand this string, and generate an error:",
        "The solution to avoid this problem, is to use the backslash escape character.",
        "The backslash () escape character turns special characters into string characters:",
        "The sequence ''  inserts a double quote in a string:",
        "The sequence ''  inserts a single quote in a string:",
        "The sequence ''  inserts a single backslash in a string:"

      ],
    },
  ],
};
export default JavaDescription;
