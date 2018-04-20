nums = [7, 3, 4, 2, 8, 5]

def bubbleSort(arr):
  switched = True
  while switched:
    switched = False
    for i, num in enumerate(arr):
      if i >= 1:
        if num < arr[i - 1]:
          temp = num
          arr[i] = arr[i - 1]
          arr[i - 1] = temp
          switched = True
  return arr

print(bubbleSort(nums))
