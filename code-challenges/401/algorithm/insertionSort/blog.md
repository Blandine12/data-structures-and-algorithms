`InsertionSort(int[] arr)

FOR i = 1 to arr.length

  int j <-- i - 1
  int temp <-- arr[i]
  
  WHILE j >= 0 AND temp < arr[j]
    arr[j + 1] <-- arr[j]
    j <-- j - 1
    
  arr[j + 1] <-- temp`
Array Example: [8,4,23,42,16,15]

- result 1

start: | 8 | 4 | 23 | 16 | 15 | 


After : | 4 | 8 | 23 | 16 | 15 | 


- result 2:

start: | 4 | 8 | 23 | 16 | 15 | 


After : | 4 | 8 | 23 | 16 | 15 | 


- result 3:

start: | 4 | 8 | 23 | 16 | 15 | 



After : | 4 | 8 | 16 | 23 | 15 | 



- result 4:

start: | 4 | 8 | 23 | 16 | 15 | 

After : | 4 | 8 | 16 | 23 | 15 | 


- result 5:

start: | 4 | 8 | 16 | 23 | 15 | 



Final result: | 4 | 8 | 15 | 16 | 23 | 