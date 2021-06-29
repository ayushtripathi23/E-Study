const viewParticularLanguage = {
  language: "HTML",
  description: [
    {
      languageId: 0,

      languageTitle: "HTML Documents",
      languageBody: [
        "All HTML documents must start with a document type declaration: <!DOCTYPE html>.",
        "The HTML document itself begins with <html> and ends with </html>.",
        "The visible part of the HTML document is between <body> and </body>.",
      ],
      codeName: 'language-markup',
      codeDescription: "<!DOCTYPE html> \n < html > \n <body> \n <h1>My First Heading</h1> \n<p>My first paragraph.</p> \n</body> \n</html >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"
    },
    {
      languageId: 0,
      languageTitle: "The <!DOCTYPE> Declaration",
      languageBody: [
        " The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.",
        "It must only appear once, at the top of the page (before any HTML tags).",
        "The <!DOCTYPE> declaration is not case sensitive.",
        "The <!DOCTYPE> declaration for HTML5 is:",
      ],
      codeName: 'language-markup',
      codeDescription: "<!DOCTYPE html>",
      codeEditorLink: ""
    },
    {
      languageId: 0,
      languageTitle: "HTML Headings",
      languageBody: [
        "HTML headings are defined with the <h1> to <h6> tags.",
        "<h1> defines the most important heading. <h6> defines the least important heading:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1>This is heading 1</h1> \n <h2>This is heading 2</h2>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_headings"
    },
    {
      languageId: 0,
      languageTitle: "HTML Paragraphs",
      languageBody: ["HTML paragraphs are defined with the <p> tag:"],
      codeName: 'language-markup',
      codeDescription: "<p>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_paragraphs"
    },
    {
      languageId: 0,
      languageTitle: "HTML Links",
      languageBody: [
        "HTML links are defined with the <a> tag:",
        "The link's destination is specified in the href attribute. ",
        "Attributes are used to provide additional information about HTML elements.",
        "You will learn more about attributes in a later chapter.",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com'>This is a link</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_link"
    },
    {
      languageId: 0,
      languageTitle: "HTML Images",
      languageBody: [
        "HTML images are defined with the <img> tag.",
        "The source file (src), alternative text (alt), width, and height are provided as attributes: ",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='w3schools.jpg' alt='W3Schools.com' width='104' height='142'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_img"
    },
    {
      languageId: 1,
      languageTitle: "HTML Elements",
      languageBody: [
        "The HTML element is everything from the start tag to the end tag:",
        "<tagname>Content goes here...</tagname>",
        "Examples of some HTML elements:",
        "<h1>My First Heading</h1>",
        "<p>My first paragraph.</p>",
      ],
      codeName: 'language-markup',
      codeDescription: "<tagname>Content goes here...</tagname>",
      codeEditorLink: ""
    },
    {
      languageId: 1,
      languageTitle: "Nested HTML Elements",
      languageBody: [
        "HTML elements can be nested (this means that elements can contain other elements).",
        "All HTML documents consist of nested HTML elements.",
        "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):",
      ],
      codeName: 'language-markup',
      codeDescription: "<html>\n< body >\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body >\n</html >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements"
    },
    {
      languageId: 1,
      languageTitle: "Example Explained",
      languageBody: [
        "The <html> element is the root element and it defines the whole HTML document.",
        "It has a start tag <html> and an end tag </html>.",
        "Then, inside the <html> element there is a <body> element:",
        "The <body> element defines the document's body.",
        "It has a start tag <body> and an end tag </body>.",
        "Then, inside the <body> element there are two other elements: <h1> and <p>:",
      ],
      codeName: 'language-markup',
      codeDescription: "< body >\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body >",
      codeEditorLink: ""
    },
    {
      languageId: 1,
      languageTitle: "Empty HTML Elements",
      languageBody: [
        "HTML elements with no content are called empty elements.",
        "The <br> tag defines a line break, and is an empty element without a closing tag:",
        "Then, inside the <html> element there is a <body> element:",
        "The <body> element defines the document's body.",
        "It has a start tag <body> and an end tag </body>.",
        "Then, inside the <body> element there are two other elements: <h1> and <p>:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>This is a <br> paragraph with a line break.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
    },
    //HTML ATTRIBUTES
    {
      languageId: 2,
      languageTitle: "HTML Attributes",
      languageBody: [
        "All HTML elements can have attributes",
        "Attributes provide additional information about elements",
        "Attributes are always specified in the start tag",
        "Attributes usually come in name/value pairs like: name='value'",
        "The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com'>Visit W3Schools</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_link"
    },
    {
      languageId: 2,
      languageTitle: "The src Attribute",
      languageBody: [
        "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:",
        "There are two ways to specify the URL in the src attribute:",
        "1. Absolute URL - Links to an external image that is hosted on another website. Example: src='https://www.w3schools.com/images/img_girl.jpg'.",
        "2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src='img_girl.jpg'. If the URL begins with a slash, it will be relative to the domain. Example: src='/images/img_girl.jpg'.",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='img_girl.jpg'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_img_src"
    },
    {
      languageId: 2,
      languageTitle: "The width and height Attributes",
      languageBody: [
        "The <img> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='img_girl.jpg' width='500' height='600'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_img"
    },
    {
      languageId: 2,
      languageTitle: "The alt Attribute",
      languageBody: [
        "The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader.Example",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='img_girl.jpg' alt='Girl with a jacket'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_alt"
    },
    {
      languageId: 2,
      languageTitle: "The lang Attribute",
      languageBody: [
        "You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.",
        "The following example specifies English as the language:",
        "Country codes can also be added to the language code in the lang attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.",
        "The following example specifies English as the language and United States as the country:",
      ],
      codeName: 'language-markup',
      codeDescription: "<!DOCTYPE html>\n< html lang='en' >\n<body>\n...\n</body>\n</html >",
      codeEditorLink: ""
    },
    {
      languageId: 2,
      languageTitle: "The title Attribute",
      languageBody: [
        "The title attribute defines some extra information about an element.",
        "The value of the title attribute will be displayed as a tooltip when you mouse over the element:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p title='I'm a tooltip'>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_title"
    },
    {
      languageId: 2,
      languageTitle: "Single or Double Quotes?",
      languageBody: [
        "Double quotes around attribute values are the most common in HTML, but single quotes can also be used.",
        "In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p title='John 'ShotGun' Nelson'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_single_double"
    },
    //HTML HEADING
    {
      languageId: 3,
      languageTitle: "HTML Headings",
      languageBody: [
        "HTML headings are defined with the <h1> to <h6> tags.",
        "<h1> defines the most important heading. <h6> defines the least important heading.",
        "Search engines use the headings to index the structure and content of your web pages.",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings"
    },
    {
      languageId: 3,
      languageTitle: "Bigger Headings",
      languageBody: [
        "Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1 style='font- size: 60px;'>Heading 1</h1>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_size"
    },
    {
      languageId: 3,
      languageTitle: "HTML Exercises",
      languageBody: [],
      codeName: 'language-markup',
      codeDescription: "<p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>",
      codeEditorLink: ""
    },
    //HTML Paragraphs
    {
      languageId: 4,
      languageTitle: "HTML Paragraphs",
      languageBody: [
        "The HTML <p> element defines a paragraph.",
        "A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs1"
    },
    {
      languageId: 4,
      languageTitle: "HTML Display",
      languageBody: [
        "You cannot be sure how HTML will be displayed.",
        "Large or small screens, and resized windows will create different results.",
        "With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.",
        "The browser will automatically remove any extra spaces and lines when the page is displayed:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>\nThis paragraph\ncontains a lot of lines\nin the source code,\nbut the browser\nignores it.\n</p >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs2"
    },
    {
      languageId: 4,
      languageTitle: "HTML Horizontal Rules",
      languageBody: [
        "The <hr> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.",
        "The <hr> element is used to separate content (or define a change) in an HTML page:",
        "The <hr> tag is an empty tag, which means that it has no end tag.",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1>This is heading 1</h1>\n<p>This is some text.</p>\n<hr>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_hr"
    },
    {
      languageId: 4,
      languageTitle: "HTML Line Breaks",
      languageBody: [
        "The HTML <br> element defines a line break.",
        "Use <br> if you want a line break (a new line) without starting a new paragraph:",
        "The <br> tag is an empty tag, which means that it has no end tag.",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>This is<br>a paragraph<br>with line breaks.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs"
    },
    {
      languageId: 4,
      languageTitle: "The Poem Problem",
      languageBody: ["This poem will display on a single line:"],
      codeName: 'language-markup',
      codeDescription: "<p>\n  My Bonnie lies over the ocean.\n  My Bonnie lies over the sea.\n  My Bonnie lies over the ocean.\n        Oh, bring back my Bonnie to me.\n</p >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_poem"
    },
    {
      languageId: 4,
      languageTitle: "Solution - The HTML <pre> Element",
      languageBody: [
        "The HTML <pre> element defines preformatted text.",
        "The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:",
      ],
      codeName: 'language-markup',
      codeDescription: "<pre>\n  My Bonnie lies over the ocean.\n  My Bonnie lies over the sea.\n  My Bonnie lies over the ocean.\n        Oh, bring back my Bonnie to me.\n</pre>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_pre"
    },
    {
      languageId: 4,
      languageTitle: "HTML Exercises",
      languageBody: [],
      codeName: 'language-markup',
      codeDescription: "<html>\n< body >\n</body >\n</html >",
      codeEditorLink: ""
    },

    //HTML STYLES
    {
      languageId: 5,
      languageTitle: "HTML Styles",
      languageBody: [
        "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
      ],
      codeName: 'language-markup',
      codeDescription: "I am Big",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_intro"
    },
    {
      languageId: 5,
      languageTitle: "The HTML Style Attribute",
      languageBody: [
        "Setting the style of an HTML element, can be done with the style attribute.",
        "The HTML style attribute has the following syntax:",
        "The property is a CSS property. The value is a CSS value.",
      ],
      codeName: 'language-markup',
      codeDescription: "<tagname style='property: value;'>",
      codeEditorLink: ""
    },
    {
      languageId: 5,
      languageTitle: "Background Color",
      languageBody: [
        "The CSS background-color property defines the background color for an HTML element.",
      ],
      codeName: 'language-markup',
      codeDescription: "<body style='background- color: powderblue; '>\n<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n</body >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color"
    },
    {
      languageId: 5,
      languageTitle: "Text Color",
      languageBody: [
        "The CSS color property defines the text color for an HTML element:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1 style='color: blue; '>This is a heading</h1>\n<p style = 'color:red;'>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color"
    },
    {
      languageId: 5,
      languageTitle: "Fonts",
      languageBody: [
        "The CSS font-family property defines the font to be used for an HTML element:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1 style='font- family: verdana; '>This is a heading</h1>\n<p style = 'font-family:courier;'>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_font-family"
    },
    {
      languageId: 5,
      languageTitle: "Text Size",
      languageBody: [
        "The CSS font-size property defines the text size for an HTML element:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1 style='font- size: 300 %; '>This is a heading</h1>\n<p style = 'font-size:160%;'>This is a paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_font-size"
    },
    {
      languageId: 5,
      languageTitle: "Text Alignment",
      languageBody: [
        "The CSS text-align property defines the horizontal text alignment for an HTML element:",
      ],
      codeName: 'language-markup',
      codeDescription: "<h1 style='text- align: center; '>Centered Heading</h1>\n<p style = 'text-align:center;'>Centered paragraph.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_text-align"
    },
    //HTML FORMATTING
    {
      languageId: 6,
      languageTitle: "HTML Text Formatting",
      languageBody: [
        "HTML contains several elements for defining text with a special meaning.",
      ],
      codeName: 'language-markup',
      codeDescription: "This text is bold",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_intro"
    },
    {
      languageId: 6,
      languageTitle: "HTML Formatting Elements",
      languageBody: [
        "Formatting elements were designed to display special types of text:",
        "<b> - Bold text",
        "<strong> - Important text",
        "<i> - Italic text",
        "<em> - Emphasized text",
        "<mark> - Marked text",
        "<small> - Smaller text",
        "<del> - Deleted text",
        "<ins> - Inserted text",
        "<sub> - Subscript text",
        "<sup> - Superscript text",
      ],
      codeName: 'language-markup',
      codeDescription: "<b>This text is bold</b>",
      codeEditorLink: ""
    },
    {
      languageId: 6,
      languageTitle: "HTML <b> and <strong> Elements",
      languageBody: [
        "The HTML <b> element defines bold text, without any extra importance.",
        "The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold.",
      ],
      codeName: 'language-markup',
      codeDescription: "<tagname style='property: value;'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_b"
    },
    {
      languageId: 6,
      languageTitle: "HTML <b> and <strong> Elements",
      languageBody: [
        "The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.",
        "Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.",
        "The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.",
        "Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress.",
      ],
      codeName: 'language-markup',
      codeDescription: "<strong>This text is important!</strong>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_strong"
    },
    {
      languageId: 6,
      languageTitle: "HTML <small> Element",
      languageBody: ["The HTML <small> element defines smaller text:"],
      codeName: 'language-markup',
      codeDescription: "<small>This is some smaller text.</small>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_small"
    },
    {
      languageId: 6,
      languageTitle: "HTML <mark> Element",
      languageBody: [
        "The HTML <mark> element defines text that should be marked or highlighted:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>Do not forget to buy <mark>milk</mark> today.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_mark"
    },
    {
      languageId: 6,
      languageTitle: "HTML <del> Element",
      languageBody: [
        "The HTML <del> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>My favorite color is <del>blue</del> red.</p>>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_del"
    },
    {
      languageId: 6,
      languageTitle: "HTML <ins> Element",
      languageBody: [
        "The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_del_ins"
    },
    {
      languageId: 6,
      languageTitle: "HTML <sub> Element",
      languageBody: [
        "The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>This is <sub>subscripted</sub> text.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
    },
    {
      languageId: 6,
      languageTitle: "HTML <sup> Element",
      languageBody: [
        "The HTML <sup> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>This is <sup>superscripted</sup> text.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sup"
    },
    //HTML Quotation and Citation Elements
    {
      languageId: 7,
      languageTitle: "HTML Quotation and Citation Elements",
      languageBody: [
        "In this chapter we will go through the <blockquote>,<q>, <abbr>, <address>, <cite>, and <bdo> HTML elements.",
      ],
      codeName: 'language-markup',
      codeDescription: "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation\norganization, WWF works in 100 countries and is supported by more than one million members in\nthe United States and close to five million globally.",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_intro2"
    },
    {
      languageId: 7,
      languageTitle: "HTML <blockquote> for Quotations",
      languageBody: [
        "The HTML <blockquote> element defines a section that is quoted from another source.",
        "Browsers usually indent <blockquote> elements.",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>Here is a quote from WWF's website:</p>\n< blockquote cite='http://www.worldwildlife.org/who/index.html' >\nFor 50 years, WWF has been protecting the future of nature.\nThe world's leading conservation organization,\nWWF works in 100 countries and is supported by\n1.2 million members in the United States and\nclose to 5 million globally.\n</blockquote >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_blockquote"
    },
    {
      languageId: 7,
      languageTitle: "HTML <q> for Short Quotations",
      languageBody: [
        "The HTML <q> tag defines a short quotation.",
        "Browsers normally insert quotation marks around the quotation.",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_q"
    },
    {
      languageId: 7,
      languageTitle: "HTML <abbr> for Abbreviations",
      languageBody: [
        "The HTML <abbr> tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.'', 'Dr.'', 'ASAP', 'ATM'.",
        "Marking abbreviations can give useful information to browsers, translation systems and search-engines.",
        "Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element. ",
      ],
      codeName: 'language-markup',
      codeDescription: "<p>The <abbr title='World Health Organization'>WHO</abbr> was founded in 1948.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_abbr"
    },
    {
      languageId: 7,
      languageTitle: "HTML <address> for Contact Information",
      languageBody: [
        "The HTML <address> tag defines the contact information for the author/owner of a document or an article.",
        "The contact information can be an email address, URL, physical address, phone number, social media handle, etc.",
        "The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element. ",
      ],
      codeName: 'language-markup',
      codeDescription: "<address>\nWritten by John Doe.< br >\nVisit us at: <br>\nExample.com<br>\nBox 564, Disneyland<br>\nUSA\n</address>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_address"
    },
    {
      languageId: 7,
      languageTitle: "HTML <cite> for Work Title",
      languageBody: [
        "The HTML <cite> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).",
        "Note: A person's name is not the title of a work.",
        "The text in the <cite> element usually renders in italic.",
      ],
      codeName: 'language-markup',
      codeDescription: "<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_cite"
    },
    {
      languageId: 7,
      languageTitle: "HTML <bdo> for Bi-Directional Override",
      languageBody: [
        "BDO stands for Bi-Directional Override.",
        "The HTML <bdo> tag is used to override the current text direction:",
      ],
      codeName: 'language-markup',
      codeDescription: "<bdo dir='rtl'>This text will be written from right to left</bdo>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_bdo"
    },
    //HTML COMMENTS
    {
      languageId: 8,
      languageTitle: "HTML Comments",
      languageBody: [
        "You can add comments to your HTML source by using the following syntax:",
        "Notice that there is an exclamation point (!) in the start tag, but not in the end tag.",
        "With comments you can place notifications and reminders in your HTML code:",
        "Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:",
      ],
      codeName: 'language-markup',
      codeDescription: "<!-- Remember to add more information here -->",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_comment"
    },
    //HTML CSS
    {
      languageId: 9,
      languageTitle: "HTML Styles - CSS",
      languageBody: [
        "CSS stands for Cascading Style Sheets.",
        "CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
        "Cascading Style Sheets (CSS) is used to format the layout of a webpage.",
        "With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 9,
      languageTitle: "Using CSS",
      languageBody: [
        "CSS can be added to HTML documents in 3 ways:",
        "Inline - by using the style attribute inside HTML elements",
        "Internal - by using a <style> element in the <head> section",
        "External - by using a <link> element to link to an external CSS file",
        "The most common way to add CSS, is to keep the styles in external CSS files. However, in this tutorial we will use inline and internal styles, because this is easier to demonstrate, and easier for you to try it yourself.",
      ],
      codeName: 'language-css',
      codeDescription: "",
      codeEditorLink: ""
    },
    {
      languageId: 9,
      languageTitle: "Inline CSS",
      languageBody: [
        "An inline CSS is used to apply a unique style to a single HTML element.",
        "An inline CSS uses the style attribute of an HTML element.",
        "The following example sets the text color of the <h1> element to blue, and the text color of the <p> element to red:",
      ],
      codeName: 'language-css',
      codeDescription: "<h1 style='color: blue;''>A Blue Heading</h1>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline"
    },
    {
      languageId: 9,
      languageTitle: "Internal CSS",
      languageBody: [
        "An internal CSS is used to define a style for a single HTML page.",
        "An internal CSS is defined in the <head> section of an HTML page, within a <style> element.",
        "The following example sets the text color of ALL the <h1> elements (on that page) to blue, and the text color of ALL the <p> elements to red. In addition, the page will be displayed with a 'powderblue' background color: ",
      ],
      codeName: 'language-css',
      codeDescription: "<style>\nbody { background- color: powderblue;\n}\nh1   { color: blue; }\np    { color: red; }\n</style >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_internal"
    },
    {
      languageId: 9,
      languageTitle: "External CSS",
      languageBody: [
        "An external style sheet is used to define the style for many HTML pages.",
        "To use an external style sheet, add a link to it in the <head> section of each HTML page:",
        "The external style sheet can be written in any text editor. The file must not contain any HTML code, and must be saved with a .css extension. ",
        "Here is what the 'styles.css' file looks like:",
      ],
      codeName: 'language-css',
      codeDescription: "<head>\n< link rel='stylesheet' href='styles.css' >\n</head >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_external"
    },
    {
      languageId: 9,
      languageTitle: "CSS Colors, Fonts and Sizes",
      languageBody: [
        "Here, we will demonstrate some commonly used CSS properties. You will learn more about them later.",
        "The CSS color property defines the text color to be used.",
        "The CSS font-family property defines the font to be used.",
        "The CSS font-size property defines the text size to be used.",
      ],
      codeName: 'language-css',
      codeDescription: "<style>\nh1 {\n      color: blue;\n      font- family: verdana;\n  font- size: 300 %;\n}\np {\n  color: red;\n  font - family: courier;\n  font - size: 160 %;\n}\n</style >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_fonts"
    },
    {
      languageId: 9,
      languageTitle: "CSS Border",
      languageBody: [
        "The CSS border property defines a border around an HTML element.",
        "Tip: You can define a border for nearly all HTML elements.",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  border: 2px solid powderblue;\n    }",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_borders"
    },
    {
      languageId: 9,
      languageTitle: "CSS Padding",
      languageBody: [
        "The CSS padding property defines a padding (space) between the text and the border.",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  border: 2px solid powderblue;\n      padding: 30px;\n    }",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_padding"
    },
    {
      languageId: 9,
      languageTitle: "CSS Margin",
      languageBody: [
        "The CSS margin property defines a margin (space) outside the border.",
      ],
      codeName: 'language-css',
      codeDescription: "p {\n  border: 2px solid powderblue;\n      margin: 50px;\n    }",
      codeEditorLink: ""
    },
    {
      languageId: 9,
      languageTitle: "Link to External CSS",
      languageBody: [
        "External style sheets can be referenced with a full URL or with a path relative to the current web page.",
      ],
      codeName: 'language-css',
      codeDescription: "<link rel='stylesheet' href='https://www.w3schools.com/html/styles.css'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_external_url"
    },
    // HTML LINKS
    {
      languageId: 10,
      languageTitle: "HTML Links - Hyperlinks",
      languageBody: [
        "HTML links are hyperlinks.",
        "You can click on a link and jump to another document.",
        "When you move the mouse over a link, the mouse arrow will turn into a little hand.",
        "The HTML <a> tag defines a hyperlink. It has the following syntax:",
        "The most important attribute of the <a> element is the href attribute, which indicates the link's destination.",
        "The link text is the part that will be visible to the reader.",
        "Clicking on the link text, will send the reader to the specified URL address.",
        "By default, links will appear as follows in all browsers:",
        "An unvisited link is underlined and blue",
        "A visited link is underlined and purple",
        "An active link is underlined and red",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com/'>Visit W3Schools.com!</a>'",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools"
    },
    {
      languageId: 10,
      languageTitle: "HTML Links - The target Attribute",
      languageBody: [
        "By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.",
        "The target attribute specifies where to open the linked document.",
        "The target attribute can have one of the following values:",
        "_self - Default. Opens the document in the same window/tab as it was clicked",
        "_blank - Opens the document in a new window or tab",
        "_parent - Opens the document in the parent frame",
        "_top - Opens the document in the full body of the window",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com/' target='_blank'>Visit W3Schools!</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_target"
    },
    {
      languageId: 10,
      languageTitle: "Absolute URLs vs. Relative URLs",
      languageBody: [
        "Both examples above are using an absolute URL (a full web address) in the href attribute.",
        "A local link (a link to a page within the same website) is specified with a relative URL (without the 'https://www' part):",
      ],
      codeName: 'language-markup',
      codeDescription: "<h2>Absolute URLs</h2>\n< p > <a href='https://www.w3.org/'>W3C</a></p>\n<p><a href='https://www.google.com/'>Google</a></p>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links"
    },
    {
      languageId: 10,
      languageTitle: "HTML Links - Use an Image as a Link",
      languageBody: [
        "To use an image as a link, just put the <img> tag inside the <a> tag:",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='default.asp'>\n<img src = 'smiley.gif' alt = 'HTML tutorial' style = 'width:42px;height:42px;'>\n</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_image"
    },
    {
      languageId: 10,
      languageTitle: "Link to an Email Address",
      languageBody: [
        "Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='mailto: someone@example.com'>Send email</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_email"
    },
    {
      languageId: 10,
      languageTitle: "Button as a Link",
      languageBody: [
        "To use an HTML button as a link, you have to add some JavaScript code.",
        "JavaScript allows you to specify what happens at certain events, such as a click of a button:",
      ],
      codeName: 'language-markup',
      codeDescription: "<button onclick='document.location = 'default.asp''>HTML Tutorial</button>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_button_element"
    },
    {
      languageId: 10,
      languageTitle: "Link Titles",
      languageBody: [
        "The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com/html/' title='Go to W3Schools HTML section'>Visit our HTML Tutorial</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_title"
    },
    {
      languageId: 10,
      languageTitle: "More on Absolute URLs and Relative URLs",
      languageBody: [],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com/html/default.asp'>HTML tutorial</a>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_external_url"
    },
    // HTML IMAGES
    {
      languageId: 11,
      languageTitle: "HTML Images",
      languageBody: [
        "Images can improve the design and the appearance of a web page.",
      ],
      codeName: 'language-markup',
      codeDescription: "<a href='https://www.w3schools.com/html/default.asp'>HTML tutorial</a>",
      codeEditorLink: ""
    },
    {
      languageId: 11,
      languageTitle: "HTML Images Syntax",
      languageBody: [
        "The HTML <img> tag is used to embed an image in a web page.",
        "Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.",
        "The <img> tag is empty, it contains attributes only, and does not have a closing tag.",
        "The <img> tag has two required attributes:",
        "src - Specifies the path to the image",
        "alt - Specifies an alternate text for the image",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='url' alt='alternatetext'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_chania"
    },
    {
      languageId: 11,
      languageTitle: "The src Attribute",
      languageBody: [
        "The required src attribute specifies the path (URL) to the image.",
        "Note: When a web page loads; it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page,",
        "otherwise your visitors will get a broken link icon. The broken link icon and the alt text are shown if the browser cannot find the image.",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_alt_chania"
    },
    {
      languageId: 11,
      languageTitle: "The alt Attribute",
      languageBody: [
        "The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).",
        "The value of the alt attribute should describe the image:",
        "If a browser cannot find an image, it will display the value of the alt attribute:",
      ],
      codeName: 'language-markup',
      codeDescription: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_alt_chania"
    },
    // HTML TABLES
    {
      languageId: 12,
      languageTitle: "Define an HTML Table",
      languageBody: [
        "The <table> tag defines an HTML table.",
        "Each table row is defined with a <tr> tag. Each table header is defined with a <th> tag. Each table data/cell is defined with a <td> tag.",
        "By default, the text in <th> elements are bold and centered.",
        "By default, the text in <td> elements are regular and left-aligned.",
      ],
      codeName: 'language-markup',
      codeDescription: "<table style='width: 100 % '>\n        < tr >\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Age</th>\n  </tr >\n  <tr>\n    <td>Jill</td>\n    <td>Smith</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>Eve</td>\n    <td>Jackson</td>\n    <td>94</td>\n  </tr>\n</table >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Add a Border",
      languageBody: [
        "To add a border to a table, use the CSS border property:",
      ],
      codeName: 'language-css',
      codeDescription: "table, th, td {\n  border: 1px solid black;\n    }",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Collapsed Borders",
      languageBody: [
        "To let the borders collapse into one border, add the CSS border-collapse property:",
      ],
      codeName: 'language-css',
      codeDescription: "table, th, td {\n  border: 1px solid black;\n    }\n",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Add Cell Padding",
      languageBody: [
        "Cell padding specifies the space between the cell content and its borders.",
        "If you do not specify a padding, the table cells will be displayed without padding.",
        "To set the padding, use the CSS padding property:",
      ],
      codeName: 'language-css',
      codeDescription: "table, th, td {\n  border: 1px solid black;\n      border- collapse: collapse;\n}",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_collapse"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Left-align Headings",
      languageBody: [
        "By default, table headings are bold and centered.",
        "To left-align the table headings, use the CSS text-align property:",
      ],
      codeName: 'language-css',
      codeDescription: "th {\n  text- align: left;\n}",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_headings_left"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Add Border Spacing",
      languageBody: [
        "Border spacing specifies the space between the cells.",
        "To set the border spacing for a table, use the CSS border-spacing property:",
      ],
      codeName: 'language-css',
      codeDescription: "table {\n  border- spacing: 5px;\n}",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_cellspacing"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Cell that Spans Many Columns",
      languageBody: [
        "To make a cell span more than one column, use the colspan attribute:",
      ],
      codeName: 'language-markup',
      codeDescription: "<table style='width: 100 % '>\n        < tr >\n    <th>Name</th>\n    <th colspan='2'>Telephone</th>\n  </tr >\n  <tr>\n    <td>Bill Gates</td>\n    <td>55577854</td>\n    <td>55577855</td>\n  </tr>\n</table >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_colspan"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Cell that Spans Many Rows",
      languageBody: [
        "To make a cell span more than one row, use the rowspan attribute:",
      ],
      codeName: 'language-markup',
      codeDescription: "<table style='width: 100 % '>\n        < tr >\n    <th>Name:</th>\n    <td>Bill Gates</td>\n  </tr >\n  <tr>\n    <th rowspan='2'>Telephone:</th>\n    <td>55577854</td>\n  </tr>\n  <tr>\n    <td>55577855</td>\n  </tr>\n</table >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_rowspan"
    },
    {
      languageId: 12,
      languageTitle: "HTML Table - Add a Caption",
      languageBody: ["To add a caption to a table, use the <caption> tag:"],
      codeName: 'language-markup',
      codeDescription: "<table style='width: 100 % '>\n        < tr >\n    <th>Name:</th>\n    <td>Bill Gates</td>\n  </tr >\n  <tr>\n    <th rowspan='2'>Telephone:</th>\n    <td>55577854</td>\n  </tr>\n  <tr>\n    <td>55577855</td>\n  </tr>\n</table >",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_tables2"
    },
    {
      languageId: 12,
      languageTitle: "A Special Style for One Table",
      languageBody: [
        "To define a special style for one particular table, add an id attribute to the table:",
      ],
      codeName: 'language-css',
      codeDescription: "<img#t01 {\n  width: 100 %;\n      background- color: #f1f1c1;}",
      codeEditorLink: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_id1"
    },
  ],
};

export default viewParticularLanguage;
