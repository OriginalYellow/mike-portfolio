const legoBricks = [
  [
    {
      color: 'green',
    },
    {
      color: 'blue',
    },
    {
      color: 'red',
    },
  ],
  [
    {
      color: 'blue',
    },
  ],
  [
    {
      color: 'red',
    },
    {
      color: 'green',
    },
  ],
];

const originalBrickSideHeight = 25.2;
// const originalBrickWidth = 60.203;
const originalBrickHeight = 50.64;
const scalingFactor = 3;

const columnSizes = legoBricks.map(x => x.length); // ?
Math.max(1, 2); // ?
const maxRows = Math.max(legoBricks.map(x => x.length)); // ?
return (maxRows * originalBrickSideHeight * scalingFactor)
+ (originalBrickHeight * scalingFactor); // ?
