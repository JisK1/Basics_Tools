import random
import sys

#takes command line arguments for the maximum and minimum numbers. 

arg1 = sys.argv[1]
arg2 = sys.argv[2]

#function to check that a string is an int
def isInt(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False

if isInt(arg1) & isInt(arg2):
    maxNum = int(arg1)
    minNum = int(arg2)


#the prited string will be sent to javascript.
print(str(random.randint(minNum,maxNum)))
#must flush the stdout or electron won't take the output in real time.
sys.stdout.flush()


