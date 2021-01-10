
// Define a function that will create metadata for given sample
function buildMetadata(sample) {
    // Read the json data\
    d3.json("data/samples.json").then(function(data) {
        var metadata = data.metadata;
        var sampleMetadata = metadata.filter(d => parseInt(d.id) === parseInt(sample));
        // console.log(sampleMetadata);
        
        var demographics = d3.select("#sample-metadata")
            .selectAll("li")
            .data(Object.entries(sampleMetadata[0]));

        demographics.enter()
            .append("li")
            .merge(demographics)
            .text((d,i) => `${d[0]}: ${d[1]}`);

        demographics.exit()
            .remove();

    });
}
// Define a function that will create charts for given sample
function buildCharts(sample) {
    d3.json("data/samples.json").then(function(data) {
        var dataset = data.samples;
        var sampleDataset = dataset.filter(d => parseInt(d.id) === parseInt(sample));
        // console.log(sampleDataset);

        var sampleValues = sampleDataset[0].sample_values;
        var otuIDStrings = [];

        var otuIDs = sampleDataset[0].otu_ids
        otuIDs.forEach(id => otuIDStrings.push(`OTU ${id}`));
        var otuLabels = sampleDataset[0].otu_labels;

        // Bar
        var barData = [{
            type: 'bar',
            x: sampleValues.slice(0,10).reverse(),
            y: otuIDStrings.slice(0,10).reverse(),
            text: otuLabels.slice(0,10).reverse(),
            orientation: 'h'
        }];
          
        Plotly.newPlot("bar", barData);

        // Bubble Chart
        var bubbleData = [{
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
              color: otuIDs,
              size: sampleValues
            }
          }];
          
          var bubbleLayout = {
            title: 'Belly Button Biodiversity Bubble Chart',
            showlegend: false,
            height: 600,
            width: 1000
          };
          
          Plotly.newPlot('bubble', bubbleData, bubbleLayout);
        

    });
    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {
    // Read json data
    d3.json("data/samples.json").then(function(data) {
        // Parse and filter data to get sample names
        var names = data.names;

        // Add dropdown option for each sample
        var dropdownMenu = d3.select("#selDataset");

        dropdownMenu.selectAll("option")
            .data(names)
            .enter()
            .append("option")
            .attr("value", d => d)
            .text(d => d);
        
        var currentSelection = dropdownMenu.node().value;
        buildMetadata(currentSelection);
        buildCharts(currentSelection);
    });
}

function optionChanged(newSample){

    // Update metadata with newly selected sample
    buildMetadata(newSample);
    // Update charts with newly selected sample
    d3.json("data/samples.json").then(function(data) {
        var dataset = data.samples;
        var sampleDataset = dataset.filter(d => parseInt(d.id) === parseInt(newSample));
        // console.log(sampleDataset);

        var sampleValues = sampleDataset[0].sample_values;
        var otuIDStrings = [];

        var otuIDs = sampleDataset[0].otu_ids
        otuIDs.forEach(id => otuIDStrings.push(`OTU ${id}`));
        var otuLabels = sampleDataset[0].otu_labels;

        var barUpdate = {
            x: [sampleValues.slice(0,10).reverse()],
            y: [otuIDStrings.slice(0,10).reverse()],
            text: [otuLabels.slice(0,10).reverse()],
        };
          
        Plotly.restyle("bar", barUpdate);
    });
}

// Initialize dashboard on page load
init();

