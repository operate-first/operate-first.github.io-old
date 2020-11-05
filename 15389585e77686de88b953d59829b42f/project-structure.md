## Data Science Projects Structure for AI Ops -

The purpose of this document is to provide Data Scientists in the AI CoE with a template for structuring their projects as well as encouraging a more consistent workflow across projects that promotes an “operate first” mentality; testing and taking advantage of the capabilities the AI CoE has been developing, as well as to ensure that as data scientists, focused on developing intelligent applications for the cloud, we are working from a cloud-native data science mindset from the start.   

This should be seen as a living document that gets modified and updated as we continue to learn the best way to structure, execute and operate first AI CoE Data Science Projects. That said, I don’t want that to be misinterpreted to mean that what is outlined below are mere suggestions. Between updates of this document, we should try and follow its outline as close as possible to ensure consistency across projects and to learn together what is and is not working. *Please track all suggestions as comments in this document. : )*

### General Info about project needs and structure:


1. All Data Scientists will request and receive a default Jupyterhub instance of 32gb Ram and larger pvc from the DH team. Create a tracking doc for all bugs / requests to DataHub


2. All data scientists will use the DH as their primary working environment. 

	1. If they are blocked due to resources or performance issues with the environment, they will bring the issue to the attention of their team lead and the DH team to be resolved together. If and ONLY IF the issue cannot be resolved on a reasonable timeline will the Data Scientist have the option to work on their local machines temporarily. 

	2. Any work done on a local machine that is not immediately reproducible on Openshift/ DH will be considered incomplete. 

	3. This  [tracking document ](https://docs.google.com/document/d/1-QX-_OoPIGn-FM-QViVNSyJ-pXBVARPBbAsRvtd1_xU/edit) will be used to collect any bugs/ issues we find while using the datahub. 


3.     Data Scientists will have their own bucket in DH Ceph as their primary storage.

	1. Although Data Scientists will have a larger pvc on DH, this should primarily be used for notebooks, scripts and smaller POC data sets, whereas the actual data for projects should be stored primarily in Ceph. 

	2. This  [document ](https://docs.google.com/document/d/1St3G_I3fZHaxU-GC5lrxD9v4Q009OCbcL7SRUZf_gmU/edit#heading=h.sjyd8okvpwjk) provides information on how to get access to the current DH-PLAYPEN bucket in data hub for temporary use 

	3. This  [document](https://help.datahub.redhat.com/docs/onboarding-to-ceph-s3)  provides information for requesting your own Ceph bucket  in Data Hub.     



4. Every project will be tracked in its parent's organization level Github project board for task tracking and a shared google drive folder for artifacts. 

	1. Github [Project Board](https://github.com/orgs/aicoe-aiops/projects) 

	2. Google [ Drive](https://drive.google.com/drive/folders/17nhASQZUbGISFQswUb-ft3V1dxbD7dtX) 

 
5. Every project will have a “Project Owner” on the AI Ops side, responsible for ensuring the delivery of the items outlined in the “Project Flow” section below. Ideally, this is the Data Scientist(s) responsible for the project.   


 
### Project Flow:


**1.** **Project definition and Business Understanding** (~5  days):

	1. Stakeholders will meet to discuss projects, available data and desired outcomes, use cases and end-users.

		1. Define concrete checklist of items that define when the project is complete (subject to ongoing  review)

		2. Provide a  solution solved by a human (can identify a cat)

		3. Outline path to operationalization

	2. Relevant members of AI COE will develop a preliminary project description to be shared with stakeholder team for general agreement. 

	3.  Deliverable Artifacts

		1. preliminary project description     


**2.** **Research and Problem Understanding** (~ 1 to 2 weeks):

	1. Compile and read 3-4 relevant papers on the problem domain.

	2. Find 1-2 comparable open source projects and deploy them. 

	3. Present a problem state-of-the-art deck to the AI Ops team along with baseline results from b) and initial outline of how to proceed with the project.

	4. Present modified plan for achieving project goal and share with stakeholder team for general agreement. This will also include: 

		1. Data Requirements 

		2. Performance Criteria

		3. ML approach and reasoning

	5. Deliverable Artifacts

		1. State-of-the-art deck

		2. Write up of how to proceed with the project


**3.** **Data Preparation and EDA** (~1-2 weeks): 

	1. Work with stakeholders to ensure access to data

	2. Work with stakeholders to create description of data/metadata

	3. Determine if we need SME labeled or augmented data at this stage.  

	4. Produce an EDA Notebook

	5. ETL, data cleaning and preprocessing scripts will be completed at this stage. 

	6. Fix a training, testing and evaluation dataset. (If a data source is an ongoing service, we will fix a time range for model development and evaluation. If this is a reinforcement learning problem, the interactive environment will be built at this stage) 

	7. Present modified plan for achieving project goal and share with stakeholder team for general agreement. This will include: 

		1. Any changes to part 2 plan if needed after EDA and data discovery

	8. Deliverable Artifacts

		1. EDA notebook

		2. Link to fixed evaluation dataset or reproducible data environment


**4.** **Implement proof of concept AI/ML mode**l (~1-2 weeks):

	1. Write up or presentation that includes reasoning behind choosing ml methods and model descriptions. 

	2. In a jupyter notebook on DH create an initial PoC with annotated cells explaining the work.

	3. MLflow will be used to keep track of experiments and hyper parameter tuning at this stage.  

	4. Deliverable Artifacts

		1. PoC notebook running in JH

		2. Link to ML Flow dashboard with experiments

		3. Write up/ presentation explaining results and model to use  


**5.** **Deployed as a PoC service** using notebook2image (or equivalent tools as they are improved/ developed) (~1 week) 

	1. Monitoring will be planned and implemented at this stage as well.

	2. As with most AI Ops projects these will likely be some kind of intelligent monitoring tool, so we should have as an output of this stage a demo to simulate the tool in operation (possibly with a grafana dashboard for visualization). 

	3. Deliverable Artifacts

		1. Link to exposed route or demo app where user could interact with model


**6.** **Application Evaluation** ( ~infinity weeks ) 

	1. Present result and demo to stakeholders.

	2. Loop back to previous steps and repeat until agreement with stakeholders that project is successful.

	3. Deliverable Artifacts

		1. ???

 
**7.** **Hand-off** (~4 weeks)

	1. Containerized application is deployed and integrated into stakeholders’ production workflow.    

	2. Deliverable Artifacts

		1. Final presentation/ write up and delivery of all artifacts to date 

