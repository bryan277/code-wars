def find_short(s):
    return min(len(x) for x in s.split())

print(find_short('I am the greatest'))
#1
#other solution
def find_short1(s):
    sList = s.split()
    shortestLength = len(sList[0])
    for item in sList:
        if len(item) < shortestLength:
            shortestLength = len(item)
    return shortestLength

print(find_short1('I am the greatest'))
#1
