#  About the viewer 


............

This is the beta version of the Uro-oncogenomics Viewer (UncoVer), which allows scientists to explore single-cell and spatial transcriptomics datasets in the field of urologic cancers. Datasets have been gathered and preprocessed homogeneously in order to ensure reproducibility. Users can visualize expression data and use multiple criteria to filter, query and gain insight into single-cell and spatial omics data.  

### Browse and analyse

The viewer was designed to achieve two main goals:
- Searching, filtering and viewing information about studies and datasets related to Uro-Oncology : when entering the application , end-users are invited to browse a list of studies presented in a data grid that can be filtered and sorted according to a common set of criteria.
- Exploring, analyzing and comparing cell types according to different parameters and visualization features: the exploration interface consists in four main panels that will allow the end-user to i) filter the information; ii)  display the distribution of cells according to their metadata; iii) display scatter plots in which cells are distributed according to the dimensionality reduction method(s) (UMAP, t-sne...) and color-coded according several features including gene expression. 


### Data storage

Data are stored according to two different modalities:
- Studies and associated datasets are manually associated with a set of information (including technology, cancer type, biomaterial type, organ of origin …) in order to enable end-users searching and filtering the database based on this information.
- Each dataset consists in a LOOM file storing the corresponding omics data and the associated metadata. The LOOM format is based on the HDF5 format, a standard for storing large numerical datasets.



### Submitting data to UncoVer

If you would like to submit a dataset to UncoVer, please feel free to [contact us](mailto:frederic.chalmel@inserm.fr) 


