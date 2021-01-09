// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("data/samples.json").then(function(d) {
        // Parse and filter the data to get the sample's metadata
        var metadata = d.metadata[0];
        console.log(metadata);
        // Specify the location of the metadata and update it
    });
}
// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

function optionChanged(newSample){

    // Update metadata with newly selected sample
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Update charts with newly selected sample

}

// Initialize dashboard on page load
//init();

buildMetadata();