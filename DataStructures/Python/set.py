class SetArray():
    def __init__(self):
        self.array = []


    def has(self, value):
        if value in self.array:
            return True
        else:
            return False


    def values(self):
        return self.array


    def add(self, value):
        if(self.has(value)): return False

        self.array.append(value)
        return True


    def remove(self, value):
        if not (self.has(value)): return False

        self.array.remove(value)
        return True


    def size(self):
        return len(self.array)


    def union(self, secondList):
        newSet = SetArray()

        for e in self.array:
            newSet.add(e)

        for e in secondList:
            if not (newSet.has(e)): newSet.add(e)
        return newSet


    def intersection(self, secondList):
        newSet = SetArray()

        for e in self.array:
            if e in secondList: newSet.add(e)
        return newSet


    def difference(self, secondList):
        newSet = SetArray()

        for e in self.array:
            if not e in secondList: newSet.add(e)
        return newSet


    def subset(self, secondList):
        for e in secondList:
            if not e in self.array:
                return False
        return True


def main():
    setA = SetArray()
    setB = SetArray()

    setA.add("d")
    setA.add("e")
    setA.add("f")

    setB.add("d")
    setB.add("e")
    setB.add("k")

    sub = setA.subset(setB.values())
    diff = setA.difference(setB.values())
    inter = setA.intersection(setB.values())

    print(f"SetA: {setA.values()}\nSetB: {setB.values()}")
    print(f"Subset: {sub}")
    print(f"Difference: {diff.values()}")
    print(f"Intersection: {inter.values()}")

main()





