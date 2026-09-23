import fs from 'node:fs/promises';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const outputDir = '.';
const workbook = Workbook.create();
const responses = workbook.worksheets.add('Form Responses');
const guide = workbook.worksheets.add('Form Question Guide');
const lists = workbook.worksheets.add('Dropdown Lists');

const font = 'Arial';
const navy = '#1F4E78';
const blue = '#D9EAF7';
const paleYellow = '#FFF2CC';
const grid = '#D9E2F3';

const fields = [
  ['Timestamp','Automatic','System','Automatic form submission time','Required'],
  ['Application ID','Short answer','Application','School-generated unique ID','Required'],
  ['Academic Year','Dropdown','Application','e.g., 2026-27','Required'],
  ['Admission Applying For','Dropdown','Application','Play Group / Nursery / LKG / UKG','Required'],
  ['Class / Section Preference','Short answer','Application','Optional preferred section','Optional'],
  ['Date of Application','Date','Application','Date submitted','Required'],
  ['Admission Source','Dropdown','Application','Walk-in / Website / Referral / Event / Other','Required'],
  ['Sibling Already in School?','Dropdown','Application','Yes / No','Required'],
  ['Sibling Name(s) and Class','Short answer','Application','If applicable','Optional'],
  ['Student First Name','Short answer','Student','As on birth certificate','Required'],
  ['Student Middle Name','Short answer','Student','As on birth certificate','Optional'],
  ['Student Last Name','Short answer','Student','As on birth certificate','Required'],
  ['Student Full Name','Short answer','Student','For official records','Required'],
  ['Date of Birth','Date','Student','DD/MM/YYYY','Required'],
  ['Gender','Dropdown','Student','Female / Male / Other / Prefer not to say','Required'],
  ['Birth Certificate Number','Short answer','Student','As printed on certificate','Required'],
  ['Birth Certificate Issuing Authority','Short answer','Student','Municipality / Panchayat / Other','Required'],
  ['Birth Certificate Issue Date','Date','Student','Date on certificate','Optional'],
  ['Place of Birth','Short answer','Student','City, State, Country','Required'],
  ['Nationality','Short answer','Student','Nationality','Required'],
  ['Religion','Short answer','Student','Optional school record','Optional'],
  ['Mother Tongue','Short answer','Student','Primary language spoken at home','Required'],
  ['Languages Spoken at Home','Short answer','Student','List all relevant languages','Optional'],
  ['Aadhaar / National ID Number','Short answer','Student','Only if school policy permits collection','Optional'],
  ['Student Photo Uploaded?','Dropdown','Student','Yes / No','Required'],
  ['Child Lives With','Dropdown','Student','Both parents / Mother / Father / Guardian / Other','Required'],
  ['Residential Address Line 1','Short answer','Address','House/flat and street','Required'],
  ['Residential Address Line 2','Short answer','Address','Area / landmark','Optional'],
  ['City / Town','Short answer','Address','City or town','Required'],
  ['State / Province','Short answer','Address','State','Required'],
  ['Country','Short answer','Address','Country','Required'],
  ['PIN / Postal Code','Short answer','Address','Keep as text','Required'],
  ['Same as Correspondence Address?','Dropdown','Address','Yes / No','Required'],
  ['Correspondence Address','Paragraph','Address','Complete address if different','Optional'],
  ['Father / Parent 1 Full Name','Short answer','Parent 1','As on identity document','Required'],
  ['Parent 1 Relationship','Dropdown','Parent 1','Father / Mother / Guardian / Other','Required'],
  ['Parent 1 Date of Birth','Date','Parent 1','Optional school record','Optional'],
  ['Parent 1 Nationality','Short answer','Parent 1','Nationality','Required'],
  ['Parent 1 Education','Short answer','Parent 1','Highest qualification','Optional'],
  ['Parent 1 Occupation','Short answer','Parent 1','Job title / business','Required'],
  ['Parent 1 Organization','Short answer','Parent 1','Employer or business name','Optional'],
  ['Parent 1 Office Address','Paragraph','Parent 1','Work address','Optional'],
  ['Parent 1 Mobile Number','Short answer','Parent 1','Include country code if applicable','Required'],
  ['Parent 1 WhatsApp Number','Short answer','Parent 1','For school communication','Optional'],
  ['Parent 1 Email Address','Short answer','Parent 1','School communication email','Required'],
  ['Parent 1 Aadhaar / National ID','Short answer','Parent 1','Only if school policy permits collection','Optional'],
  ['Mother / Parent 2 Full Name','Short answer','Parent 2','As on identity document','Required'],
  ['Parent 2 Relationship','Dropdown','Parent 2','Father / Mother / Guardian / Other','Required'],
  ['Parent 2 Date of Birth','Date','Parent 2','Optional school record','Optional'],
  ['Parent 2 Nationality','Short answer','Parent 2','Nationality','Required'],
  ['Parent 2 Education','Short answer','Parent 2','Highest qualification','Optional'],
  ['Parent 2 Occupation','Short answer','Parent 2','Job title / business','Required'],
  ['Parent 2 Organization','Short answer','Parent 2','Employer or business name','Optional'],
  ['Parent 2 Office Address','Paragraph','Parent 2','Work address','Optional'],
  ['Parent 2 Mobile Number','Short answer','Parent 2','Include country code if applicable','Required'],
  ['Parent 2 WhatsApp Number','Short answer','Parent 2','For school communication','Optional'],
  ['Parent 2 Email Address','Short answer','Parent 2','School communication email','Required'],
  ['Parent 2 Aadhaar / National ID','Short answer','Parent 2','Only if school policy permits collection','Optional'],
  ['Legal Guardian Name','Short answer','Guardian','Complete only if applicable','Optional'],
  ['Legal Guardian Relationship','Short answer','Guardian','Relationship to child','Optional'],
  ['Legal Guardian Mobile Number','Short answer','Guardian','Include country code if applicable','Optional'],
  ['Legal Guardian Email Address','Short answer','Guardian','Email address','Optional'],
  ['Custody / Guardianship Notes','Paragraph','Guardian','Provide relevant legal or care instructions','Optional'],
  ['Primary Contact Person','Short answer','Communication','Name for first school call','Required'],
  ['Primary Contact Relationship','Short answer','Communication','Relationship to child','Required'],
  ['Primary Contact Mobile','Short answer','Communication','Primary school contact number','Required'],
  ['Secondary Contact Person','Short answer','Communication','Backup contact name','Required'],
  ['Secondary Contact Relationship','Short answer','Communication','Relationship to child','Required'],
  ['Secondary Contact Mobile','Short answer','Communication','Backup contact number','Required'],
  ['Emergency Contact 1 Name','Short answer','Emergency','Person other than parents where possible','Required'],
  ['Emergency Contact 1 Relationship','Short answer','Emergency','Relationship to child','Required'],
  ['Emergency Contact 1 Mobile','Short answer','Emergency','Phone number','Required'],
  ['Emergency Contact 2 Name','Short answer','Emergency','Additional emergency contact','Optional'],
  ['Emergency Contact 2 Relationship','Short answer','Emergency','Relationship to child','Optional'],
  ['Emergency Contact 2 Mobile','Short answer','Emergency','Phone number','Optional'],
  ['Pediatrician / Family Doctor Name','Short answer','Medical','Doctor name','Optional'],
  ['Pediatrician / Family Doctor Phone','Short answer','Medical','Clinic phone','Optional'],
  ['Blood Group','Dropdown','Medical','A+, A-, B+, B-, AB+, AB-, O+, O-, Unknown','Required'],
  ['Allergies','Paragraph','Medical','Food, medication, environmental, or none','Required'],
  ['Medical Conditions / Diagnoses','Paragraph','Medical','Asthma, epilepsy, diabetes, etc., or none','Required'],
  ['Regular Medication','Paragraph','Medical','Dose/timing and authorization details, or none','Required'],
  ['Dietary Restrictions','Paragraph','Medical','Vegetarian, vegan, religious, allergy-related, or none','Required'],
  ['Special Educational Needs / Learning Support','Paragraph','Medical','Support needs, assessments, or none','Optional'],
  ['Mobility / Accessibility Needs','Paragraph','Medical','Support needs, or none','Optional'],
  ['Immunization Record Current?','Dropdown','Medical','Yes / No / In progress','Required'],
  ['Doctor Instructions / Medical Notes','Paragraph','Medical','Care plan or emergency instructions','Optional'],
  ['Hospital Preference','Short answer','Medical','Preferred hospital in emergency','Optional'],
  ['Authorized to Administer First Aid?','Dropdown','Consent','Yes / No','Required'],
  ['Authorized for Emergency Medical Care?','Dropdown','Consent','Yes / No','Required'],
  ['Previous School / Playgroup Name','Short answer','Education','If applicable','Optional'],
  ['Previous School Address','Paragraph','Education','If applicable','Optional'],
  ['Previous School Leaving Date','Date','Education','If applicable','Optional'],
  ['Reason for Leaving Previous School','Paragraph','Education','If applicable','Optional'],
  ['Transport Required?','Dropdown','Transport','Yes / No / Undecided','Required'],
  ['Transport Pickup Address','Paragraph','Transport','If different from residence','Optional'],
  ['Preferred Pickup / Drop Time','Short answer','Transport','Time window','Optional'],
  ['Person(s) Authorized to Collect Child','Paragraph','Safety','Name, relation, mobile, ID reference','Required'],
  ['Person(s) Not Authorized to Collect Child','Paragraph','Safety','If applicable','Optional'],
  ['Photo / Video Consent','Dropdown','Consent','Yes / No / Limited school use only','Required'],
  ['School Communication Consent','Dropdown','Consent','Yes / No','Required'],
  ['Data Processing Consent','Dropdown','Consent','Yes / No','Required'],
  ['Parent Declaration Accepted?','Checkbox','Consent','Parent confirms information is accurate','Required'],
  ['Parent / Guardian Full Name for Declaration','Short answer','Consent','Typed name serves as declaration','Required'],
  ['Declaration Date','Date','Consent','Date accepted','Required'],
  ['Birth Certificate Submitted?','Dropdown','Documents','Yes / No / Pending','Required'],
  ['Student Photo Submitted?','Dropdown','Documents','Yes / No / Pending','Required'],
  ['Immunization Record Submitted?','Dropdown','Documents','Yes / No / Pending','Required'],
  ['Address Proof Submitted?','Dropdown','Documents','Yes / No / Pending','Required'],
  ['Parent ID Proof Submitted?','Dropdown','Documents','Yes / No / Pending','Required'],
  ['Previous School Record Submitted?','Dropdown','Documents','Yes / No / Not applicable','Required'],
  ['Custody / Guardianship Document Submitted?','Dropdown','Documents','Yes / No / Not applicable','Required'],
  ['Other Documents Received','Paragraph','Documents','List documents and dates','Optional'],
  ['Application Fee Paid?','Dropdown','Administration','Yes / No / Waived','Required'],
  ['Application Fee Receipt Number','Short answer','Administration','Receipt / transaction reference','Optional'],
  ['Application Status','Dropdown','Administration','New / Under Review / Documents Pending / Waitlisted / Offered / Accepted / Rejected / Withdrawn','Required'],
  ['Interview / Interaction Date','Date','Administration','If scheduled','Optional'],
  ['Admission Decision Date','Date','Administration','Date decided','Optional'],
  ['Admission Notes','Paragraph','Administration','Internal notes; do not place in parent-facing form','Optional'],
  ['Reviewed By','Short answer','Administration','School staff name','Optional'],
  ['Last Updated','Date','Administration','School staff update','Optional']
];

