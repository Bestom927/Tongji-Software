import React from 'react'
import Col from 'react-bootstrap/Col';

const Model = () => {
  return (
    <div>      
      <img src="https://static.igem.wiki/teams/4272/wiki/model-bg.png"style={{
                height: "100%",
                width: "100%",
                
            }} alt="proof-page-img1" />


          <h1 className='head1' style={{
          color:"#2e77e5",
          marginTop:"2vw",
          marginBottom:"2vw",
          }}
          >Project Modeling</h1>

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#2e77e5",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Data Processing</h2>
      </Col>
      <Col md={{span:9,offset:1}}style={{marginBottom:"2vh"}} >
      <p>There are mainly two types of original data. </p>

      <p>Here, 0 represents non ACR protein, with a total of 13725 pieces of data, and 1 represents ACR protein, with 73 pieces of data, which are two types of imbalance problems. The default threshold of most models is the median of the output value. For example, the output range of logical regression is [0,1]. When the output of a sample is greater than 0.5, it will be divided into positive examples, and vice versa. When the categories of data are unbalanced, the default classification threshold adopted may cause the output to be all counter examples, resulting in false high accuracy and classification failure. Therefore, it is necessary to adjust the imbalance of data through sampling.
      </p>
      <p>
      Under sampling is a method to alleviate class imbalance. It is realized by discarding samples, which can be understood as less sampling for the classes with more samples in the training set. After undersampling the two kinds of data, the number of non acr protein and acr protein was 73.
      </p>
      </Col>
          

      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#2e77e5",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
        style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Model Establishment</h2>
      </Col>
      <Col md={{span:10,offset:1}} style={{marginBottom:"2vh"}}>
      <p>In this problem, we mainly use the Support Vector Machine (SVM) algorithm in supervised learning, the na?ve Bayes algorithm, and the random forest algorithm.

</p>

      <p>The decision boundary of SVM is the maximum margin hyperplane for learning samples. SVM uses hinge loss function to calculate empirical risk and adds regularization term to the solution system to optimize structural risk. It is a sparse and robust classifier.
    </p>
      <p> 
Naive Bayesian algorithm is a classification method based on Bayesian theorem and independent assumption of feature conditions. For a given training set, firstly, learn the joint probability distribution of input and output based on the independent hypothesis of characteristic conditions (Naive Bayesian method, which is a mechanism to obtain the model through learning, obviously belongs to the generation model); Then, based on this model, for a given input x, the output y with the maximum a posteriori probability is obtained by using bayesian theorem.
 </p>
 <img src="https://static.igem.wiki/teams/4272/wiki/proof-equation.png"
        style={{width:"40vw",marginLeft:"15vw"}}alt="model"/>
 <p>In the model, the main algorithm is random forest algorithm (Figure 1):</p>
 <img src="https://static.igem.wiki/teams/4272/wiki/model-1.png"
        style={{width:"80vw",marginLeft:"0vw"}} alt="model"/>
<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 1 random forest algorithm</div>
<br/><br/>
<p>
First, build each tree in the random forest according to the following rules:
</p>
<p>
N represents the number of training cases (samples), and M represents the number of features. Input feature number m to determine the decision result of a node on the decision tree; Where m should be much less than M. Take N samples from N training cases (samples) in the way of put back sampling to form a training set (bootstrap sampling), and use the unexampled cases (samples) for prediction to evaluate the error. For each node, m features are selected randomly, and the decision of each node in the decision tree is determined based on these features. According to these m characteristics, the optimal splitting mode is calculated. Each tree will grow completely without pruning, which may be adopted after building a normal tree classifier).
In this model, we mainly select the following features: Annotation, hth, protein_length, directon, directon_size, directon_protein_lengths_mean, directon_spacing, hth_downstream, protein_annotated, isoelectric_point, hydrophobicity, instability, weight, p_frequent.
</p>
<p>
After completing the construction of the decision tree, the random forest is constructed(Figure 2), and the data and features to be selected are randomly selected. On the random selection of data: First, we take the sampling with returns from the original dataset to construct a sub dataset. The data volume of the sub dataset is the same as that of the original dataset. Elements in different sub data sets can be repeated, and elements in the same sub data set can also be repeated. Second, use the sub data set to build a sub decision tree, put this data into each sub decision tree, and each sub decision tree outputs a result. Finally, if new data need to be classified through the random forest, the output of the random forest can be obtained by voting the judgment results of the sub decision tree. As for the random selection of features to be selected, similar to the random selection of data sets, each splitting process of subtrees in a random forest does not use all the features to be selected, but randomly selects a certain feature from all the features to be selected, and then selects the best feature from the randomly selected features. This can make the decision trees in the random forest different from each other, improve the diversity of the system, and thus improve the classification performance.

</p>


<img src="https://static.igem.wiki/teams/4272/wiki/model-2.png"
        style={{width:"80vw",marginLeft:"0vw"}}alt="model"/>

<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 2 Construction of random forest</div>
<br/><br/>


<p>Advantages of the random forest algorithm: high accuracy, can effectively run on large data sets, introduces randomness, and is not easy to over fit. The random forest has a good ability to resist noise, can process very high dimensional data, and does not need to reduce dimensions. It can not only process discrete data, but also process continuous data, and does not need to standardize the data set, and the training speed is fast. It can obtain the ranking of variable importance It is easy to realize parallelization, get good results even for the default value problem, and the number of super parameters is not very large. In addition, we can intuitively understand their meanings.
</p>
<p>
Disadvantages of random forest algorithm: Although the random forest algorithm is fast enough, when the number of decision trees in the random forest is large, the space and time required for training will be large, which will lead to slower models. Therefore, in practical application, if the real-time requirement is very high, it is better to choose other algorithms.

</p>




      </Col>

      
      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#2e77e5",
         }}
        > <img src="https://static.igem.wiki/teams/4272/wiki/star-icon.png"
          style={{width:"3vw",marginTop:"-1vw"}}alt="model"/>Model Optimization</h2>
      </Col>
      <Col md={{span:10,offset:1}}style={{marginBottom:"2vh"}} >
      <p>Here, we use the grid search method, which is an exhaustive search method for specifying parameter values. The optimal learning algorithm is obtained by optimizing the parameters of the estimation function through cross validation.
</p>

      <p>
That is, arrange and combine the possible values of each parameter, and list all possible combination results to generate a "grid". Each combination is then used for SVM training, and performance is evaluated using cross validation. Cross validation(Figure 3) refers to taking most of the given modeling samples to build a model, leaving a small part of the samples to predict with the just established model, calculating the prediction error of the small part of the samples, and recording their sum of squares. This process continues until all samples are predicted once and only once, and then the square sum of the prediction error of each sample is added. 
  </p>
  
  <img src="https://static.igem.wiki/teams/4272/wiki/model-3.png"
        style={{width:"80vw",marginLeft:"0vw"}}alt="model"/>


<br/><br/>
        <div style={{textAlign:"center",fontSize:"small"}}>Figure 3 Cross validation</div>
<br/><br/>


  <p>After the fitting function has tried all the parameter combinations, it returns a suitable classifier and automatically adjusts to the best parameter combination. You can use clf.best_ params_ Get parameter values.</p>
      </Col>







          <br/>
   </div>
  )
}

export default Model