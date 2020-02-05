#!/bin/bash
prefix='ex'

for i in {3..5}; do
    j=$((i-1))
    prefixI=${prefix}${i}
    for x in `ls ${prefixI}*`; do
        newname="${x#"${prefixI}"}"
        newname="${prefix}${j}${newname}"
        echo "rename ${x} to ${newname}"
        mv ${x} ${newname}
    done
done

