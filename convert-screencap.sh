#!/bin/sh

cd ~
# mplayer -ao null out.ogv -vo jpeg:outdir=output
# wait for input
echo "Clean up the output directory in 'output'"
nautilus ~/output
echo "<Enter> when finished"
read
echo "Converting the images to gif"
convert output/* out.gif
echo "Optimizing the gif"
convert out.gif -fuzz 10% -layers Optimize out.gif
echo "Lengthening the gif"
convert -delay 25x100 out.gif out.gif
echo "Copying to static/images"
cp out.gif ~/programming/testhugo/static/images/$1.gif
cd ~/programming/testhugo
