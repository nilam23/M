import random

def GetRandomIndex():
	with open('words.txt', 'r') as file:
		content=file.readlines()

	limit=len(content)
	index=random.randint(1, limit)
	file.close()
	return (index)

def GetRandomWord():
	index=GetRandomIndex()
	with open('words.txt', 'r') as file:
		i=1
		while i<=index:
			word=file.readline()
			word=word.strip()
			if i==index:
				return word
			i=i+1
