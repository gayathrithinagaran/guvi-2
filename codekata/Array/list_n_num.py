#list of n numbers

n=int(input())
a=list(map(int,input().split()))
b=sorted(a)
print(b[len(b)-2])