// Responses sheet: formatted blank Google Forms response-table template.
responses.getRangeByIndexes(0, 0, 1, fields.length).values = [fields.map(x => x[0])];
responses.getRangeByIndexes(0, 0, 1, fields.length).format = {
  fill: navy, font: { name: font, size: 10, bold: true, color: '#FFFFFF' },
  horizontalAlignment: 'center', verticalAlignment: 'center', wrapText: true,
  borders: { preset: 'all', style: 'thin', color: '#FFFFFF' }
};
responses.getRangeByIndexes(1, 0, 300, fields.length).format = {
  font: { name: font, size: 10, color: '#1F2937' }, verticalAlignment: 'center',
  borders: { preset: 'insideHorizontal', style: 'thin', color: '#E5E7EB' }
};
responses.getRangeByIndexes(1, 0, 300, fields.length).format.rowHeight = 21;
responses.getRangeByIndexes(0, 0, 1, fields.length).format.rowHeight = 54;
responses.showGridLines = false;
responses.freezePanes.freezeRows(1);
responses.freezePanes.freezeColumns(3);
responses.tabColor = navy;
for (let c = 0; c < fields.length; c++) {
  responses.getRangeByIndexes(0, c, 301, 1).format.columnWidth = c < 10 ? 18 : 20;
}

