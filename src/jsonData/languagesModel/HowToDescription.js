const HowToDescription = {
  language: "HOW TO",
  description: [
    {
      languageId: 0,

      languageTitle: "How TO - Menu Icon",
      languageBody: [
        "Learn how to create a menu icon with CSS.",
        "How To Create a Menu Icon",
        "If you are not using an icon library, you can create a basic menu icon with CSS:",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
        "Example Explained",
        "The width and the height property specifies the width and height of each bar.",
        "We have added a black background-color, and the top and bottom margin is used to create some distance between each bar."
      ],
      codeName: 'language-css',
      codeDescription: "div {\n  width: 35px;\n      height: 5px;\n      background- color: black;\n  margin: 6px 0;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon"
    },
    {
      languageId: 0,

      languageTitle: "Animated Icon",
      languageBody: [
        "Use CSS and JavaScript to change the menu icon to a 'cancel / remove' icon when it is clicked on:",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
        "Step 3) Add JavaScript:",
        "Example Explained",
        "HTML & CSS: We use the same styles as before, only this time, we wrap a container element around each <div> element and we specify a class name for each.",
        "The container element is used to show a pointer symbol when the user moves the mouse over the divs (bars). When it is clicked on, it will execute a JavaScript function that adds a new class name to it, which will change the styles of each horizontal bar: the first and the last bar is transformed and rotated to the letter 'x'. The bar in the middle fades out and becomes invisible."
      ],
      codeName: 'language-css',
      codeDescription: "<div class='container' onclick='myFunction(this)'>\n        <div class= 'bar1' ></div>\n  <div class='bar2'></div>\n  <div class='bar3'></div>\n</div >",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js"
    },
    {
      languageId: 1,

      languageTitle: "How TO - Collapsibles/Accordion",
      languageBody: [
        "Learn how to create an accordion (collapsible content).",
        "Accordion",
        "Accordions are useful when you want to toggle between hiding and showing large amount of content:",
        "Create An Accordion",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
        "Style the accordion:",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: ".accordion {\n  background- color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100 %;\n  text- align: left;\nborder: none;\noutline: none;\ntransition: 0.4s;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion"
    },
    {
      languageId: 1,

      languageTitle: "Animated Accordion (Slide Down)",
      languageBody: [
        "To make an animated accordion, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.",
        "Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes:",
      ],
      codeName: 'language-css',
      codeDescription: ".panel {\n  padding: 0 18px;\n      background- color: white;\n  max- height: 0;\noverflow: hidden;\ntransition: max - height 0.2s ease - out;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate"
    },
    {
      languageId: 2,

      languageTitle: "How TO - Tabs",
      languageBody: [
        "Learn how to create tabs with CSS and JavaScript.",
        "Tabs",
        "Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects:",
        "Create Toggleable Tabs",
        "Step 1) Add HTML:",
        "Create buttons to open specific tab content. All <div> elements with class='tabcontent' are hidden by default (with CSS & JS). When the user clicks on a button - it will open the tab content that 'matches' this button.",
        "Step 2) Add CSS:",
        "Style the buttons and the tab content:",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: ".tab {\n  overflow: hidden;\n      border: 1px solid #ccc;\n      background- color: #f1f1f1;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs"
    },
    {
      languageId: 3,

      languageTitle: "How TO - Vertical Tabs",
      languageBody: [
        "Learn how to create a vertical tab menu with CSS and JavaScript",
        "Vertical Tabs",
        "Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects.",
        "Create Togglable Vertical Tabs",
        "Step 1) Add HTML:",
        "Create buttons to open the specific tab content. All <div> elements with class='tabcontent' are hidden by default (with CSS & JS) - when the user clicks on a button - it will open the tab content that 'matches' this button.",
        "Step 2) Add CSS:",
        "Style the buttons and the tab content:",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: ".tab {\n  float: left;\n      border: 1px solid #ccc;\n      background- color: #f1f1f1;\n  width: 30 %;\n  height: 300px;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_vertical_tabs"
    },
    {
      languageId: 4,

      languageTitle: "How TO - Tab Headers",
      languageBody: [
        "Learn how to create tab headers with CSS and JavaScript.",
        "Tab Headers",
        "Click on the 'city' buttons to display the appropriate header:",
        "Create Togglable Tab Headers",
        "Step 1) Add HTML:",
        "Create buttons to open specific tab content. All <div> elements with class='tabcontent' are hidden by default (with CSS & JS). When the user clicks on a button - it will open the tab content that 'matches' this button.",
        "Step 2) Add CSS:",
        "Style the buttons and the tab content:",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: ".tablink {\n  background- color: #555;\n  color: white;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  font- size: 17px;\nwidth: 25 %;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tab_header"
    },
    {
      languageId: 5,

      languageTitle: "How TO - Full Page Tabs",
      languageBody: [
        "Learn how to create full page tabs, that covers the entire browser window, with CSS and JavaScript.",
        "Full Page Tabs",
        "Click on the links to display the 'current' page:",
        "Create One Page Tabs",
        "Step 1) Add HTML:",
        "Create buttons to open specific tab content. All <div> elements with class='tabcontent' are hidden by default (with CSS & JS). When the user clicks on a button - it will open the tab content that 'matches' this button.",
        "Step 2) Add CSS:",
        "Style the links and the tab content (full page):",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: "body, html {\n  height: 100 %;\n      margin: 0;\n      font- family: Arial;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_full_page_tabs"
    },
    {
      languageId: 6,

      languageTitle: "How TO - Hover Tabs",
      languageBody: [
        "Learn how to change tabs on hover, with CSS and JavaScript.",
        "Hover Tabs",
        "Move the mouse over one of the menu buttons to show the tab content:",
        "Create Hoverable Vertical Tabs",
        "Step 1) Add HTML:",
        "Create buttons to open the specific tab content. All <div> elements with class='tabcontent' are hidden by default (with CSS & JS) - when the user move the mouse over a button - it will open the tab content that 'matches' this button.",
        "Step 2) Add CSS:",
        "Style the buttons and the tab content:",
        "Step 3) Add JavaScript:"
      ],
      codeName: 'language-css',
      codeDescription: ".tab {\n  float: left;\n      border: 1px solid #ccc;\n      background- color: #f1f1f1;\n  width: 30 %;\n  height: 300px;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_hover_tabs"
    },
    {
      languageId: 7,

      languageTitle: "Top Navigation Bar",
      languageBody: [
        "Create A Top Navigation Bar",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
      ],
      codeName: 'language-css',
      codeDescription: ".topnav {\n  background- color: #333;\n  overflow: hidden;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_topnav"
    },
    {
      languageId: 8,

      languageTitle: "How TO - Responsive Top Navigation",
      languageBody: [
        "Learn how to create a responsive top navigation menu with CSS and JavaScript.",
        "Responsive Navigation Bar",
        "Resize the browser window to see how the responsive navigation menu works:",
        "Create A Responsive Topnav",
        "Step 1) Add HTML:",
        "The link with class='icon' is used to open and close the topnav on small screens.",
        "Step 2) Add CSS:"
      ],
      codeName: 'language-css',
      codeDescription: ".topnav {\n  background- color: #333;\n  overflow: hidden;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav"
    },
    {
      languageId: 9,

      languageTitle: "How TO - Search Menu",
      languageBody: [
        "Learn how to create a search menu to filter links with JavaScript.",
        "Search/Filter Menu",
        "How to search for links in a navigation menu:",
        "Create A Search Menu",
        "Step 1) Add HTML:",
        "Note: We use href='#'' in this demo since we do not have a page to link it to. In real life this should be a real URL to a specific page.",
        "Step 2) Add CSS:",
        "Style the search box and the navigation menu:",
        "Tip: Remove toUpperCase() if you want to perform a case-sensitive search."
      ],
      codeName: 'language-css',
      codeDescription: "#mySearch {\n  width: 100 %;\n      font- size: 18px;\n  padding: 11px;\n  border: 1px solid #ddd;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_search_menu"
    },
    {
      languageId: 10,

      languageTitle: "How TO - Search Bar",
      languageBody: [
        "Learn how to add a search box inside a responsive navigation menu.",
        "Create A Search Bar",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
      ],
      codeName: 'language-css',
      codeDescription: ".topnav {\n  overflow: hidden;\n      background- color: #e9e9e9;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_searchbar"
    },
    {
      languageId: 11,

      languageTitle: "How TO - Fixed Sidebar",
      languageBody: [
        "Learn how to create a fixed side navigation menu with CSS.",
        "Create a Fixed Sidebar",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
      ],
      codeName: 'language-css',
      codeDescription: ".sidenav {\n  height: 100 %; /* Full-height: remove this if you want 'auto' height */\n     width: 160px; /* Set the width of the sidebar */\n      position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n      z- index: 1; /* Stay on top */\n  top: 0; /* Stay at the top */\n  left: 0;\n  background- color: #111; /* Black */\noverflow - x: hidden; /* Disable horizontal scroll */\npadding - top: 20px;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav_fixed"
    },
    {
      languageId: 12,

      languageTitle: "How TO - Side Navigation",
      languageBody: [
        "Learn how to create an animated, closable side navigation menu.",
        "Create an Animated Side Navigation",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
        "Step 3) Add JavaScript:",
        "The example below slides in the side navigation, and makes it 250px wide:",
        "The example below slides in the side navigation, and pushes the page content to the right (the value used to set the width of the sidenav is also used to set the left margin of the 'page content'):",
        "The example below also slides in the side navigation, and pushes the page content to the right, only this time, we add a black background color with a 40% opacity to the body element, to 'highlight' the side navigation:"
      ],
      codeName: 'language-css',
      codeDescription: ".sidenav a {\n  padding: 8px 8px 8px 32px;\n      text- decoration: none;\n  font- size: 25px;\ncolor: #818181;\ndisplay: block;\ntransition: 0.3s;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav"
    },
    {
      languageId: 13,

      languageTitle: "How TO - Responsive Sidebar",
      languageBody: [
        "Learn how to create a responsive side navigation menu with CSS.",
        "Create a Responsive Sidebar",
        "Step 1) Add HTML:",
        "Step 2) Add CSS:",
      ],
      codeName: 'language-css',
      codeDescription: ".sidebar {\n  margin: 0;\n      padding: 0;\n      width: 200px;\n      background- color: #f1f1f1;\n  position: fixed;\n  height: 100 %;\n  overflow: auto;\n}",
      codeEditorLink: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidebar_responsive"
    },
  ],
};
export default HowToDescription;
