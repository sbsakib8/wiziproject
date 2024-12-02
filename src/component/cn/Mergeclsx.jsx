import React from 'react'
 import { twMerge } from './../../../node_modules/tailwind-merge/src/lib/tw-merge';
import clsx from 'clsx';

 function cn(...input) {
   return twMerge(clsx(input))
 }
 
 export default cn;