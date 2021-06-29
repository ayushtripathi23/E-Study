const SqlDescription = {
  language: "SQL",
  description: [
    {
      languageId: 0,

      languageTitle: "SQL Statements",
      languageBody: [
        "Most of the actions you need to perform on a database are done with SQL statements.",
        "The following SQL statement selects all the records in the 'Customers' table:",
        "In this tutorial we will teach you all about the different SQL statements.",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all"
    },
    {
      languageId: 1,

      languageTitle: "The SQL SELECT Statement",
      languageBody: [
        "The SELECT statement is used to select data from a database.",
        "The data returned is stored in a result table, called the result-set.",
        "SELECT Syntax",
        "Here, column1, column2, ... are the field names of the table you want to select data from. If you want to select all the fields available in the table, use the following syntax:",
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 1,

      languageTitle: "SELECT Column Example",
      languageBody: [
        "The following SQL statement selects the 'CustomerName' and 'City' columns from the 'Customers' table:",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT CustomerName, City FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_columns"
    },
    {
      languageId: 1,

      languageTitle: "SELECT * Example",
      languageBody: [
        "The following SQL statement selects all the columns from the 'Customers' table:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all"
    },
    {
      languageId: 2,

      languageTitle: "The SQL SELECT DISTINCT Statement",
      languageBody: [
        "The SELECT DISTINCT statement is used to return only distinct (different) values.",
        "Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.",
        "SELECT DISTINCT Syntax",
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 2,

      languageTitle: "SELECT Example Without DISTINCT",
      languageBody: [
        "The following SQL statement selects all (including the duplicates) values from the 'Country' column in the 'Customers' table:",
        "Now, let us use the SELECT DISTINCT statement and see the result.",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_no_distinct"
    },
    {
      languageId: 2,

      languageTitle: "SELECT DISTINCT Examples",
      languageBody: [
        "The following SQL statement selects only the DISTINCT values from the 'Country' column in the 'Customers' table:",
        "The following SQL statement lists the number of different (distinct) customer countries:",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT DISTINCT Country FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct"
    },
    {
      languageId: 3,

      languageTitle: "The SQL WHERE Clause",
      languageBody: [
        "The WHERE clause is used to filter records.",
        "It is used to extract only those records that fulfill a specified condition.",
        "WHERE Syntax",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE Country='Mexico';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where"
    },
    {
      languageId: 3,

      languageTitle: "Text Fields vs. Numeric Fields",
      languageBody: [
        "SQL requires single quotes around text values (most database systems will also allow double quotes).",
        "However, numeric fields should not be enclosed in quotes:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE CustomerID=1;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_number"
    },
    {
      languageId: 4,

      languageTitle: "The SQL AND, OR and NOT Operators",
      languageBody: [
        "The WHERE clause can be combined with AND, OR, and NOT operators.",
        "The AND and OR operators are used to filter records based on more than one condition:",
        "The AND operator displays a record if all the conditions separated by AND are TRUE.",
        "The OR operator displays a record if any of the conditions separated by OR is TRUE.",
        "The NOT operator displays a record if the condition(s) is NOT TRUE."
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 4,

      languageTitle: "AND Example",
      languageBody: [
        "The following SQL statement selects all fields from 'Customers' where country is 'Germany' AND city is 'Berlin':",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE Country='Germany' AND City='Berlin';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_and"
    },
    {
      languageId: 4,

      languageTitle: "OR Example",
      languageBody: [
        "The following SQL statement selects all fields from 'Customers' where city is 'Berlin' OR 'München':",
        "The following SQL statement selects all fields from 'Customers' where country is 'Germany' OR 'Spain':"

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE City='Berlin' OR City='München';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_or"
    },
    {
      languageId: 4,

      languageTitle: "NOT Example",
      languageBody: [
        "The following SQL statement selects all fields from 'Customers' where country is NOT 'Germany':",


      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE NOT Country='Germany';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_not"
    },
    {
      languageId: 4,

      languageTitle: "Combining AND, OR and NOT",
      languageBody: [
        "You can also combine the AND, OR and NOT operators.",
        "The following SQL statement selects all fields from 'Customers' where country is 'Germany' AND city must be 'Berlin' OR 'München' (use parenthesis to form complex expressions):",
        "The following SQL statement selects all fields from 'Customers' where country is NOT 'Germany' and NOT 'USA':"


      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nWHERE Country='Germany' AND(City = 'Berlin' OR City = 'München');",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_and_or"
    },
    // order by 
    {
      languageId: 5,

      languageTitle: "The SQL ORDER BY Keyword",
      languageBody: [
        "The ORDER BY keyword is used to sort the result-set in ascending or descending order.",
        "The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.",
        "ORDER BY Syntax"


      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 5,

      languageTitle: "ORDER BY Example",
      languageBody: [
        "The following SQL statement selects all customers from the 'Customers' table, sorted by the 'Country' column:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nORDER BY Country;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby"
    },
    {
      languageId: 5,

      languageTitle: "ORDER BY DESC Example",
      languageBody: [
        "The following SQL statement selects all customers from the 'Customers' table, sorted DESCENDING by the 'Country' column:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nORDER BY Country DESC;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby_desc"
    },
    {
      languageId: 5,

      languageTitle: "ORDER BY Several Columns Example",
      languageBody: [
        "The following SQL statement selects all customers from the 'Customers' table, sorted by the 'Country' and the 'CustomerName' column. This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT * FROM Customers\nORDER BY Country, CustomerName;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_orderby2"
    },
    // insert ito 
    {
      languageId: 6,

      languageTitle: "The SQL INSERT INTO Statement",
      languageBody: [
        "The INSERT INTO statement is used to insert new records in a table.",
        "INSERT INTO Syntax",
        "It is possible to write the INSERT INTO statement in two ways:",
        "1. Specify both the column names and the values to be inserted:",
        " If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:"
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 6,

      languageTitle: "INSERT INTO Example",
      languageBody: [
        "The following SQL statement inserts a new record in the 'Customers' table:",
        "The selection from the 'Customers' table will now look like this:",
      ],
      codeName: 'language-sql',
      codeDescription: "INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_colname"
    },
    {
      languageId: 6,

      languageTitle: "Insert Data Only in Specified Columns",
      languageBody: [
        "It is also possible to only insert data in specific columns.",
        "The following SQL statement will insert a new record, but only insert data in the 'CustomerName', 'City', and 'Country' columns (CustomerID will be updated automatically):",
        "The selection from the 'Customers' table will now look like this:"
      ],
      codeName: 'language-sql',
      codeDescription: "INSERT INTO Customers (CustomerName, City, Country)\nVALUES('Cardinal', 'Stavanger', 'Norway');",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_cols"
    },
    // null vallues 
    {
      languageId: 7,

      languageTitle: "What is a NULL Value?",
      languageBody: [
        "A field with a NULL value is a field with no value.",
        "If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.",
        "How to Test for NULL Values?",
        "It is not possible to test for NULL values with comparison operators, such as =, <, or <>.",
        "We will have to use the IS NULL and IS NOT NULL operators instead.",
        "IS NULL Syntax"
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 7,

      languageTitle: "The IS NULL Operator",
      languageBody: [
        "The IS NULL operator is used to test for empty values (NULL values).",
        "The following SQL lists all customers with a NULL value in the 'Address' field:",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NULL;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_is_null"
    },
    {
      languageId: 7,

      languageTitle: "The IS NOT NULL Operator",
      languageBody: [
        "The IS NOT NULL operator is used to test for non-empty values (NOT NULL values).",
        "The following SQL lists all customers with a value in the 'Address' field:",

      ],
      codeName: 'language-sql',
      codeDescription: "SELECT CustomerName, ContactName, Address\nFROM Customers\nWHERE Address IS NOT NULL;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_is_not_null"
    },
    // update 
    {
      languageId: 8,

      languageTitle: "The SQL UPDATE Statement",
      languageBody: [
        "The UPDATE statement is used to modify the existing records in a table.",
        "UPDATE Syntax",

      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 8,

      languageTitle: "UPDATE Table",
      languageBody: [
        "The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.",
        "The selection from the 'Customers' table will now look like this:",

      ],
      codeName: 'language-sql',
      codeDescription: "UPDATE Customers\nSET ContactName = 'Alfred Schmidt', City= 'Frankfurt'\nWHERE CustomerID = 1;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_2"
    },
    {
      languageId: 8,

      languageTitle: "UPDATE Multiple Records",
      languageBody: [
        "It is the WHERE clause that determines how many records will be updated.",
        "The following SQL statement will update the ContactName to 'Juan' for all records where country is 'Mexico':",
        "The selection from the 'Customers' table will now look like this:"

      ],
      codeName: 'language-sql',
      codeDescription: "UPDATE Customers\nSET ContactName='Juan'\nWHERE Country='Mexico';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_3"
    },
    // delete section
    {
      languageId: 9,

      languageTitle: "The SQL DELETE Statement",
      languageBody: [
        "The DELETE statement is used to delete existing records in a table.",
        "DELETE Syntax",

      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 9,

      languageTitle: "Demo Database",
      languageBody: [
        "Below is a selection from the 'Customers' table in the Northwind sample database:",
        "DELETE Syntax",

      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 9,

      languageTitle: "SQL DELETE Example",
      languageBody: [
        "The following SQL statement deletes the customer 'Alfreds Futterkiste' from the 'Customers' table:",
        "The 'Customers' table will now look like this:",

      ],
      codeName: 'language-sql',
      codeDescription: "DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_delete"
    },
    {
      languageId: 9,

      languageTitle: "Delete All Records",
      languageBody: [
        "It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:",
        "The following SQL statement deletes all rows in the 'Customers' table, without deleting the table:",

      ],
      codeName: 'language-sql',
      codeDescription: "DELETE FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_delete_all"
    },
    // select top 
    {
      languageId: 10,

      languageTitle: "The SQL SELECT TOP Clause",
      languageBody: [
        "The SELECT TOP clause is used to specify the number of records to return.",
        "The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.",

      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 10,

      languageTitle: "SQL TOP, LIMIT and FETCH FIRST Examples",
      languageBody: [
        "The following SQL statement selects the first three records from the 'Customers' table (for SQL Server/MS Access):",
        "The following SQL statement shows the equivalent example for MySQL:",
        "The following SQL statement shows the equivalent example for Oracle:"
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT TOP 3 * FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top&ss=-1"
    },
    {
      languageId: 10,

      languageTitle: "SQL TOP PERCENT Example",
      languageBody: [
        "The following SQL statement selects the first 50% of the records from the 'Customers' table (for SQL Server/MS Access):",
        "The following SQL statement shows the equivalent example for Oracle:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT TOP 50 PERCENT * FROM Customers;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top_percent&ss=-1"
    },
    // min and max 
    {
      languageId: 11,

      languageTitle: "The SQL MIN() and MAX() Functions",
      languageBody: [
        "The MIN() function returns the smallest value of the selected column.",
        "The MAX() function returns the largest value of the selected column.",
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 11,

      languageTitle: "MIN() Example",
      languageBody: [
        "The following SQL statement finds the price of the cheapest product:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT MIN(Price) AS SmallestPrice\nFROM Products;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_min"
    },
    {
      languageId: 11,

      languageTitle: "MAX() Example",
      languageBody: [
        "The following SQL statement finds the price of the most expensive product:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT MAX(Price) AS LargestPrice\nFROM Products;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_max"
    },
    // count average sum 
    {
      languageId: 12,

      languageTitle: "SQL COUNT(), AVG() and SUM() Functions",
      languageBody: [
        "The SQL COUNT(), AVG() and SUM() Functions",
        "The COUNT() function returns the number of rows that matches a specified criterion.",
        "COUNT() Syntax",
        "The AVG() function returns the average value of a numeric column. "
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 12,

      languageTitle: "AVG() Syntax",
      languageBody: [
        "The AVG() function returns the average value of a numeric column. ",
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 12,

      languageTitle: "SUM() Syntax",
      languageBody: [
        "The SUM() function returns the total sum of a numeric column.  ",
      ],
      codeName: 'language-sql',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 12,

      languageTitle: "COUNT() Example",
      languageBody: [
        "The following SQL statement finds the number of products:  ",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT COUNT(ProductID)\nFROM Products;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_count"
    },
    {
      languageId: 12,

      languageTitle: "AVG() Example",
      languageBody: [
        "The following SQL statement finds the average price of all products:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT AVG(Price)\nFROM Products;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_avg"
    },
    {
      languageId: 12,

      languageTitle: "SUM() Example",
      languageBody: [
        "The following SQL statement finds the sum of the 'Quantity' fields in the 'OrderDetails' table:",
      ],
      codeName: 'language-sql',
      codeDescription: "SELECT SUM(Quantity)\nFROM OrderDetails;",
      codeEditorLink: "https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_sum"
    },
  ],
};
export default SqlDescription;
