const BootstrapDescription = {
  language: "BOOTSTRAP",
  description: [
    {
      languageId: 0,

      languageTitle: "Bootstrap 3 Tutorial",
      languageBody: [
        "Try it Yourself Examples",
        "This Bootstrap tutorial contains hundreds of Bootstrap examples.",
        "With our online editor, you can edit the code, and click on a button to view the result.",
      ],
    },
    {
      languageId: 0,

      languageTitle: "Grid Classes",
      languageBody: [
        "xs (for phones - screens less than 768px wide)",
        "sm (for tablets - screens equal to or greater than 768px wide)",
        "md (for small laptops - screens equal to or greater than 992px wide)",
        "lg (for laptops and desktops - screens equal to or greater than 1200px wide)",
        "The classes above can be combined to create more dynamic and flexible layouts."
      ],
    },
    {
      languageId: 0,

      languageTitle: "Basic Structure of a Bootstrap Grid",
      languageBody: [
        "The following is a basic structure of a Bootstrap grid:",
        "First; create a row (<div class='row'>). Then, add the desired number of columns (tags with appropriate .col-*-* classes). Note that numbers in .col-*-* should always add up to 12 for each row.",
      ],
    },
    {
      languageId: 1,

      languageTitle: "Bootstrap Text/Typography",
      languageBody: [
        "Bootstrap's Default Settings",
        "Bootstrap's global default font-size is 14px, with a line-height of 1.428.",
        "This is applied to the <body> element and all paragraphs (<p>).",
        "In addition, all <p> elements have a bottom margin that equals half their computed line-height (10px by default).",
        "Bootstrap vs. Browser Defaults",
        "In this chapter, we will look at some HTML elements that will be styled a little bit differently by Bootstrap than browser defaults.",
        "By default, Bootstrap will style the HTML headings (<h1> to <h6>) in the following way:"
      ],
    },
    {
      languageId: 1,

      languageTitle: "<mark>",
      languageBody: [
        "Bootstrap will style the HTML <mark> element in the following way:",
      ],
    },
    {
      languageId: 1,

      languageTitle: "<abbr>",
      languageBody: [
        "Bootstrap will style the HTML <abbr> element in the following way:",
      ],
    },
    {
      languageId: 1,

      languageTitle: "<blockquote>",
      languageBody: [
        "Bootstrap will style the HTML <blockquote> element in the following way:",
      ],
    },
    {
      languageId: 1,

      languageTitle: "<dl>",
      languageBody: [
        "Bootstrap will style the HTML <dl> element in the following way:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Bootstrap Basic Table",
      languageBody: [
        "A basic Bootstrap table has a light padding and only horizontal dividers.",
        "The .table class adds basic styling to a table:",

      ],
    },
    {
      languageId: 2,

      languageTitle: "Striped Rows",
      languageBody: [
        "The .table-striped class adds zebra-stripes to a table:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Bordered Table",
      languageBody: [
        "The .table-bordered class adds borders on all sides of the table and cells:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Hover Rows",
      languageBody: [
        "The .table-hover class adds a hover effect (grey background color) on table rows:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Condensed Table",
      languageBody: [
        "The .table-condensed class makes a table more compact by cutting cell padding in half:",
      ],
    },
    {
      languageId: 2,

      languageTitle: "Contextual Classes",
      languageBody: [
        "Contextual classes can be used to color table rows (<tr>) or table cells (<td>):",
      ],
    },
    // bootstrap images 
    {
      languageId: 3,

      languageTitle: "Rounded Corners",
      languageBody: [
        "The .img-rounded class adds rounded corners to an image (IE8 does not support rounded corners):",
      ],
    }, {
      languageId: 3,

      languageTitle: "Circle",
      languageBody: [
        "The .img-circle class shapes the image to a circle (IE8 does not support rounded corners):",
      ],
    }, {
      languageId: 3,

      languageTitle: "Thumbnail",
      languageBody: [
        "The .img-thumbnail class shapes the image to a thumbnail:",
      ],
    },
    {
      languageId: 3,

      languageTitle: "Responsive Images",
      languageBody: [
        "Images come in all sizes. So do screens. Responsive images automatically adjust to fit the size of the screen.",
        "Create responsive images by adding an .img-responsive class to the <img> tag. The image will then scale nicely to the parent element.",
        "The .img-responsive class applies display: block; and max-width: 100%; and height: auto; to the image:"
      ],
    },
    {
      languageId: 3,

      languageTitle: "Responsive Embeds",
      languageBody: [
        "Also let videos or slideshows scale properly on any device.",
        "Classes can be applied directly to <iframe>, <embed>, <video>, and <object> elements.",
        "The following example creates a responsive video by adding an .embed-responsive-item class to an <iframe> tag (the video will then scale nicely to the parent element). The containing <div> defines the aspect ratio of the video:"
      ],
    },
    // jumbotron
    {
      languageId: 4,

      languageTitle: "Creating a Jumbotron",
      languageBody: [
        "A jumbotron indicates a big box for calling extra attention to some special content or information.",
        "A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it",
        "Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.",
        "Use a <div> element with class .jumbotron to create a jumbotron:"
      ],
    },
    {
      languageId: 4,

      languageTitle: "Jumbotron Inside Container",
      languageBody: [
        "Place the jumbotron inside the <div class='container'> if you want the jumbotron to NOT extend to the edge of the screen:",
      ],
    },
    {
      languageId: 4,

      languageTitle: "Jumbotron Outside Container",
      languageBody: [
        "Place the jumbotron outside the <div class='container'> if you want the jumbotron to extend to the screen edges:",
      ],
    },
    {
      languageId: 4,

      languageTitle: "Creating a Page Header",
      languageBody: [
        "A page header is like a section divider.",
        "The .page-header class adds a horizontal line under the heading (+ adds some extra space around the element):",
        "Example Page Header",
        "Use a <div> element with class .page-header to create a page header:"
      ],
    },
    // well
    {
      languageId: 5,

      languageTitle: "Bootstrap Wells",
      languageBody: [
        "Wells",
        "The .well class adds a rounded border around an element with a gray background color and some padding:",
      ],
    },
    // alerts
    {
      languageId: 6,

      languageTitle: "Bootstrap Alerts",
      languageBody: [
        "Alerts",
        "Bootstrap provides an easy way to create predefined alert messages:",
        "Alerts are created with the .alert class, followed by one of the four contextual classes .alert-success, .alert-info, .alert-warning or .alert-danger:"
      ],
    },
    {
      languageId: 6,

      languageTitle: "Alert Links",
      languageBody: [
        "Alerts",
        "Add the alert-link class to any links inside the alert box to create 'matching colored links':",
      ],
    },
    {
      languageId: 6,

      languageTitle: "Closing Alerts",
      languageBody: [
        "To close the alert message, add a .alert-dismissible class to the alert container. Then add class='close' and data-dismiss='alert' to a link or a button element (when you click on this the alert box will disappear).",

      ],
    },
    {
      languageId: 6,

      languageTitle: "Animated Alerts",
      languageBody: [
        "The .fade and .in classes adds a fading effect when closing the alert message:",

      ],
    },
    // buttons
    {
      languageId: 7,

      languageTitle: "Button Styles",
      languageBody: [
        "Bootstrap provides different styles of buttons:",
        "To achieve the button styles above, Bootstrap has the following classes:",
        ".btn",
        ".btn-default",
        ".btn-primary",
        ".btn-success",
        ".btn-info",
        ".btn-warning",
        ".btn-danger",
        ".btn-link",
        "The following example shows the code for the different button styles:",
        "The button classes can be used on an <a>, <button>, or <input> element:"


      ],
    },
    {
      languageId: 7,

      languageTitle: "Button Sizes",
      languageBody: [
        "Bootstrap provides four button sizes:",
        "The classes that define the different sizes are:",
        ".btn-lg",
        ".btn-sm",
        ".btn-xs",
        "The following example shows the code for different button sizes:"
      ],
    },
    {
      languageId: 7,

      languageTitle: "Block Level Buttons",
      languageBody: [
        "A block level button spans the entire width of the parent element.",
        "Add class .btn-block to create a block level button:",
      ],
    },
    // button groups 
    {
      languageId: 8,

      languageTitle: "Button Groups",
      languageBody: [
        "Bootstrap allows you to group a series of buttons together (on a single line) in a button group:",
        "Use a <div> element with class .btn-group to create a button group:",
        "Tip: Instead of applying button sizes to every button in a group, use class .btn-group-lg|sm|xs to size all buttons in the group:"
      ],
    },
    {
      languageId: 8,

      languageTitle: "Vertical Button Groups",
      languageBody: [
        "Bootstrap also supports vertical button groups:",
        "Use the class .btn-group-vertical to create a vertical button group:",
      ],
    },
    {
      languageId: 8,

      languageTitle: "Justified Button Groups",
      languageBody: [
        "To span the entire width of the screen, use the .btn-group-justified class:",
        "Use the class .btn-group-vertical to create a vertical button group:",
        "Example with <a> elements:",
        "Note: For <button> elements, you must wrap each button in a .btn-group class:"

      ],
    },
    {
      languageId: 8,

      languageTitle: "Nesting Button Groups & Dropdown Menus",
      languageBody: [
        "Nest button groups to create dropdown menus:",
      ],
    },
    // glyphicon
    {
      languageId: 9,

      languageTitle: "Glyphicons",
      languageBody: [
        "Bootstrap provides 260 glyphicons from the Glyphicons Halflings set.",
        "Glyphicons can be used in text, buttons, toolbars, navigation, forms, etc.",
        "Here are some examples of glyphicons:",
        "Envelope glyphicon: ",
        "Print glyphicon: ",
        "Search glyphicon: ",
        "Download glyphicon: "
      ],
    },
    {
      languageId: 9,

      languageTitle: "Glyphicon Syntax",
      languageBody: [
        "A glyphicon is inserted with the following syntax:",
        "The name part in the syntax above must be replaced with the proper name of the glyphicon.",
      ],
    },
    {
      languageId: 9,

      languageTitle: "Glyphicon Example",
      languageBody: [
        "A glyphicon is inserted with the following syntax:",
        "The following example shows different ways to use glyphicons:",
      ],
    },
    // badges 
    {
      languageId: 10,

      languageTitle: "Badges",
      languageBody: [
        "Badges are numerical indicators of how many items are associated with a link:",
        "The numbers (5, 10, and 2) are the badges.",
        "Use the .badge class within <span> elements to create badges:",
        "Badges can also be used inside other elements, such as buttons:",
        "The following example shows how to add badges to buttons:"
      ],
    },
    // progress bar 
    {
      languageId: 11,

      languageTitle: "Basic Progress Bar",
      languageBody: [
        "A progress bar can be used to show a user how far along he/she is in a process.",
        "Bootstrap provides several types of progress bars.",
        "A default progress bar in Bootstrap looks like this:",
        "To create a default progress bar, add a .progress class to a <div> element:",
      ],
    },
    {
      languageId: 11,

      languageTitle: "Progress Bar With Label",
      languageBody: [
        "A progress bar with a label looks like this:",
        "Remove the .sr-only class from the progress bar to show a visible percentage:",
      ],
    },
    {
      languageId: 11,

      languageTitle: "Colored Progress Bars",
      languageBody: [
        "Contextual classes are used to provide 'meaning through colors'.",
        "The contextual classes that can be used with progress bars are:",
        ".progress-bar-success",
        ".progress-bar-info",
        ".progress-bar-warning",
        ".progress-bar-danger"
      ],
    },
    // pagination
    {
      languageId: 12,

      languageTitle: "Bootstrap Pagination",
      languageBody: [
        "If you have a web site with lots of pages, you may wish to add some sort of pagination to each page.",
        "A basic pagination in Bootstrap looks like this:",

      ],
    },
    {
      languageId: 12,

      languageTitle: "Active State",
      languageBody: [
        "The active state shows what is the current page:",
        "Add class .active to let the user know which page he/she is on:",

      ],
    },
    {
      languageId: 12,

      languageTitle: "Pagination Sizing",
      languageBody: [
        "Pagination blocks can also be sized to a larger size or a smaller size:",
        "Add class .pagination-lg for larger blocks or .pagination-sm for smaller blocks:",

      ],
    },
    {
      languageId: 12,

      languageTitle: "Breadcrumbs",
      languageBody: [
        "Another form for pagination, is breadcrumbs:",
        "The .breadcrumb class indicates the current page's location within a navigational hierarchy:",

      ],
    },
    // pager
    {
      languageId: 13,

      languageTitle: "What is Pager?",
      languageBody: [
        "Pager is also a form of pagination (as described in the previous chapter).",
        "Pager provides previous and next buttons (links).",
        "To create previous/next buttons, add the .pager class to an <ul> element:"

      ],
    },
    {
      languageId: 13,

      languageTitle: "Align Buttons",
      languageBody: [
        "Use the .previous and .next classes to align each button to the sides of the page:",
      ],
    },
    // list group 
    {
      languageId: 14,

      languageTitle: "Basic List Groups",
      languageBody: [
        "The most basic list group is an unordered list with list items:",
        "To create a basic list group, use an <ul> element with class .list-group, and <li> elements with class .list-group-item:"
      ],
    },
    {
      languageId: 14,

      languageTitle: "List Group With Badges",
      languageBody: [
        "You can also add badges to a list group. The badges will automatically be positioned on the right:",
        "To create a badge, create a <span> element with class .badge inside the list item:"
      ],
    },
    // panels
    {
      languageId: 15,

      languageTitle: "Bootstrap Panels",
      languageBody: [
        "A panel in bootstrap is a bordered box with some padding around its content:",
        "Panels are created with the .panel class, and content inside the panel has a .panel-body class:"
      ],
    },
    {
      languageId: 15,

      languageTitle: "Panel Group",
      languageBody: [
        "To group many panels together, wrap a <div> with class .panel-group around them.",
        "The .panel-group class clears the bottom-margin of each panel:"
      ],
    },
    // basic dropdown
    {
      languageId: 16,

      languageTitle: "Basic Dropdown",
      languageBody: [
        "A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:",
        "Example Explained",
        "The .dropdown class indicates a dropdown menu.",
        "To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and the data-toggle='dropdown' attribute.",
        "The .caret class creates a caret arrow icon (), which indicates that the button is a dropdown.",
        "Add the .dropdown-menu class to a <ul> element to actually build the dropdown menu."
      ],
    },
    {
      languageId: 16,

      languageTitle: "Disable and Active items",
      languageBody: [
        "Highlight a specific dropdown item with the .active class (adds a blue background color).",
        "To disable an item in the dropdown menu, use the .disabled class (gets a light-grey text color and a 'no - parking - sign' icon on hover):",
      ],
    },
    {
      languageId: 16,

      languageTitle: "Dropup",
      languageBody: [
        "If you want the dropdown menu to expand upwards instead of downwards, change the <div> element with class='dropdown' to 'dropup':",
      ],
    },
  ],

};
export default BootstrapDescription;