const dropdowns = {
  'Academic Year': ['2026-27','2027-28','2028-29'],
  'Admission Applying For': ['Play Group','Nursery','LKG','UKG'],
  'Admission Source': ['Walk-in','School website','Parent referral','Social media','School event','Other'],
  'Sibling Already in School?': ['Yes','No'],
  'Gender': ['Female','Male','Other','Prefer not to say'],
  'Student Photo Uploaded?': ['Yes','No'],
  'Child Lives With': ['Both parents','Mother','Father','Legal guardian','Other'],
  'Same as Correspondence Address?': ['Yes','No'],
  'Parent 1 Relationship': ['Father','Mother','Legal guardian','Other'],
  'Parent 2 Relationship': ['Mother','Father','Legal guardian','Other'],
  'Blood Group': ['A+','A-','B+','B-','AB+','AB-','O+','O-','Unknown'],
  'Immunization Record Current?': ['Yes','No','In progress'],
  'Authorized to Administer First Aid?': ['Yes','No'],
  'Authorized for Emergency Medical Care?': ['Yes','No'],
  'Transport Required?': ['Yes','No','Undecided'],
  'Photo / Video Consent': ['Yes','No','Limited school use only'],
  'School Communication Consent': ['Yes','No'],
  'Data Processing Consent': ['Yes','No'],
  'Birth Certificate Submitted?': ['Yes','No','Pending'],
  'Student Photo Submitted?': ['Yes','No','Pending'],
  'Immunization Record Submitted?': ['Yes','No','Pending'],
  'Address Proof Submitted?': ['Yes','No','Pending'],
  'Parent ID Proof Submitted?': ['Yes','No','Pending'],
  'Previous School Record Submitted?': ['Yes','No','Not applicable'],
  'Custody / Guardianship Document Submitted?': ['Yes','No','Not applicable'],
  'Application Fee Paid?': ['Yes','No','Waived'],
  'Application Status': ['New','Under Review','Documents Pending','Waitlisted','Offered','Accepted','Rejected','Withdrawn']
};
for (let c = 0; c < fields.length; c++) {
  const label = fields[c][0];
  if (dropdowns[label]) responses.getRangeByIndexes(1, c, 300, 1).dataValidation = { rule: { type: 'list', values: dropdowns[label] } };
  if (fields[c][1] === 'Date') responses.getRangeByIndexes(1, c, 300, 1).format.numberFormat = 'dd/mm/yyyy';
}
const t = responses.tables.add(`A1:${columnName(fields.length)}301`, true, 'AdmissionResponses');
t.style = 'TableStyleMedium2';

