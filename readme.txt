This folder is reserved for custom fonts used in the Blackveil platform.

To use a custom font, place your `.ttf`, `.woff`, or `.otf` files here,
then load them via @font-face in your CSS.

Example:

@font-face {
  font-family: 'CustomFont';
  src: url('../fonts/CustomFont.ttf') format('truetype');
}
