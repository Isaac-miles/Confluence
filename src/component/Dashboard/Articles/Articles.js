import React,{Component} from 'react'
import axios from '../../../axios'
import Article from '../Articles/Article/Article'
import classes from './Articles.css'

class Articles extends Component{

    componentDidMount(){
    
        axios.get('/posts')
        .then(response=>{
            let articles= response.data.slice(1,10);
           const updated_article = articles.map(art=>{
              return {
               ...art,
                   Author: 'Isaac'
               }
           })
            this.setState({articles:updated_article});
        })
        .catch(err =>{
            this.setState({error:err})
        })
    }

    state={
        articles:[],
        
        error:false
    }
  

    render(){
        console.log(this.state.articles)
        let articles =<p style={{textAlign:'center',color:"white",fontSize:"20px"}}>Something Went wrong check connection</p>;
        if(!this.state.error){
             articles = this.state.articles.map(art=>{
                return (
                <Article 
                key={art.id}
                title={art.title}
                 author={art.Author}
                 body={art.body}
                />
            
                );
            })
    
        }
        return(
            <div>
            <section className={classes.Articles}>
             {articles}
         </section>
        </div>
        )
    }
}
export default Articles;