// Form-building guide.
guide.mergeCells('A2:E2');
guide.getRange('A2').values = [['Play School Admission Form — Question Guide']];
guide.getRange('A2:E2').format = { font: { name: font, size: 15, bold: true, color: navy }, verticalAlignment: 'center' };
guide.getRange('A3:E3').merge();
guide.getRange('A3').values = [['Use this tab to build your Google Form. Copy the question rows in order; the Form Responses tab already has matching response headers. Mark all Required items as required in Google Forms.']];
guide.getRange('A3:E3').format = { font: { name: font, size: 10, italic: true, color: '#475569' }, wrapText: true, verticalAlignment: 'center' };
guide.getRange('A5:E5').values = [['Question / Response Column','Google Forms Answer Type','Form Section','Guidance / Options','Required?']];
guide.getRange('A5:E5').format = { fill: navy, font: { name: font, size: 10, bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', verticalAlignment: 'center', wrapText: true };
guide.getRangeByIndexes(5, 0, fields.length, 5).values = fields;
guide.getRangeByIndexes(5, 0, fields.length, 5).format = { font: { name: font, size: 10, color: '#1F2937' }, verticalAlignment: 'center', wrapText: true, borders: { preset: 'insideHorizontal', style: 'thin', color: '#E5E7EB' } };
guide.getRange('A1:E1').format.rowHeight = 8;
guide.getRange('A2:E2').format.rowHeight = 28;
guide.getRange('A3:E3').format.rowHeight = 42;
guide.getRange('A5:E5').format.rowHeight = 30;
['A','B','C','D','E'].forEach((col, i) => guide.getRange(`${col}:${col}`).format.columnWidth = [34,18,17,45,12][i]);
guide.showGridLines = false;
guide.freezePanes.freezeRows(5);
guide.tabColor = '#5B9BD5';
guide.tables.add(`A5:E${fields.length + 5}`, true, 'FormQuestions').style = 'TableStyleMedium2';

// Dropdown reference list for quick copy/paste into Forms.
lists.mergeCells('A2:C2');
lists.getRange('A2').values = [['Google Forms Dropdown Options']];
lists.getRange('A2:C2').format = { font: { name: font, size: 15, bold: true, color: navy } };
lists.getRange('A3:C3').values = [['Question','Allowed options','Use in Google Form']];
lists.getRange('A3:C3').format = { fill: navy, font: { name: font, size: 10, bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', verticalAlignment: 'center' };
const listRows = Object.entries(dropdowns).map(([q, options]) => [q, options.join('\n'), 'Dropdown']);
lists.getRangeByIndexes(3, 0, listRows.length, 3).values = listRows;
lists.getRangeByIndexes(3, 0, listRows.length, 3).format = { font: { name: font, size: 10 }, verticalAlignment: 'center', wrapText: true, borders: { preset: 'insideHorizontal', style: 'thin', color: '#E5E7EB' } };
lists.getRange(`A4:C${listRows.length + 3}`).format.rowHeight = 45;
lists.getRange('A:A').format.columnWidth = 36;
lists.getRange('B:B').format.columnWidth = 35;
lists.getRange('C:C').format.columnWidth = 18;
lists.showGridLines = false;
lists.freezePanes.freezeRows(3);
lists.tabColor = '#A5A5A5';
lists.tables.add(`A3:C${listRows.length + 3}`, true, 'DropdownOptions').style = 'TableStyleMedium2';

workbook.recalculate();
const check = await workbook.inspect({ kind: 'table', range: 'Form Responses!A1:J6', include: 'values,formulas', tableMaxRows: 6, tableMaxCols: 10 });
console.log(check.ndjson);
const errors = await workbook.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!', options: { useRegex: true, maxResults: 100 }, summary: 'final formula error scan' });
console.log(errors.ndjson);
const preview = await workbook.render({ sheetName: 'Form Question Guide', range: 'A1:E25', scale: 1.25, format: 'png' });
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(`${outputDir}/form_question_guide_preview.png`, new Uint8Array(await preview.arrayBuffer()));
const file = await SpreadsheetFile.exportXlsx(workbook);
await file.save(`${outputDir}/play_school_admission_google_form_response_template.xlsx`);

function columnName(n) {
  let name = '';
  while (n > 0) { const r = (n - 1) % 26; name = String.fromCharCode(65 + r) + name; n = Math.floor((n - 1) / 26); }
  return name;
}
