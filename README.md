KDD_visualization
=================

This is a data visualization of the 2013 KDD cup data.  As opposed to developing a predictive model for this competition
I decided to use it as an opportunity to work with new tools that I wanted to explore.  Here is what I have done so far:

First Step:
Uploaded data into MongoDB
Created Node.js server to interact with Mongo
Build web application to provide a interface between user and Mongo

Second Step:
Munged data with AWS EMR, using the interactive pig mode
Joined the data sets, eliminated duplicates

Third Step:
Loaded munged data set back into Mongo
Currently using pymongo, pandas and nltk to further mung the data set

