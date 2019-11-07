"""
-project(De)-
main dict
"""
def find_cha_standard_keybord(alphabet):
    """find alp in alphabet number or thia alp to shif alp and shif to alp"""
    line_1_en = ["1","!","2","@","3","#","4","$","5","%","6","^","7","&","8","*","9","(","0",")","-","_","=","+"]
    line_1_th = ["ๅ","+","/","๑","-","๒","ภ","๓","ถ","๔","ุ","ู","ึ","฿","ค","๕","ต","๖","จ","๗","ข","๘","ช","๙"]
    line_2_en = ["q","Q","w","W","e","E","r","R","t","T","y","Y","u","U","i","I","o","O","p","P","[","{","]","}","\\","|"]
    line_2_th = ["ๆ","๐","ไ","\"","ำ","ฎ","พ","ฑ","ะ","ธ","ั","ํ","ี","๊","ร","ณ","น","ฯ","ย","ญ","บ","ฐ","ล",",","ฃ","ฅ"]
    line_3_en = ["a","A","s","S","d","D","f","F","g","G","h","H","j","J","k","K","l","L",";",":","\'","\""]
    line_3_th = ["ฟ","ฤ","ห","ฆ","ก","ฏ","ด","โ","เ","ฌ","้","็","่","๋","า","ษ","ส","ศ","ว","ซ","ง","."]
    line_4_en = ["z","Z","x","X","c","C","v","V","b","B","n","N","m","M",",","<",".",">","/","?"]
    line_4_th = ["ผ","(","ป",")","แ","ฉ","อ","ฮ","ิ","ฺ","ื","์","ท","?","ม","ฒ","ใ","ฬ","ฝ","ฦ"]
    line_all_en = line_1_en+line_2_en+line_3_en+line_4_en
    line_all_th = line_1_th+line_2_th+line_3_th+line_4_th
    if alphabet in line_all_en:
        alp = line_all_th[line_all_en.index(alphabet)]
    elif alphabet in line_all_th:
        alp = line_all_en[line_all_th.index(alphabet)]
    else:
        alp = alphabet
    return alp

def get_true_typing(text):
    total = ""
    for i in text:
        total += find_cha_standard_keybord(i)
    return total
print(get_true_typing(input()))