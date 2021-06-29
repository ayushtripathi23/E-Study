const viewCssLanguage = {
  language: "CSS",
  description: [
    {
      languageId: 0,

      languageTitle: "CSS Syntax",
      languageBody: [
        "The selector points to the HTML element you want to style.",
        "The declaration block contains one or more declarations separated by semicolons.",
        "Each declaration includes a CSS property name and a value, separated by a colon.",
        "Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.",
        "Example Explained",
        "p is a selector in CSS (it points to the HTML element you want to style: <p>).",
        "color is a property, and red is the property value",
        "text-align is a property, and center is the property value",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  color: red;\n      text- align: center;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax1"
    },
    {
      languageId: 1,
      languageTitle: "CSS Selectors",
      languageBody: [
        "CSS selectors are used to 'find' (or select) the HTML elements you want to style.",
        "We can divide CSS selectors into five categories:",
        "Simple selectors (select elements based on name, id, class)",
        "Combinator selectors (select elements based on a specific relationship between them)",
        "Pseudo-class selectors (select elements based on a certain state)",
        "Pseudo-elements selectors (select and style a part of an element)",
        "Attribute selectors (select elements based on an attribute or attribute value)",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  color: red;\n      text- align: center;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element"
    },
    {
      languageId: 1,
      languageTitle: "The CSS element Selector",
      languageBody: [
        "The element selector selects HTML elements based on the element name.",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  color: red;\n      text- align: center;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element"
    },
    {
      languageId: 1,
      languageTitle: "The CSS id Selector",
      languageBody: [
        "The id selector uses the id attribute of an HTML element to select a specific element.",
        "The id of an element is unique within a page, so the id selector is used to select one unique element!",
        "To select an element with a specific id, write a hash (#) character, followed by the id of the element.",
      ],
      codeName: 'language-css',
      codeDescription: "#para1 {\n  text- align: center;\n  color: red;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_id"
    },
    {
      languageId: 1,
      languageTitle: "The CSS class Selector",
      languageBody: [
        "The class selector selects HTML elements with a specific class attribute.",
        "To select elements with a specific class, write a period (.) character, followed by the class name.",
      ],
      codeName: 'language-css',
      codeDescription: ".center {\n  text- align: center;\n  color: red;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_class"
    },
    {
      languageId: 1,
      languageTitle: "The CSS Universal Selector",
      languageBody: [
        "The universal selector (*) selects all HTML elements on the page.",
      ],
      codeName: 'language-css',
      codeDescription: "* {\n  text- align: center;\n  color: blue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_universal"
    },
    {
      languageId: 1,
      languageTitle: "The CSS Grouping Selector",
      languageBody: [
        "The grouping selector selects all the HTML elements with the same style definitions.",
        "Look at the following CSS code (the h1, h2, and p elements have the same style definitions):",
        "It will be better to group the selectors, to minimize the code.",
        "To group selectors, separate each selector with a comma.",
      ],
      codeName: 'language-css',
      codeDescription: "h1, h2, p {\n  text- align: center;\n  color: red;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_grouping"
    },
    {
      languageId: 2,
      languageTitle: "Three Ways to Insert CSS",
      languageBody: [
        "There are three ways of inserting a style sheet:",
        "External CSS",
        "Internal CSS",
        "Inline CSS",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 2,
      languageTitle: "External CSS",
      languageBody: [
        "With an external style sheet, you can change the look of an entire website by changing just one file!",
        "Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.",
        "An external style sheet can be written in any text editor, and must be saved with a .css extension.",
        "The external .css file should not contain any HTML tags.",
        "Here is how the 'mystyle.css' file looks:",
      ],
      codeName: 'language-css',
      codeDescription: "<!DOCTYPE html>\n        < html >\n        <head>\n          <link rel='stylesheet' href='mystyle.css'>\n</head>\n          <body>\n            <h1>This is a heading</h1>\n            <p>This is a paragraph.</p>\n     </body>\n</html>",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_external"
    },
    {
      languageId: 2,
      languageTitle: "Internal CSS",
      languageBody: [
        "An internal style sheet may be used if one single HTML page has a unique style.",
        "The internal style is defined inside the <style> element, inside the head section.",
      ],
      codeName: 'language-css',
      codeDescription: "<!DOCTYPE html>\n        < html >\n<head>\n<style>\nbody {\n  background-color: linen;\n}\nh1 {\n  color: maroon;\n  margin-left: 40px;\n}\n</style>\n</head>\n<body>\n<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html >",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_internal"
    },
    {
      languageId: 2,
      languageTitle: "Inline CSS",
      languageBody: [
        "An inline style may be used to apply a unique style for a single element.",
        "To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.",
      ],
      codeName: 'language-css',
      codeDescription: "<!DOCTYPE html>\n        < html >\n        <body>\n          <h1 style='color:blue;text-align:center;'>This is a heading</h1>\n          <p style='color:red;'>This is a paragraph.</p>\n        </body>\n</html >",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_inline"
    },
    {
      languageId: 2,
      languageTitle: "Multiple Style Sheets",
      languageBody: [
        "If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. ",
      ],
      codeName: 'language-css',
      codeDescription: "<head>\n        < style >\n        h1 {\n      color: orange;\n    }\n</style >\n  <link rel='stylesheet' type='text/css' href='mystyle.css'>\n</head>",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_multiple2"
    },
    {
      languageId: 2,
      languageTitle: "Cascading Order",
      languageBody: [
        "What style will be used when there is more than one style specified for an HTML element? ",
        "All the styles in a page will 'cascade into a new 'virtual' style sheet by the following rules, where number one has the highest priority:",
        "Inline style (inside an HTML element)",
        "External and internal style sheets (in the head section)",
        "Browser default",
        "So, an inline style has the highest priority, and will override external and internal styles and browser defaults.",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 3,
      languageTitle: "CSS Comments",
      languageBody: [
        "CSS comments are not displayed in the browser, but they can help document your source code.",
        "Comments are used to explain the code, and may help when you edit the source code at a later date.",
        "Comments are ignored by browsers.",
        "A CSS comment is placed inside the <style> element, and starts with /* and ends with */:",
      ],
      codeName: 'language-css',
      codeDescription: "/* This is a single-line comment */\np {\n      color: red;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_comments"
    },
    {
      languageId: 3,
      languageTitle: "HTML and CSS Comments",
      languageBody: [
        "From the HTML tutorial, you learned that you can add comments to your HTML source by using the <!--...--> syntax.",
        "In the following example, we use a combination of HTML and CSS comments:",
      ],
      codeName: 'language-css',
      codeDescription: "<!-- These paragraphs will be red -->",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_comments4"
    },
    {
      languageId: 4,
      languageTitle: "CSS background-color",
      languageBody: [
        "The background-color property specifies the background color of an element.",
        "a valid color name - like 'red'",
        "a HEX value - like '#ff0000'",
        "an RGB value - like 'rgb(255,0,0)'",
        "Look at CSS Color Values for a complete list of possible color values.",
      ],
      codeName: 'language-css',
      codeDescription: "body {\n  background- color: lightblue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_background-color_body"
    },
    {
      languageId: 4,
      languageTitle: "Other Elements",
      languageBody: ["You can set the background color for any HTML elements:"],
      codeName: 'language-css',
      codeDescription: "h1 {\n  background- color: green;\n}\ndiv {\n  background - color: lightblue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_background-color_elements"
    },
    {
      languageId: 4,
      languageTitle: "Opacity / Transparency",
      languageBody: [
        "The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  background- color: green;\n  opacity: 0.3;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_background_opacity"
    },
    {
      languageId: 4,
      languageTitle: "Transparency using RGBA",
      languageBody: [
        "If you do not want to apply opacity to child elements, like in our example above, use RGBA color values. The following example sets the opacity for the background color and not the text:",
        "You learned from our CSS Colors Chapter, that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an alpha channel (RGBA) - which specifies the opacity for a color.",
        "An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).",
        "Tip: You will learn more about RGBA Colors in our CSS Colors Chapter.",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_background_opacity2"
    },
    // CSS BORDERS
    {
      languageId: 5,
      languageTitle: "CSS Border Style",
      languageBody: [
        "The border-style property specifies what kind of border to display.",
        "The following values are allowed:",
        "dotted - Defines a dotted border",
        "dashed - Defines a dashed border",
        "solid - Defines a solid border",
        "double - Defines a double border",
        "groove - Defines a 3D grooved border. The effect depends on the border-color value",
        "ridge - Defines a 3D ridged border. The effect depends on the border-color value",
        "inset - Defines a 3D inset border. The effect depends on the border-color value",
        "outset - Defines a 3D outset border. The effect depends on the border-color value",
        "none - Defines no border",
        "hidden - Defines a hidden border",
        "The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).",
      ],
      codeName: 'language-css',
      codeDescription: "p.dotted {border-style: dotted;}\np.dashed { border- style: dashed;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-style"
    },
    {
      languageId: 5,
      languageTitle: "CSS Border Width",
      languageBody: [
        "The border-width property specifies the width of the four borders.",
        "The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:",
      ],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- width: 5px;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-width"
    },
    {
      languageId: 5,
      languageTitle: "Specific Side Widths",
      languageBody: [
        "The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border):",
      ],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- width: 5px 20px; /* 5px top and bottom, 20px on the sides */\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-width2"
    },
    {
      languageId: 5,
      languageTitle: "CSS Border Color",
      languageBody: [
        "The border-color property is used to set the color of the four borders.",
        "The color can be set by:",
        "name - specify a color name, like 'red'",
        "HEX - specify a HEX value, like '#ff0000'",
        "RGB - specify a RGB value, like 'rgb(255,0,0)'",
        "HSL - specify a HSL value, like 'hsl(0, 100%, 50%)'",
        "transparent",
      ],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- color: red;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color1"
    },
    {
      languageId: 5,
      languageTitle: "Specific Side Colors",
      languageBody: [
        "The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). ",
      ],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- color: red green blue yellow; /* red top, green right, blue bottom and yellow left */\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color2"
    },
    {
      languageId: 5,
      languageTitle: "HEX Values",
      languageBody: [
        "The color of the border can also be specified using a hexadecimal value (HEX): ",
      ],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- color: #ff0000; /* red */\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color-hex"
    },
    {
      languageId: 5,
      languageTitle: "RGB Values",
      languageBody: ["Or by using RGB values: "],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- color: rgb(255, 0, 0); /* red */}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color-rgb"
    },

    {
      languageId: 5,
      languageTitle: "HSL Values",
      languageBody: ["You can also use HSL values: "],
      codeName: 'language-css',
      codeDescription: "p.one {\n  border- style: solid;\n  border- color: hsl(0, 100 %, 50 %); /* red */\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color-hsl"
    },
    {
      languageId: 5,
      languageTitle: "CSS Border - Individual Sides",
      languageBody: [
        "In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left): ",
        "From the examples on the previous pages, you have seen that it is possible to specify a different border for each side.",
        "The example above gives the same result as this:",
        "If the border-style property has four values:",
        "border-style: dotted solid double dashed;",
        "top border is dotted",
        "right border is solid",
        "bottom border is double",
        "left border is dashed",
        "If the border-style property has three values:",
        "border-style: dotted solid double;",
        "top border is dotted",
        "right and left borders are solid",
        "bottom border is double",
        "If the border-style property has two values:",
        "border-style: dotted solid;",
        "top and bottom borders are dotted",
        "right and left borders are solid",
        "If the border-style property has one value:",
        "border-style: dotted;",
        "all four borders are dotted",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  border- top - style: dotted;\n  border- right - style: solid;\nborder - bottom - style: dotted;\nborder - left - style: solid;}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_border-side"
    },
    // CSS MARGINS
    {
      languageId: 6,
      languageTitle: "CSS Margins",
      languageBody: [
        "The CSS margin properties are used to create space around elements, outside of any defined borders.",
        "With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 6,
      languageTitle: "Margin - Individual Sides",
      languageBody: [
        "CSS has properties for specifying the margin for each side of an element:",
        "margin-top",
        "margin-right",
        " margin - bottom",
        "margin-left",
        "All the margin properties can have the following values:",
        "auto - the browser calculates the margin",
        "length - specifies a margin in px, pt, cm, etc.",
        "% - specifies a margin in % of the width of the containing element",
        "inherit - specifies that the margin should be inherited from the parent element",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  margin- top: 100px;\n  margin- bottom: 100px;\nmargin - right: 150px;\nmargin - left: 80px;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_sides"
    },
    {
      languageId: 6,
      languageTitle: "Margin - Shorthand Property",
      languageBody: [
        "To shorten the code, it is possible to specify all the margin properties in one property.",
        "The margin property is a shorthand property for the following individual margin properties:",
        "margin-top",
        "margin-right",
        " margin - bottom",
        "margin-left",
        "So, here is how it works:",
        "If the margin property has four values:",
        "margin: 25px 50px 75px 100px;",
        "top margin is 25px",
        "right margin is 50px",
        "bottom margin is 75px",
        "left margin is 100px",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  margin: 25px 50px 75px 100px;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_shorthand_4val"
    },
    {
      languageId: 6,
      languageTitle: "The auto Value",
      languageBody: [
        "You can set the margin property to auto to horizontally center the element within its container.",
        "The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  width: 300px;\n      margin: auto;\n      border: 1px solid red;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_auto"
    },
    {
      languageId: 6,
      languageTitle: "The inherit Value",
      languageBody: [
        "This example lets the left margin of the <p class='ex'> element be inherited from the parent element (<div>):",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  border: 1px solid red;\n      margin- left: 100px;\n}\np.ex1 {\n  margin - left: inherit;}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_margin-left_inherit"
    },
    {
      languageId: 7,
      languageTitle: "CSS Padding",
      languageBody: [
        "The CSS padding properties are used to generate space around an element's content, inside of any defined borders.",
        "With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 7,
      languageTitle: "Padding - Individual Sides",
      languageBody: [
        "CSS has properties for specifying the padding for each side of an element:",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "All the padding properties can have the following values:",
        "length - specifies a padding in px, pt, cm, etc.",
        "% - specifies a padding in % of the width of the containing element",
        "inherit - specifies that the padding should be inherited from the parent element",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  padding- top: 50px;\n  padding- right: 30px;\npadding - bottom: 50px;\npadding - left: 80px;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_sides"
    },
    {
      languageId: 7,
      languageTitle: "Padding - Shorthand Property",
      languageBody: [
        "To shorten the code, it is possible to specify all the padding properties in one property.",
        "The padding property is a shorthand property for the following individual padding properties:",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "So, here is how it works:",
        "If the padding property has four values:",
        "padding: 25px 50px 75px 100px;",
        "top padding is 25px",
        "right padding is 50px",
        "bottom padding is 75px",
        "left padding is 100px",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  padding: 25px 50px 75px 100px;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_shorthand_4val"
    },
    {
      languageId: 7,
      languageTitle: "Padding and Element Width",
      languageBody: [
        "The CSS width property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).",
        "So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.",
        "To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease.",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  width: 300px;\n      padding: 25px;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_width"
    },
    // CSS HEIGHT/WIDTH
    {
      languageId: 8,
      languageTitle: "CSS Height and Width",
      languageBody: [
        "The CSS height and width properties are used to set the height and width of an element.",
        "The CSS max-width property is used to set the maximum width of an element.",
        "The height and width properties are used to set the height and width of an element.",
        "The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 8,
      languageTitle: "CSS Height and Width",
      languageBody: [
        "The height and width properties may have the following values:",
        "auto - This is default. The browser calculates the height and width",
        "% - Defines the height/width in percent of the containing block",
        "initial - Sets the height/width to its default value",
        "inherit - The height/width will be inherited from its parent value",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  height: 200px;\n      width: 50 %;\n      background- color: powderblue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_dim_height_width2"
    },
    {
      languageId: 8,
      languageTitle: "Setting max-width",
      languageBody: [
        "The max-width property is used to set the maximum width of an element.",
        "The max-width can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).",
        "The problem with the <div> above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.",
        "Using max-width instead, in this situation, will improve the browser's handling of small windows.",
        "Tip: Drag the browser window to smaller than 500px wide, to see the difference between the two divs!",
        "Note: If you for some reason use both the width property and the max-width property on the same element, and the value of the width property is larger than the max-width property; the max-width property will be used (and the width property will be ignored).",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  max- width: 500px;\n  height: 100px;\n  background- color: powderblue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_dim_max_width"
    },
    // CSS BOX MODEL
    {
      languageId: 9,
      languageTitle: "The CSS Box Model",
      languageBody: [
        "In CSS, the term 'box model' is used when talking about design and layout.",
        "The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:",
        "Explanation of the different parts:",
        "Content - The content of the box, where text and images appear",
        "Padding - Clears an area around the content. The padding is transparent",
        "Border - A border that goes around the padding and content",
        "Margin - Clears an area outside the border. The margin is transparent",
        "The box model allows us to add a border around elements, and to define space between elements. ",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  width: 300px;\n      border: 15px solid green;\n      padding: 50px;\n      margin: 20px;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel"
    },
    {
      languageId: 9,
      languageTitle: "Width and Height of an Element",
      languageBody: [
        "In order to set the width and height of an element correctly in all browsers, you need to know how the box model works.",
        "The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:",
        "Here is the calculation:",
        "320px (width)",
        "+ 20px (left + right padding)",
        "+ 10px (left + right border)",
        "+ 0px (left + right margin)",
        "= 350px ",
        "The total width of an element should be calculated like this:",
        "Total element width = width + left padding + right padding + left border + right border + left margin + right margin",
        "The total height of an element should be calculated like this:",
        "Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin",
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  width: 320px;\n      padding: 10px;\n      border: 5px solid gray;\n      margin: 0;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel_width"
    },
    //CSS OUTLINED
    {
      languageId: 10,
      languageTitle: "CSS Outline Style",
      languageBody: [
        "The outline-style property specifies the style of the outline, and can have one of the following values:",
        "dotted - Defines a dotted outline",
        "dashed - Defines a dashed outline",
        "solid - Defines a solid outline",
        "double - Defines a double outline",
        "groove - Defines a 3D grooved outline",
        "ridge - Defines a 3D ridged outline",
        "inset - Defines a 3D inset outline ",
        "outset - Defines a 3D outset outline",
        "none - Defines no outline",
        "hidden - Defines a hidden outline",
        "The following example shows the different outline-style values:",
      ],
      codeName: 'language-css',
      codeDescription: "p.dotted {outline-style: dotted;}\np.dashed { outline- style: dashed;}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_outline-style"
    },
    // CSS TEXT
    {
      languageId: 11,
      languageTitle: "Text Color",
      languageBody: [
        "The color property is used to set the color of the text. The color is specified by:",
        "a color name - like 'red'",
        "a HEX value - like '#ff0000'",
        "an RGB value - like 'rgb(255,0,0)'",
        "Look at CSS Color Values for a complete list of possible color values.",
        "The default text color for a page is defined in the body selector.",
      ],
      codeName: 'language-css',
      codeDescription: "body {\n  color: blue;\n    }\nh1 {\n      color: green;\n    }",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_color"
    },
    {
      languageId: 11,
      languageTitle: "Text Color and Background Color",
      languageBody: [
        "In this example, we define both the background-color property and the color property:",
      ],
      codeName: 'language-css',
      codeDescription: "body {\n  background- color: lightgrey;\n  color: blue;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_color_bg"
    },
    {
      languageId: 11,
      languageTitle: "Text Alignment",
      languageBody: [
        "The text-align property is used to set the horizontal alignment of a text.",
        "A text can be left or right aligned, centered, or justified.",
        "The following example shows center aligned, and left and right aligned text (left alignment is default if text direction is left-to-right, and right alignment is default if text direction is right-to-left):",
        "When the text-align property is set to 'justify', each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers):",
      ],
      codeName: 'language-css',
      codeDescription: "h1 {\n  text- align: center;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align"
    },
    {
      languageId: 11,
      languageTitle: "Text Direction",
      languageBody: [
        "The direction and unicode-bidi properties can be used to change the text direction of an element:",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  direction: rtl;\n      unicode- bidi: bidi - override;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_text_direction"
    },
    //
    {
      languageId: 12,
      languageTitle: "The CSS font-family Property",
      languageBody: [
        "In CSS, we use the font-family property to specify the font of a text.",
        "The font-family property should hold several font names as a 'fallback' system, to ensure maximum compatibility between browsers/operating systems.",
        "Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). The font names should be separated with comma.",
      ],
      codeName: 'language-css',
      codeDescription: ".p1 {\n  font- family: 'Times New Roman', Times, serif;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_font-family"
    },
    {
      languageId: 12,
      languageTitle: "Font Style",
      languageBody: [
        "The font-style property is mostly used to specify italic text.",
        "This property has three values:",
        "normal - The text is shown normally",
        "italic - The text is shown in italics",
        "oblique - The text is 'leaning' (oblique is very similar to italic, but less supported)",
      ],
      codeName: 'language-css',
      codeDescription: "p.normal {\n  font- style: normal;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_font-style"
    },
    {
      languageId: 12,
      languageTitle: "Font Variant",
      languageBody: [
        "The font-variant property specifies whether or not a text should be displayed in a small-caps font.",
        "In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.",
      ],
      codeName: 'language-css',
      codeDescription: "p.normal {\n  font- variant: normal;\n}",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_font-variant"
    },
    // CSS ICONS
    {
      languageId: 13,
      languageTitle: "Font Awesome Icons",
      languageBody: [
        "To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the <head> section of your HTML page:",
        "<script src='https://kit.fontawesome.com/yourcode.js' crossorigin='anonymous'></script>",
        "Read more about how to get started with Font Awesome in our Font Awesome 5 tutorial.",
        "Note: No downloading or installation is required!",
      ],
      codeName: 'language-css',
      codeDescription: "<i class='fas fa- file'></i>\n    < i class= 'fas fa-bars' ></i >",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_icons_fa"
    },
    {
      languageId: 13,
      languageTitle: "Bootstrap Icons",
      languageBody: [
        "To use the Bootstrap glyphicons, add the following line inside the <head> section of your HTML page:",
        "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>",
        "Note: No downloading or installation is required!",
      ],
      codeName: 'language-css',
      codeDescription: "<i class='glyphicon glyphicon- cloud'></i>",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_icons_bs"
    },
    {
      languageId: 13,
      languageTitle: "Google Icons",
      languageBody: [
        "To use the Google icons, add the following line inside the <head> section of your HTML page:",
        "<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>",
        "Note: No downloading or installation is required!",
      ],
      codeName: 'language-css',
      codeDescription: "<i class='material- icons'>cloud</i>",
      codeEditorLink: "https://www.w3schools.com/css/tryit.asp?filename=trycss_icons_google"
    },
  ],
};

export default viewCssLanguage;
