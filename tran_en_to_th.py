"""
trans fuction
"""
from tran_dict import trans_alpha_en_to_th
import timeit
def trans(text):
    """call tran_alpha from tran_dict and return text has trans"""
    trantext = ""
    for i in text:
        trantext += trans_alpha_en_to_th(i)
    return "Error" if len(trantext) != len(text) or trantext == " " or trantext == "" else trantext
print(main(input()))
