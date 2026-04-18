---
title: The Collatz conjecture
date: "2026-04-18T21:38:34.055Z"
description: A brief introduction to the Collatz conjecture with a code snippet to try yourself
---

A few years ago, I was first introduced to the **Collatz conjecture** while reading [Automate the Boring Stuff](https://automatetheboringstuff.com) by Al Sweigart. It has a remarkably simple set of rules:

> Consider the following operation on an arbitrary positive integer:
>
> - If the number is even, divide it by two.
> - If the number is odd, triple it and add one.
> - Now form a sequence by performing this operation repeatedly, beginning with any positive integer, and taking the result at each step as the input at the next.
>
> [[1]]

And that's all there is to it. Yet despite this apparent simplicity, no one has proved that for any given starting number, the result will reach 1 for all positive integers. Further, certain numbers have unexpected behavior. For example, 871 takes 178 steps to reach 1 whereas 870 takes just 28 and 872 takes 116.

At first glance, this problem appears to be almost trivially simple, yet it remains one of the most famous unsolved mathematical problems. In fact, one of the foremost mathematicians involved in the Manhattan Project, Stanisław Ulam, reportedly circulated the conjecture among scientists at Los Alamos. When the problem arrived at Yale in the 1960s, the mathematicians there spent a month trying to solve it to no avail. Later on, a similar episode unfolded at the University of Chicago. The conjecture was even jokingly described as being part of "a conspiracy to slow down mathematical research in the U.S.". [[2]]

To me, the Collatz conjecture is a striking example of how mathematics can produce behavior that is utterly abstruse, yet still explainable in a single breath. I suspect that if more examples like this made it into classrooms, fewer people would write off mathematics as dull.

If you want to run this for yourself, here is a Python script which demonstrates the simple essence of the problem. Don't get too carried away, however, as all values of up to 2<sup>71</sup> have already been confirmed to reach 1. [[3]]

<details>
<summary>Click to view</summary>

```python
import time

print("=" * 50)
print("This program will demonstrate the Collatz conjecture")
print("=" * 50)
print("This conjecture simply states: \n")
print("For any positive integer, if the number is even, divide it by two. If the number is odd, triple it and add one.\n")
print("If you continually repeat this process, the result will always end up as 1.")
print("-" * 50)


def collatz(number):
    if number % 2 == 0:
        return int(number // 2)
    else:
        return 3 * number + 1


while True:
    try:
        number = int(input("Please type in a positive integer: "))
        if number <= 0:
            print("Please enter a positive integer (greater than 0)")
            continue
        break
    except ValueError:
        print("Please make sure you enter an integer")


while number != 1:
    number = collatz(number)
    print(number)
    time.sleep(0.5)
```

</details>
<br />

[1]: https://en.wikipedia.org/wiki/Collatz_conjecture#Statement_of_the_problem
[2]: https://www.cecm.sfu.ca/organics/papers/lagarias/paper/html/node1.html
[3]: https://link.springer.com/content/pdf/10.1007/s11227-025-07337-0.pdf
