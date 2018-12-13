import time

j = 25
def minute():
    i = 5
    while(i>0):
        time.sleep(1)
        i -= 1
        print(i)
        
while(j>0):
    minute()
    j -= 1
    print(j)