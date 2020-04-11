# `map` and `filter` exercises

[FRENCH VERSION (a bit less detailed)](README_FR.md)

## Installation

* **First of all**, fork this repo (button in the upper-right corner)
* You'll then be redirected to the copy created on your account, of which you must get the URL, in order to **clone** it on your computer.
* **If** you cloned the repo instead of forking, don't panic, instructions are given at the end to get you back on your feet (but next time... read the instructions first :wink:)
* Once you've cloned the repo locally, navigate to its folder (`cd array-map-filter`),
* **Run `npm install`** (this will install the automatic testing tools)

## Usage

This repo uses an automatic testing tool. Once you've performed all the installation steps, run `npm test` (after ); your screen should look like this:

![No tests enabled](https://raw.github.com/WildCodeSchool/array-map-filter/jest-to-mocha/screenshot-all-tests-disabled.png)

At the bottom of the screen, you can see "0 passing", and on the next line "7 pending". This means the 7 tests are **deactivated**, which is **intended**: otherwise your screen would be filled with unfriendly error messages in red.

### Activating a test

When you start working on an exercise, you have to **enable** the test for **that** exercise. For example if you start working on `filter/ex1.js`, run this (Windows users, please use **Git Bash** and not the regular Windows terminal):

```sh
./enable filter 1
```

Now if you run `npm test` again, you should see something like this:

![One test enabled](https://raw.github.com/WildCodeSchool/array-map-filter/jest-to-mocha/screenshot-one-test-enabled.png)

The "statistics" at the bottom have just changed: the test for `filter/ex1.js` is now running, but it's failing with this message:

    AssertionError: expected undefined to deeply equal [ 7, 2, 0, 3, 11 ]

Now, what does that mean? It means that the test called the function defined in `filter/ex1.js`, and **expected a result** (the array on the right). Since the function is empty, it received a different result (`undefined`).

> When you solve the exercise, the "failing" test should be replaced with a "passing" test when you run `npm test`.

### Now, solve them all!

There are two series of three exercises each: one inside `map`, one inside `filter`. You can do them in any order.

Run `npm test` each time you think you made a step forward in solving an exercise (making sure you did **save** your `.js` file).

Don't hesitate to use `console.log` along the way, to print the values of variables as you're attempting to solve the exercises.

## HELP! I cloned before forking!

* Don't panic: you **still** can fork the repo
* To link your **local** repo to the **remote** repo (your fork), you have to edit `.git/config` (which you may do with `nano` under Linux, MacOS, or Windows with Git Bash).
* In this file, under the line `[remote "origin"]`, replace `WildCodeSchool` with your own GitHub username in the URL: `https://github.com/WildCodeSchool/array-map-filter`.
