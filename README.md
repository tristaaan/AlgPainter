# AlgPainter

A [Vue.js](https://vuejs.org/) canvas component which draws a last layer cube diagram.

## Usage

### Algorithm
This is a simplest way to generate a diagram, just give it an algorithm! A cube model will compute the pattern for you, for some algorithms an adjust upper face (AUF) may be necessary. You can combine these with arrows too.

```html
<alg moves="R U R' U R U2 R'"></alg>
<alg moves="M U M' U2 M U M'" auf="U2"></alg>
<!-- V perm -->
<alg moves="R' U R' Dw' R' F' R2 U' R' U R' F R F" auf="U'"
     :arrows="[[1,9],[9,1],[2,6],[6,2]]"></alg>
```

### Arrows
Give the component an array of arrows, the second number is where the arrow is pointing to.

```html
<!--
1 2 3
4 5 6
7 8 9
-->
<!-- A perm -->
<alg :arrows="[[1,9], [9,3], [3,1]]"></alg>
<!-- T perm -->
<alg :arrows="[[4,6], [6,4], [3,9], [9,3]]"></alg>
```

### Custom stickers
This is tedious and doesn't look pretty but intuitive.
```html
<!-- gray stickers -->
<alg :stickers="[0,1,0, 1,1,0, 0,0,0]" :edges="[0,0,1, 0,1,0, 1,1,0, 1,0,1]"></alg>
<!-- colored stickers and edges, it's easier to feed the algorithm here. -->
<alg :stickers="['#0f0','#ff0','red', '#ff0','#ff0','blue', 'blue','#0f0','red']"
         :edges="['orange','red','#ff0',
                 'green','#ff0','blue',
                 '#ff0','#ff0','orange',
                 '#ff0','orange','#ff0']"></alg>
```

## Todo
(A.k.a. unsupported features at time of writing)

- A 3D view
- Color customization
- binary option given algorithm.
- rotation moves