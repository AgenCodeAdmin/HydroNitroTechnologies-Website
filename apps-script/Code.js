var SCRIPT_PROP = PropertiesService.getScriptProperties();

function getOrCreateSpreadsheet() {
  var sheetId = SCRIPT_PROP.getProperty("sheet_id");
  var doc;
  
  if (sheetId) {
    try {
      doc = SpreadsheetApp.openById(sheetId);
    } catch (e) {
      doc = null; // ID invalid or deleted
    }
  }
  
  if (!doc) {
    // Create new spreadsheet
    doc = SpreadsheetApp.create("Hydro Nitro Leads Database");
    SCRIPT_PROP.setProperty("sheet_id", doc.getId());
    
    // Set headers
    var sheet = doc.getSheets()[0];
    sheet.appendRow(["timestamp", "name", "email", "phone", "company", "message"]);
  }
  
  return doc;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = getOrCreateSpreadsheet();
    var sheet = doc.getSheets()[0];
    
    var headers = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    
    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : (e.parameter ? (e.parameter[header] || "") : "");
    });
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    if (e.parameter) {
      sendNotificationEmail(e.parameter);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function sendNotificationEmail(data) {
  var toEmails = "madanms.172004@gmail.com,madan.ms.work@gmail.com";
  var subject = "New Contact Form Submission - Hydro Nitro";
  
  var name = data.name || 'N/A';
  var email = data.email || 'N/A';
  var phone = data.phone || 'N/A';
  var company = data.company || 'N/A';
  var message = data.message || 'N/A';
  
  var htmlBody = "" +
    "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>" +
      "<div style='background-color: #2563eb; color: white; padding: 20px; text-align: center;'>" +
        "<h2 style='margin: 0; font-size: 24px;'>New Lead Captured!</h2>" +
      "</div>" +
      "<div style='padding: 30px; background-color: #f8fafc;'>" +
        "<p style='font-size: 16px; color: #334155; margin-top: 0;'>You have received a new inquiry from your website.</p>" +
        "<table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>" +
          "<tr><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold; width: 30%;'>Name</td><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;'>" + name + "</td></tr>" +
          "<tr><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;'>Email</td><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;'>" + email + "</td></tr>" +
          "<tr><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;'>Phone</td><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;'>" + phone + "</td></tr>" +
          "<tr><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: bold;'>Company</td><td style='padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;'>" + company + "</td></tr>" +
          "<tr><td style='padding: 10px; color: #64748b; font-weight: bold; vertical-align: top;'>Message</td><td style='padding: 10px; color: #0f172a;'>" + message + "</td></tr>" +
        "</table>" +
      "</div>" +
      "<div style='background-color: #1e293b; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;'>" +
        "&copy; Hydro Nitro Technologies LLP Automated System" +
      "</div>" +
    "</div>";

  MailApp.sendEmail({
    to: toEmails,
    subject: subject,
    htmlBody: htmlBody
  });
}
