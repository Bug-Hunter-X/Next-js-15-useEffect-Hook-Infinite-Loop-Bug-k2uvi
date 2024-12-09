# Next.js 15 useEffect Hook Infinite Loop Bug

This repository demonstrates an uncommon bug encountered in a Next.js 15 application involving the `useEffect` hook.  The `useEffect` hook within the `/about` page causes an infinite loop, leading to performance issues and unexpected behavior.  The solution shows how to properly implement the `useEffect` hook to prevent this issue.

## Bug Description

The original `about.js` file contains a `useEffect` hook that updates a state variable (`count`) every second.  However, the implementation leads to an infinite loop due to the way the `setCount` function is used within the interval.  The infinite renders lead to a high CPU usage and application instability.

## Solution

The `aboutSolution.js` file provides a corrected version of the code.  The solution ensures that the `setInterval` function is correctly cleared when the component unmounts, and utilizes functional updates to prevent unnecessary re-renders.