#!/usr/bin/env python

import random, string

def randname(n):
    randlst = [random.choice(string.ascii_letters + string.digits) for i in range(n)]
    return ''.join(randlst)

for i in range(1000):
    name = randname(10)
    print("{", end='')
    print("id: {},".format(i), end='')
    print(" name: '{}',".format(name), end='')
    print(" kana: '{}',".format(name), end='')
    print(" roma: '{}',".format(name), end='')
    print(" wattage: '{}'".format(random.randint(0,1000)), end='')
    print("},")