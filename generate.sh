rm -rf packages/betriebsstellen/*
openapi -s swagger/betriebsstellen.json -o packages/betriebsstellen -l js

rm -rf packages/fahrplan/*
openapi -s swagger/fahrplan.json -o packages/fahrplan -l js

rm -rf packages/fasta/*
openapi -s swagger/fasta.json -o packages/fasta -l js

rm -rf packages/flinkster/*
openapi -s swagger/flinkster.json -o packages/flinkster -l js

rm -rf packages/reisezentren/*
openapi -s swagger/reisezentren.json -o packages/reisezentren -l js

rm -rf packages/stada/*
openapi -s swagger/stada.json -o packages/stada -l js