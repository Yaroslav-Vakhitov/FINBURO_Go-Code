function Creator() {
  const docFile = DriveApp.getFileById("1f1zdgHj6tksZt2XLwJ2i1Mg055ld4b5WBWgVe4C9rgE");
  // это файл шаблона
  const tempFolder = DriveApp.getFolderById("1tQaKsDSv1v6N11IwMJ-k5ELNrK8-10Sm");
  // это директория для новых файлов
  var list = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var l=list.getLastRow();
  //определяем кол-во строк
  var a1 = list.getRange(2, 2).getValue()

  // сообщение
 for (var i=5; i <= l; i++) {
     const tempFile = docFile.makeCopy(tempFolder);
     // делаем копию шаблона
     const tempDocFile = DocumentApp.openById(tempFile.getId());
     // открываем созданную копию
     const body = tempDocFile.getBody();

     // тело файла копии
    var a2 = list.getRange(i, 2).getValue();
     //номер
    //var a3 = list.getRange(i, 3).getValue();
     //организация
    //var a4 = list.getRange(i, 4).getValue();
     //адрес
    //var a5 = list.getRange(i, 5).getValue();

     //обращение
    body.replaceText("{document}", a2); 
   tempDocFile.saveAndClose();
  }
}
