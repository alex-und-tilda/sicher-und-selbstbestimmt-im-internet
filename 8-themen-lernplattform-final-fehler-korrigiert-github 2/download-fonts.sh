#!/bin/bash
# Schrift-Dateien herunterladen
# Einmal ausführen: bash download-fonts.sh

mkdir -p assets/fonts

echo "Lade Atkinson Hyperlegible Regular..."
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt23C1KxNDXMspQ1lPyU89-1h6ONRlW45GE5Q.ttf" \
     -o "assets/fonts/atkinson-regular.ttf"

echo "Lade Atkinson Hyperlegible Bold..."
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt73C1KxNDXMspQ1lPyU89-1h6ONRlW45G8WbcNcw.ttf" \
     -o "assets/fonts/atkinson-bold.ttf"

echo "Fertig! Dateien gespeichert in assets/fonts/"
ls -lh assets/fonts/*.ttf
