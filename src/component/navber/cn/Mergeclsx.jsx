import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
function cn(...imput) {
  return twMerge(clsx(...imput))
}

export default cn;