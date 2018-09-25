class Stack():
    def __init__(self):
        self.index = 0
        self.element = []

    def push(self, value):
        self.element.insert(self.index, value)
        self.index += 1

    def pop(self):
        if (self.index == 0):
             return

        self.index -= 1
        result = self.element[self.index]
        del self.element[self.index]
        return result

    def size(self):
        return self.index
    
    def peek(self):
        return self.element[self.index -1]

    def min(self):
        return self.element[0]


# TEST

def main():
    stack = Stack()

    stack.push(5)
    stack.push(6)
    stack.push(7)
    stack.push(8)

    max = stack.peek()
    min = stack.min()

    print(f"\n Max value in stack: {max}")
    print(f"\n Min value in stack: {min}")
    print(f"\n Currente size in stack: {stack.size()}")

    stack.pop()

    print(f"\n Max value in stack: {stack.peek()}")
    print(f"\n Currente size in stack: {stack.size()}")
    return


main()
