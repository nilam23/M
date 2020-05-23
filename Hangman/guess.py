from GetWord import *

secretWord=''

def getTheAttempts(word):
	while True:
		try:
			attempt=int(input(f"\n\nEnter no of attempts (>={len(word)} and <26) you want to make: "))
			if attempt>=len(word) and attempt<26:
				return (attempt)
			else:
				print('Not a correct choice. Enter again.')
		except ValueError:
			print('Input is not an Integer. Enter again.')

def letUserGuess(attempt, word):
	global secretWord
	(i, checkedLetters)=(0, [])
	temp=list(secretWord)
	while i<attempt:
		print(f"\nRemaining attempts={attempt-i}")
		ch=input('Enter your next guess:')
		(index, flag)=(0, 0)
		for char in word:
			if char in checkedLetters:
				if char!=ch:
					index+=1
					continue
				else:
					index+=1
					for c in word[index:]:
						if c==ch:
							temp[index]=ch
							secretWord=''.join(temp)
							print(f"BINGO! {secretWord}")
							flag+=1
							break
						index+=1
					break
			else:
				if char==ch:
					checkedLetters.append(ch)
					temp[index]=ch
					secretWord=''.join(temp)
					print(f"BINGO! {secretWord}")
					flag+=1
					break
			index+=1
		if flag==0:
			print(f"{ch} is not in the remaining part of the word.")
		i+=1

	if secretWord==word:
		print('\nSuccess!')
	else:
		print(f'\nYour turn is over. The word was "{word}". Try next time!')

def main():
	global secretWord
	print('\t\t--Welcome--\n')
	word=GetRandomWord()
	secretWord= '*' * len(word)
	print('User is going to guess the word:', secretWord)
	attempt=getTheAttempts(word)
	letUserGuess(attempt, word)

if __name__ == '__main__':
	main()
