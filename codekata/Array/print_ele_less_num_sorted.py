#print all elements lesser than k in sorted order

n,k=map(int,input().split())
a=list(map(int,input().split()))
b=[]
for i in range(len(a)):
	if(a[i]<k):
		b.append(a[i])
if(len(b)==0):
	print("-1")
else:
  	print(*sorted(b))
  
