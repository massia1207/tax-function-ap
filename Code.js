function doGet(){
  let html = HtmlService.createTemplateFromFile('sidebar');
  return html.evaluate();
}

function onOpen() {
  SpreadsheetApp.getUi() 
      .createMenu('TAX FUNCTIONS')
      .addItem('Tax Function Sidebar', 'showSideBar')
      .addSeparator()
      .addItem('Tax Function Popup', 'showModal')
      .addToUi();
}

function showSideBar(){
  var html = HtmlService.createTemplateFromFile('sidebar').evaluate().setTitle('Tax Functions');  
  SpreadsheetApp.getUi().showSidebar(html); 
}

function showModal(){
  var html = HtmlService.createTemplateFromFile('sidebar').evaluate().setWidth(800).setHeight(900);  
  SpreadsheetApp.getUi().showModelessDialog(html, 'Tax Functions'); 
}

//TO INCLUDE STYLE SHEET
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}




