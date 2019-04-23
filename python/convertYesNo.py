def bool_to_word(boolean):
    if boolean == True:
        return 'Yes'
    else:
        return 'No'


print(bool_to_word(True))
# Yes





def bool_to_word(bool):
    return "Yes" if bool else "No"

print(bool_to_word(True))
# Yes






def bool_to_word(bool):
    if bool:
        return "Yes"
    return "No"

print(bool_to_word(bool))
# Yes
