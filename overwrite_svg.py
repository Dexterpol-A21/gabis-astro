
import os

svg_content = """<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="1024.000000pt" viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">

<path d="M6980 2360 c289 -12 396 -29 429 -66 28 -33 25 -84 -9 -139 -44 -71 -30 -69 -459 -71 -380 -2 -735 -18 -1051 -49 -859 -84 -1644 -241 -2205 -439 -165 -59 -224 -66 -285 -34 -56 29 -74 64 -65 124 8 58 49 104 123 139 444 212 1468 426 2417 505 441 37 744 45 1105 30z"/>
<path d="M5895 4116 c-69 -15 -175 -53 -191 -70 -22 -23 -200 -484 -190 -493
6 -7 214 93 290 140 190 115 346 287 346 381 0 53 -113 71 -255 42z"/>
<path d="M5743 3309 c-68 -8 -170 -31 -289 -65 l-51 -14 -28 -93 c-15 -50 -40
-139 -55 -197 l-27 -105 38 -3 c58 -5 252 43 334 83 139 66 258 178 290 272
35 100 -37 142 -212 122z"/>
<path d="M4428 3797 c-41 -67 -102 -167 -133 -222 -84 -145 -276 -517 -271
-522 3 -3 26 2 53 10 53 17 213 60 285 78 53 13 48 -3 68 221 10 115 49 391
71 496 6 30 9 55 7 57 -2 2 -38 -51 -80 -118z"/>

</g>
</svg>
"""

path = r"C:/Users/Paulc/OneDrive/Documentos/disenoWeb/gabis-astro/public/images/gabisLetrasNoBck.svg"
with open(path, "w", encoding="utf-8") as f:
    f.write(svg_content)
