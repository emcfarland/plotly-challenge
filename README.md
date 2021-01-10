# plotly-challenge

This project takes belly button biome data and uses Plot.ly to create an interactive dashboard.

The javascript code uses the d3 library to read in a json data object and dynamically select and insert HTML tags into the index page. The initialization page shows data for subject 940: demographic info, top 10 bacteria, and washing frequency. Whenever a different subject ID is chosen from the dropdown, the Plotly plots are restyled and the demographic list items are updated. The bubble chart, since it displays all data, remains the same regardless.
