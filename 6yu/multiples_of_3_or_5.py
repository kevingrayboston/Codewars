"""
DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
"""


def solution(number):
    if number < 0:
        return 0
    
    multiples = []
    dividing_values = [3,5]
    
    for dv in dividing_values:
        divisibles = number // dv
        i = 1
        while i <= divisibles:
            if dv*i < number and dv*i not in multiples:
                multiples.append(dv*i)
            i += 1
            
    sum = 0
    for value in multiples:
        sum += value
        
    return sum
        
        

#     multiples = []
#     three_divisibles = number // 3
#     t = 1
#     while t <= three_divisibles:
#         if 3*t < number:
#             multiples.append(3*t)
#         t += 1
    
#     five_divisibles = number // 5
#     f = 1
#     while f <= five_divisibles:
#         if 5*f < number and 5*f not in multiples:
#             multiples.append(5*f) 
#         f += 1
        
#     sum = 0
#     for value in multiples:
#         sum += value
        
#     return sum