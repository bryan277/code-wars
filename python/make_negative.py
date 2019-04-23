def make_negative( number ):
    return -abs(number)

print(make_negative(9))
#-9
print(make_negative(15))
#-15

#abs()# Python code to illustrate
# abs() built-in function
float = -54.26
print('Absolute value of integer is:',abs(float))
#Absolute value of integer is: 54.26
int = -94
print('Absolute value of float is:', abs(int))
#Absolute value of float is: 94



#other solutions
def make_negative1(number):
    if number >= 0:
        return (0 - number)
    else:
        return number

print(make_negative1(9))
#-9
