

dict = {
    1: 1,
    3: 9,
    5: 21,
    7: 15,
    11: 19,
    25: 25,
    17: 23
}

# số nghịch đảo của
# 1 la 1
# 3 là 9
# 5 là 21
# 7 là 15
# 11 là 19
# 25 là 25
# 17 là 23


input = 'CWZCWTQKASZTYDYSZ'
a = 7
b = 22
reverse_a = dict[a]


text = {}

for str in input:
    if ord('A') <= ord(str) and ord('Z') >= ord(str):
        y = ord(str) - ord('A')
        text[str] = reverse_a * (y - b) % 26
        result_y = ord('A') + reverse_a * (y - b) % 26
        print(chr(result_y), end = '')
    else:
        print(end = ' ')

print(text.values())
for txt in text.values():
    print(chr(txt + ord('A')))



Rc = [1] * 20

for i in range(1, 10):
    Rc[i] = Rc[i - 1] * 2
    print(hex(Rc[i]))









