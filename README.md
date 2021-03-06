# AlgPainter

A [Vue.js](https://vuejs.org/) canvas component which draws last layer cube diagrams.

## Usage

Simple parameters:

- `width`: Set the width *and* height of the diagram.
- `auf`: String, adjust upper face, appends a move to the end of the algorithm.
- `bw`: Generate a black and white diagram.
- `distinct-arrows`: Arrows which point to edge are blue and to corners red.

### Algorithm
This is a simplest way to generate a diagram, just give it an algorithm! A cube model will compute the pattern for you, for some algorithms an adjust upper face (AUF) may be necessary. You can combine these with arrows too. Wide moves must be in the WCA format (Rw Uw' Fw2 etc), not lowercase.

```html
<alg moves="R U R' U R U2 R'"></alg>
<alg moves="M U M' U2 M U M'" auf="U2"></alg>
<!-- V perm -->
<alg moves="R' U R' Dw' R' F' R2 U' R' U R' F R F" auf="U'"
     :arrows="[[1,9],[2,6]]"></alg>
```

### Arrows
Give the component an array of arrows, each pair in an array represents a from to arrow. It will automatically point back to the first element if not provided at the end, that is `[1,2,1]` is equivalent to `[1,2]`.

```html
<!--
1 2 3
4 5 6
7 8 9
-->
<!-- A perm -->
<alg :arrows="[[1,9,3]]"></alg>
<!-- T perm -->
<alg :arrows="[[4,6],[9,3]]"></alg>
```

### Custom stickers
This is tedious, the code doesn't always look pretty. Stickers are ordered 1-9 row by row (see diagram in the Arrows section). Edges are ordered clockwise from the top.

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
(A.K.A. unsupported features at time of writing but plans to implement.)

- A 3D view
- Color customization