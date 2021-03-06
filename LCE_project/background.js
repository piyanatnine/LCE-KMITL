// -> กดปุ่มicon -> นำคำไปแปลงภาษา -> copyลงclipboard 
function getword(info) {// get string form user selection
    console.log("Change" + info.selectionText + "Right?");
    var text = get_true_typing(info.selectionText);
    textToClipboard(text);
}
  
function textToClipboard(text){ // put string to cilpboard
    var copy_text = document.createElement("textarea");
    document.body.appendChild(copy_text);
    copy_text.value = text;
    copy_text.select();
    document.execCommand("copy");
    document.body.removeChild(copy_text);
  }

// main dict th en function
function dict_th_en(alphabet) { // get a sting return converted string  (convert en-th from keybord)
    var arrey_line_1_en = ["1", "!", "2", "@", "3", "#", "4", "$", "5", "%", "6", "^", "7", "&", "8", "*", "9", "(", "0", ")", "-", "_", "=", "+"];
    var arrey_line_1_th = ["ๅ", "+", "/", "๑", "-", "๒", "ภ", "๓", "ถ", "๔", "ุ", "ู", "ึ", "฿", "ค", "๕", "ต", "๖", "จ", "๗", "ข", "๘", "ช", "๙"];
    var arrey_line_2_en = ["q", "Q", "w", "W", "e", "E", "r", "R", "t", "T", "y", "Y", "u", "U", "i", "I", "o", "O", "p", "P", "[", "{", "]", "}", "\\", "|"];
    var arrey_line_2_th = ["ๆ", "๐", "ไ", "\"", "ำ", "ฎ", "พ", "ฑ", "ะ", "ธ", "ั", "ํ", "ี", "๊", "ร", "ณ", "น", "ฯ", "ย", "ญ", "บ", "ฐ", "ล", ",", "ฃ", "ฅ"];
    var arrey_line_3_en = ["a", "A", "s", "S", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", ";", ":", "\'", "\""];
    var arrey_line_3_th = ["ฟ", "ฤ", "ห", "ฆ", "ก", "ฏ", "ด", "โ", "เ", "ฌ", "้", "็", "่", "๋", "า", "ษ", "ส", "ศ", "ว", "ซ", "ง", "."];
    var arrey_line_4_en = ["z", "Z", "x", "X", "c", "C", "v", "V", "b", "B", "n", "N", "m", "M", ",", "<", ".", ">", "/", "?"];
    var arrey_line_4_th = ["ผ", "(", "ป", ")", "แ", "ฉ", "อ", "ฮ", "ิ", "ฺ", "ื", "์", "ท", "?", "ม", "ฒ", "ใ", "ฬ", "ฝ", "ฦ"];
    var arrey_all_en = arrey_line_1_en + arrey_line_2_en + arrey_line_3_en + arrey_line_4_en
    var arrey_all_th = arrey_line_1_th + arrey_line_2_th + arrey_line_3_th + arrey_line_4_th
    if (arrey_all_th.includes(alphabet)) {
        alphabet_out = arrey_all_en[arrey_all_th.indexOf(alphabet)];
    } else {
        alphabet_out = arrey_all_th[arrey_all_en.indexOf(alphabet)];
    }
    return alphabet_out
}

function get_true_typing(text_input) { //input string and return converted string 
    var string_out = ""
    var arrey_problem_1_en = ["-", "/"]
    var arrey_problem_1_th = ["ข", "ฝ"]
    for (let start = 0; start < text_input.length; start++) {
       
        if(text_input.slice(start, start + 1) == " "){
            string_out += " "
        }
        if(text_input.charCodeAt(start) == 44){
            string_out += "ม"
        }
        else if(arrey_problem_1_en.includes(text_input.slice(start, start + 1))){
            string_out += arrey_problem_1_th[arrey_problem_1_en.indexOf(text_input.slice(start, start + 1))]
        }
        else if(arrey_problem_1_th.includes(text_input.slice(start, start + 1))){
            string_out += arrey_problem_1_en[arrey_problem_1_th.indexOf(text_input.slice(start, start + 1))]
        }
        else {
            string_out += dict_th_en(text_input.slice(start, start + 1));
        }
    }
    return string_out
}
chrome.contextMenus.create({
	title: "LCE-Project", 
	contexts:["selection"], 
	//onClicked: getword  <--- ย้ายไปล่าง
  });
//Eventเมื่อกด
chrome.contextMenus.onClicked.addListener(getword);
