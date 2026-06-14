## About
Documentation esque site to host a collection of key concepts + tidbits I've found interesting while solving competitive programming problems! 

I have a lot more "lessons" noted down, as well as a lot of exemplars/solutions I'd like to highlight when I get around to fleshing out more pages, as right now a lot of the pages I've started are a bit empty.

## Viewing
Currently not hosted because I didn't renew the domain... 

## Planned Additions
#### Notes
- lexicgraphical high (letter by letter)
- trie
    - implementation (build w/ for loop)
- find nums that avg equal to x = subtract x from arr, should sum up to 0 
- xor trie -> specifically to get min/max with query, go the SAME/OPPOSITE WAY
    - if min and mask & queryInt = 0, go 0
    - if min and mask & queryInt = 1, go 1
- bit is just prefix sum, prefix sum has a lot of uses
    - num inversions
    - freq sum (how many elements bigger/smaller)
- how to model subarray/BIT questions
    - given a, find num of subarrays where median >= x (2 median tricks: convert to psa, binary search)
        -> e.g. cf 1486 D -> bin search on median = x, then see if any subarray exsists which has the median
    - given a, find num subarrays where mean >= x
    - can shift BIT if triangle
online query: answer last question before take a new one 
offline query: take all questions in and process all of them and give back all ans
- fracturing search -> each time a decision is made, more decisions/paths open up (usually greedy pq)
    - e.g. ahscc1p5, cheerio1s2
- "set.upper_bound is logn upper_bound(...) is n" -william ma in reference to ccc15s3
    - how to get highest element smaller than wtv/smallest element bigger than wtv
    - how to get how many elements are bigger/smaller than wtv
    - | **Function**          | **Description**                                         | **Complexity** |
| --------------------- | ------------------------------------------------------- | -------------- |
| `os.insert(x)`        | Insert element ( x ) into the set.                      | ( O(\log n) )  |
| `os.erase(x)`         | Remove element ( x ).                                   | ( O(\log n) )  |
| `os.find_by_order(k)` | Find the ( k )-th smallest element (( 0 )-based index). | ( O(\log n) )  |
| `os.order_of_key(x)`  | Get the number of elements strictly smaller than ( x ). | ( O(\log n) )  |

- weird debugging (out of bounds but doesnt error??) e.g. for (int i = 0; i < n && filled + i < k; i++), must put i < n for some reason
    - brute forced it -> sometimes look at constraints and literally try every value
- smarter way of doing directions = have two parallel arrays for dr and dc (d = change in)
- topological sort!! (oly24practice26)
- thinking: do constructive instead of cutting (e.g. usaco24decs2, ccc24s4)
- sweep line = sweep across x, y is data structure -> add/remove/query data structure as the thing leaves or enters line ("event points")
- when using segtree for sweep, note that we are concerned with segments between points and not how many points (see joi05fp5)
- think the other way, instead of trying all subarrays and counting match try every ai and see how many subarraays make it match (usaco25jans1)
- in a table, infinite swapping rows & cols will always:
    - keep the same numbers in each row & col
    - keep the same number of distinct row & cols
- merge sort is O(n) if u alr have two sorted arrs


#### To add as exemplars
- coci06c5p6
- ccc16s3
- cf 2024 D
- xorm
- ccc20s4
- oly19practice60 (why does it work? use paper?)
- oly21practice77
- oly24practice26 (top sort example)
- usaco24decs2 (figure out why bruce works and mine didnt)
