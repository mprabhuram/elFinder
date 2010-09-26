/**
 * Thai translation
 * @author Jaideejung007 (Anusuk Sangubon) <jaideejung007@gmail.com>, http://www.thzaa.com
 * @version 2010-09-26
 */
(function($) {
if (elFinder && elFinder.prototype.options && elFinder.prototype.options.i18n) 
	elFinder.prototype.options.i18n.th = {
		/* errors */
		'Root directory does not exists'        : 'โฟล์เดอร์หลักนี้ไม่มีอยู่',
		'Unable to connect to backend'          : 'ไม่สามารถเชื่อมต่อกับแบ็กเอนด์ได้',
		'Access denied'                         : 'ไม่อนุญาตให้เข้าใช้งาน',
		'Invalid backend configuration'         : 'การกำหนดค่าแบ็กเอนด์ไม่ถูกต้อง',
		'Unknown command'                       : 'ไม่รู้จักคำสั่ง',
		'Command not allowed'                   : 'คำสั่งไม่อนุญาตให้ใช้',
		'Invalid parameters'                    : 'พารามิเตอร์ไม่ถูกต้อง',
		'File not found'                        : 'ไม่พบไฟล์',
		'Invalid name'                          : 'ชื่อไม่ถูกต้อง',
		'File or folder with the same name already exists' : 'ไฟล์หรือโฟลเดอร์มีชื่อนี้อยู่แล้ว',
		'Unable to rename file'                 : 'ไม่สามารถเปลี่ยนชื่อไฟล์ได้',
		'Unable to create folder'               : 'ไม่สามารถสร้างโฟลเดอร์ได้',
		'Unable to create file'                 : 'ไม่สามารถสร้างไฟล์ได้',  
		'No file to upload'                     : 'ไม่มีไฟล์ที่จะอัพโหลด',
		'Select at least one file to upload'    : 'กรุณาเลือกไฟล์อย่างน้อยหนึ่งที่จะอัพโหลด',
		'File exceeds the maximum allowed filesize' : 'ไฟล์เกินขนาดไฟล์สูงสุดที่อนุญาตไว้',
		'Data exceeds the maximum allowed size' : 'ข้อมูลเกินขนาดสูงสุดที่อนุญาตไว้',
		'Not allowed file type'                 : 'ไม่อนุญาตให้ใช้ชนิดไฟล์นี้',
		'Unable to upload file'                 : 'ไม่สามารถอัพโหลดไฟล์ได้',
		'Unable to upload files'                : 'ไม่สามารถอัพโหลดไฟล์ได้',
		'Unable to remove file'                 : 'ไม่สามารถลบไฟล์ได้',
		'Unable to save uploaded file'          : 'ไม่สามารถบันทึกการอัพโหลดไฟล์',
		'Some files was not uploaded'           : 'มีไฟล์บางไฟล์ที่ยังไม่ได้อัพโหลด',
		'Unable to copy into itself'            : 'ไม่สามารถคัดลอกลงในที่นี้ได้',
		'Unable to move files'                  : 'ไม่สามารถย้ายไฟล์ได้',
		'Unable to copy files'                  : 'ไม่สามารถคัดลอกไฟล์ได้',
		'Unable to create file copy'            : 'ไม่สามารถสร้างสำเนาไฟล์ได้',
		'File is not an image'                  : 'ไฟล์นี้ไม่ใช่รูปภาพ',
		'Unable to resize image'                : 'ไม่สามารถปรับขนาดภาพนี้ได้',
		'Unable to write to file'               : 'ไม่สามารถเขียนไปยังไฟล์ได้',
		'Unable to create archive'              : 'ไม่สามารถสร้างไฟล์บีบอัดได้',
		'Unable to extract files from archive'  : 'ไม่สามารถแตกไฟล์จากไฟล์บีบอัดได้',
		'Unable to open broken link'            : 'ไม่สามารถเปิดลิงค์ที่เสียได้',
		'File URL disabled by connector config' : 'URL ไฟล์ถูกปิดการใช้งานโดยเชื่อมต่อผ่านการตั้งค่า',
		/* statusbar */
		'items'          : 'รายการ',
		'selected items' : 'รายการที่เลือก',
		/* commands/buttons */
		'Back'                    : 'ย้อนกลับ',
		'Reload'                  : 'รีเฟรช',
		'Open'                    : 'เปิด',
		'Preview with Quick Look' : 'ดูตัวอย่างแบบด่วน',
		'Select file'             : 'เลือกไฟล์',
		'New folder'              : 'โฟลเดอร์ใหม่',
		'New text file'           : 'ไฟล์ข้อความใหม่',
		'Upload files'            : 'อัพโหลดไฟล์',
		'Copy'                    : 'คัดลอก',
		'Cut'                     : 'ตัด',
		'Paste'                   : 'วาง',
		'Duplicate'               : 'สำเนา',
		'Remove'                  : 'ลบ',
		'Rename'                  : 'เปลี่ยนชื่อ',
		'Edit text file'          : 'แก้ไขไฟล์ข้อความ',
		'View as icons'           : 'ดูเป็นไอคอน',
		'View as list'            : 'ดูเป็นรายการ',
		'Resize image'            : 'ปรับขนาดภาพ',
		'Create archive'          : 'สร้างไฟล์บีบอัด',
		'Uncompress archive'      : 'แตกไฟล์บีบอัด',
		'Get info'                : 'คุณสมบัติ',
		'Help'                    : 'ช่วยเหลือ',
		'Dock/undock filemanger window' : 'ล๊อค/ปลอดล็อค หน้าต่างการจัดการไฟล์',
		/* upload/get info dialogs */
		'Maximum allowed files size' : 'ขนาดไฟล์สูงสุดที่อนุญาต',
		'Add field'   : 'เพิ่มช่องอัพโหลด',
		'File info'   : 'ข้อมูลไฟล์',
		'Folder info' : 'ข้อมูลโฟลเดอร์',
		'Name'        : 'ชื่อ',
		'Kind'        : 'รูปแบบ',
		'Size'        : 'ขนาด',
		'Modified'    : 'แก้ไข',
		'Permissions' : 'สิทธิ์',
		'Link to'     : 'ลิงค์ไปยัง',
		'Dimensions'  : 'ความละเอียด',
		'Confirmation required' : 'ยืนยันการดำเนินการ',
		'Are you shure you want to remove files?<br /> This cannot be undone!' : 'คุณแน่ใจว่าจะลบไฟล์นี้? <br />ซึ่งไม่สามารถกู้คืนได้',
		/* permissions */
		'read'        : 'อ่าน',
		'write'       : 'เขียน',
		'remove'      : 'ลบ',
		/* dates */
		'Jan'         : 'ม.ค.',
		'Feb'         : 'ก.พ.',
		'Mar'         : 'มี.ค.',
		'Apr'         : 'เม.ย.',
		'May'         : 'พ.ค.',
		'Jun'         : 'มิ.ย.',
		'Jul'         : 'ก.ค.',
		'Aug'         : 'ส.ค.',
		'Sep'         : 'ก.ย.',
		'Oct'         : 'ต.ค.',
		'Nov'         : 'พ.ย.',
		'Dec'         : 'ธ.ค.',
		'Today'       : 'วันนี้',
		'Yesterday'   : 'เมื่อวาน',
		/* mimetypes */
		'Unknown'                           : 'ไม่ทราบ',
		'Folder'                            : 'โฟลเดอร์',
		'Alias'                             : 'นามแฝง',
		'Broken alias'                      : 'นามแฝง Broken',
		'Plain text'                        : 'ข้อความธรรมดา',
		'Postscript document'               : 'สคริปต์เอกสาร',
		'Application'                       : 'แอพพลิเคชัน',
		'Microsoft Office document'         : 'เอกสารไมโครซอฟต์ออฟฟิส',
		'Microsoft Word document'           : 'เอกสารไมโครซอฟต์เวิร์ด',  
		'Microsoft Excel document'          : 'เอกสารไมโครซอฟต์เอกเซล',
		'Microsoft Powerpoint presentation' : 'เอกสารไมโครซอฟต์พาวเวอร์พอยท์',
		'Open Office document'              : 'เอกสารโอเพ็นออฟฟิส',
		'Flash application'                 : 'แอพพลิเคชันแฟลช',
		'XML document'                      : 'เอกสาร XML',
		'Bittorrent file'                   : 'ไฟล์บิตทอร์เรนท์',
		'7z archive'                        : 'เอกสารบีบอัด 7z',
		'TAR archive'                       : 'เอกสารบีบอัด TAR',
		'GZIP archive'                      : 'เอกสารบีบอัด GZIP',
		'BZIP archive'                      : 'เอกสารบีบอัด BZIP',
		'ZIP archive'                       : 'เอกสารบีบอัด ZIP',
		'RAR archive'                       : 'เอกสารบีบอัด RAR',
		'Javascript application'            : 'แอพพลิเคชันจาวาสคริปต์',
		'PHP source'                        : 'ซอร์สโค๊ด PHP',
		'HTML document'                     : 'เอกสาร HTML',
		'Javascript source'                 : 'ซอร์สโค๊ดจาวาสคริปต์',
		'CSS style sheet'                   : 'เอกสาร CSS',
		'C source'                          : 'ซอร์สโค๊ด C',
		'C++ source'                        : 'ซอร์สโค๊ด C++',
		'Unix shell script'                 : 'สคริปต์ Unix shell',
		'Python source'                     : 'ซอร์สโค๊ด Python',
		'Java source'                       : 'ซอร์สโค๊ด Java',
		'Ruby source'                       : 'ซอร์สโค๊ด Ruby',
		'Perl script'                       : 'สคริปต์ Perl',
		'BMP image'                         : 'รูปภาพ BMP',
		'JPEG image'                        : 'รูปภาพ JPEG',
		'GIF Image'                         : 'รูปภาพ GIF',
		'PNG Image'                         : 'รูปภาพ PNG',
		'TIFF image'                        : 'รูปภาพ TIFF',
		'TGA image'                         : 'รูปภาพ TGA',
		'Adobe Photoshop image'             : 'รูปภาพ Adobe Photoshop',
		'MPEG audio'                        : 'เสียง MPEG',
		'MIDI audio'                        : 'เสียง MIDI',
		'Ogg Vorbis audio'                  : 'เสียง Ogg Vorbis',
		'MP4 audio'                         : 'เสียง MP4',
		'WAV audio'                         : 'เสียง WAV',
		'DV video'                          : 'วีดีโอ DV',
		'MP4 video'                         : 'วีดีโอ MP4',
		'MPEG video'                        : 'วีดีโอ MPEG',
		'AVI video'                         : 'วีดีโอ AVI',
		'Quicktime video'                   : 'วีดีโอ Quicktime',
		'WM video'                          : 'วีดีโอ WM',
		'Flash video'                       : 'วีดีโอ Flash',
		'Matroska video'                    : 'วีดีโอ Matroska',
		// 'Shortcuts' : 'Клавиши',		
		'Select all files' : 'เลือกไฟล์ทั้งหมด',
		'Copy/Cut/Paste files' : 'คัดลอก/ตัด/วางไฟล์',
		'Open selected file/folder' : 'เปิดไฟล์/โฟลเดอร์ที่เลือกไว้',
		'Open/close QuickLook window' : 'เปิด/ปิดหน้าต่างดูแบบด่วน',
		'Remove selected files' : 'ลบไฟล์ที่เลือก',
		'Selected files or current directory info' : 'ไฟล์ข้อมูลที่เลือกหรือโฟลเดอร์ปัจจุบัน',
		'Create new directory' : 'สร้างโฟลเดอร์ใหม่',
		'Open upload files form' : 'เปิดแบบฟอร์มอัพโหลดไฟล์',
		'Select previous file' : 'เลือกไฟล์ก่อนหน้า',
		'Select next file' : 'เลือกไฟล์ถัดไป',
		'Return into previous folder' : 'กลับไปยังโฟลเดอร์ก่อนหน้า',
		'Increase/decrease files selection' : 'เพิ่ม/ลดการเลือกไฟล์',
		'Authors'                       : 'ผู้พัฒนา',
		'Sponsors'  : 'ผู้ให้การสนับสนุน',
		'elFinder: Web file manager'    : 'elFinder: ระบบจัดการไฟล์เว็บ',
		'Version'                       : 'เวอร์ชัน',
		'Copyright: Studio 42 LTD'      : 'ลิขสิทธิ์: Studio 42',
		'Donate to support project development' : 'บริจาคเพื่อสนับสนุนการพัฒนาโครงการ',
		'Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru' : 'ผู้เขียนโปรแกรม Javascripts/PHP: Dmitry (dio) Levashov, dio@std42.ru',
		'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru' : 'ผู้เขียนโปรแกรม Python, ข้อมูลสนับสนุน: Troex Nevelin, troex@fury.scancode.ru',
		'Design: Valentin Razumnih'     : 'ผู้ออกแบบ: Valentin Razumnyh',
		'Spanish localization'          : 'ผู้แปลภาษาสเปน',
		'Icons' : 'ไอคอน',
		'License: BSD License'          : 'ใบอนุญาต: BSD License',
		'elFinder documentation'        : 'เอกสาร elFinder',
		'Simple and usefull Content Management System' : 'การใช้งาน CMS',
		'Support project development and we will place here info about you' : 'โครงการสนับสนุนการพัฒนาและเราจะวางที่นี่ข้อมูลเกี่ยวกับคุณ',
		'Contacts us if you need help integrating elFinder in you products' : 'อีเมล์สำหรับติดต่อเรา หากคุณต้องการความช่วยเหลือในการปรังปรุงผลิตภัณฑ์ elFinder',
		'elFinder support following shortcuts' : 'สนับสนุนทางลัด elFinder ต่อไปนี้',
		'helpText' : 'การทำงานของ elFinder จะอยู่ภายใต้การควบคุมของเซิร์ฟเวอร์<br />สคริปต์นี้จะช่วยให้คุณสามารถจัดการระบบไฟล์ของคุณได้อย่างง่ายดาย เช่น ย้าย, ลบ, คัดลอก, แก้ไข, อัพโหลด, เปลี่ยนชื่อ, เปิดดูข้อมูลไฟล์ และอื่นๆ ของคุณผ่านระบบออนไลน์นี้ได้โดยง่าย<br />ภาษาไทยโดย <a href=http://www.thzaa.com target=_blank title="อนุศักดิ์ แสงอุบล(Anusuk Sangubon)">Jaideejung007</a>'	
		};
	
})(jQuery);
