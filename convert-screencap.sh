#!/bin/sh
mplayer -ao null out.ogv -vo jpeg:outdir=output
# wait for input
read
convert output/* out.gif
convert proto-macro.gif -fuzz 5% -layers Optimize out-small.gif
convert -delay 25x100 out-small.gif out-small.gif
cp out-small.gif ~/programming/testhugo/static/images/$1.gif
