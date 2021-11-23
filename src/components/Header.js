import React from "react";

import { Button, Wrapper } from "./header.style";

export default function Header({ randomList, rangeChange, bubbleOnClick, insertionOnClick }) {
  return (
    <Wrapper>
    
        <Button disabled>Sorting Visualizer</Button>
      

      <Button onClick={randomList}>Random List</Button>
      <Button onClick={rangeChange}>Change Size</Button>
      <Button onClick={bubbleOnClick}>Bubble Sort</Button>
      <Button onClick={insertionOnClick}>Insertion Sorts</Button>
      <Button>Merge Sort</Button>
      <Button>Quick Sort</Button>
    </Wrapper>
  );
}
