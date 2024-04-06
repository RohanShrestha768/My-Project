# Nested loop to create star symbol
row=int(input("How many rows? :"))
col=int(input("How many columns? :"))
col=row+row-5
mid=col//2
for i in range(row):
    for j in range(col):
        if i==2 or i==row-3 or i+j==mid or j-i== mid or i-j==2 or i+j==col+1:
            print("@", end="")
        else:
            print(" ",end="")
    print()
        