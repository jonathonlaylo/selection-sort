# Selection Sort
> The Selection sort algorithm divides the input list into two parts: items already sorted and the items remaining to be sorted. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.

Best Case Scenario - O(n^2)

Average Case Scenario - O(n^2)

Worst Case Scenario - O(n^2)

## Psuedo code
```
function selction(list) 
    for i = 1 to length(list)
    min
    for j = i + 1 to length(list)
      if list[j] < list[min]
        min = j
    if i !== min
      swap(list, i, min)
  return list
```
