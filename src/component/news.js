import React, { Component } from 'react'
import { Newsitem } from './newsitem'
import Spinner from './spinner';
export class News extends Component {
    article = [
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Kris Holt",
        "title": "Former Apple employee admits to defrauding the company out of $17 million",
        "description": "A former Apple\r\n employee has pled guilty to defrauding the company out of over $17 million. Dhirendra Prasad, who spent most of his decade at Apple working as a buyer in the Global Service Supply Chain department, admitted to \"taking kickbacks, inflating inv…",
        "url": "https://www.engadget.com/former-apple-employee-admits-defrauding-the-company-out-of-17-million-154208844.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ac7c5210-5ac1-11ed-bff9-c3c9802e4b76",
        "publishedAt": "2022-11-02T15:42:08Z",
        "content": "A former Apple\r\n employee has pled guilty to defrauding the company out of over $17 million. Dhirendra Prasad, who spent most of his decade at Apple working as a buyer in the Global Service Supply Ch… [+1839 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Jon Fingas",
        "title": "Tidal finally adds proper playlist sharing",
        "description": "Tidal has already been closing gaps with the competition by adding a free tier and similar upgrades, but its latest improvement may be one of the most important. The streaming music service has finally introduced user profiles that let you easily share your p…",
        "url": "https://www.engadget.com/tidal-profiles-playlist-sharing-160043016.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/5e4d34d0-47ba-11ec-bfe9-6cbd4dea05c1",
        "publishedAt": "2022-11-02T16:00:43Z",
        "content": "Tidal has already been closing gaps with the competition by adding a free tier and similar upgrades, but its latest improvement may be one of the most important. The streaming music service has final… [+1379 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Daniel Cooper",
        "title": "The Morning After: Is the M2 iPad Pro any good?",
        "description": "What’s stopping me (or you) getting an iPad Pro? The cost, for one. And a belief that anything I’d want to use an iPad for, I can already do with my eighth-generation vanilla model. That said, Nathan Ingraham’s review of the M2 iPad Pro\r\n did make me check if…",
        "url": "https://www.engadget.com/the-morning-after-is-the-m-2-i-pad-pro-any-good-111519582.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/602396a0-5a97-11ed-9f79-3dba70fb9e33",
        "publishedAt": "2022-11-02T11:15:19Z",
        "content": "Whats stopping me (or you) getting an iPad Pro? The cost, for one. And a belief that anything Id want to use an iPad for, I can already do with my eighth-generation vanilla model. That said, Nathan I… [+3958 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "China's Nio suspends production due to COVID measures - Reuters",
        "description": "Chinese electric vehicle (EV) maker Nio <a href=\"https://www.reuters.com/companies/9866.HK\" target=\"_blank\">(9866.HK)</a> said on Wednesday it has suspended production due to COVID-19 curbs, as rising cases across the country cause more disruptions to busines…",
        "url": "https://www.reuters.com/business/autos-transportation/chinas-nio-suspends-production-due-covid-measures-2022-11-02/",
        "urlToImage": "https://www.reuters.com/resizer/fWtCZa3afP8qC-FkPZo9In0Ij04=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HRIY2RSPF5PBPBQGRDYGKZHRUY.jpg",
        "publishedAt": "2022-11-02T03:28:00Z",
        "content": "BEIJING, Nov 2 (Reuters) - Chinese electric vehicle (EV) maker Nio (9866.HK) said on Wednesday it has suspended production due to COVID-19 curbs, as rising cases across the country cause more disrupt… [+1333 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "China vows commitment to growth as pressure on economy mounts - Reuters.com",
        "description": "Chinese policymakers pledged on Wednesday that growth was still a priority and they would press on with reforms, in an apparent bid to soothe fears that ideology could take precedence as Xi Jinping began a new leadership term and strict COVID curbs exact a gr…",
        "url": "https://www.reuters.com/world/china/china-vows-commitment-growth-pressure-economy-mounts-2022-11-02/",
        "urlToImage": "https://www.reuters.com/resizer/JmNJ2MRTBKYBEZ-tpaLDhY1cWxw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DJHJCNKLOVIIVF7MYQAEBVKLYM.jpg",
        "publishedAt": "2022-11-02T10:23:00Z",
        "content": "HONG KONG/BEIJING, Nov 2 (Reuters) - Chinese policymakers pledged on Wednesday that growth was still a priority and they would press on with reforms, in an apparent bid to soothe fears that ideology … [+4633 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Downbeat on the downshift - Reuters.com",
        "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
        "url": "https://www.reuters.com/markets/europe/global-markets-view-usa-2022-11-02/",
        "urlToImage": "https://www.reuters.com/resizer/QEFiX2g0iow26iiYlvedwFJZ9o8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BMITXJXBJVLTPCXQH6YWUCIQJQ.jpg",
        "publishedAt": "2022-11-02T10:03:00Z",
        "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nThe recent burst of stock market optimism around the world still seems to be on shaky ground.\r\nDespite expectations the U.S. Feder… [+4095 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Hartley Charlton",
        "title": "QMS VRR Support Coming to Apple TV 4K to Prevent Blackouts When Changing Content Frame Rate",
        "description": "Initial reviews of the new Apple TV 4K highlighted that Apple will add support for Quick Media Switching Variable Refresh Rate (QMS VRR) via a software update to tvOS.\n\n\n\n\n\nQMS VRR prevents momentary blackouts that occur when switching between content playing…",
        "url": "https://www.macrumors.com/2022/11/02/qms-vrr-support-coming-to-apple-tv-4k/",
        "urlToImage": "https://images.macrumors.com/t/KrNLjmGnptCUVBzzHI3bfULhtY4=/2500x/article-new/2022/10/Apple-TV-2022-Feature-Blue.jpg",
        "publishedAt": "2022-11-02T14:32:59Z",
        "content": "Initial reviews of the new Apple TV 4K highlighted that Apple will add support for Quick Media Switching Variable Refresh Rate (QMS VRR) via a software update to tvOS.\r\nQMS VRR prevents momentary bla… [+1328 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Sami Fathi",
        "title": "Next iOS 16.2 Beta to Enable 5G in India, Apple Confirms",
        "description": "The upcoming developer and public beta of iOS 16.2 will officially enable 5G for iPhone in India on select carriers, Apple has told Indian Express.\n\n\n\n\n\nApple had previously confirmed it was working with carriers in India, including Airtel and Jio, to bring 5…",
        "url": "https://www.macrumors.com/2022/11/02/ios-16-2-beta-5g-in-india/",
        "urlToImage": "https://images.macrumors.com/t/giV2l-1EztJovb-Rj4yL-yzuTko=/2500x/article-new/2022/10/iOS-16.2-Feature.jpg",
        "publishedAt": "2022-11-02T15:30:49Z",
        "content": "The upcoming developer and public beta of iOS 16.2 will officially enable 5G for iPhone in India on select carriers, Apple has told Indian Express.\r\nApple had previously confirmed it was working with… [+658 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Eric Slivka",
        "title": "iCloud Mail Currently Down for Some Users",
        "description": "iCloud Mail has been experiencing an issue over the past few hours and is currently down for some users, according to Apple's system status page. \n\n\n\n\n\nThere have been a number of reports on Twitter and from MacRumors readers over the past few hours, although…",
        "url": "https://www.macrumors.com/2022/11/01/icloud-mail-down/",
        "urlToImage": "https://images.macrumors.com/t/TCB-rmKAYLR8ZizjzPX-R5-lDMA=/2250x/article-new/2021/06/General-iOS-Mail-Feature.jpg",
        "publishedAt": "2022-11-02T03:03:05Z",
        "content": "iCloud Mail has been experiencing an issue over the past few hours and is currently down for some users, according to Apple's system status page. \r\nThere have been a number of reports on Twitter and … [+313 chars]"
        }
    ]
    constructor(){
      super();
      this.state = {
        articles:this.article,
        loading:false,
        page:1
      }
    }
    async updatenewz(){
      this.setState({loading:true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`;
     let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({articles:parseddata.articles,page:this.state.page-1,loading:false,publishedAt:parseddata.publishedAt,author:parseddata.author})
    }
   async componentDidMount(){
    this.updatenewz()
   }
   handlePrev = async ()=>{
    this.setState({page:this.state.page-1})
    this.updatenewz()
   }
   handleNext = async ()=>{
    this.setState({page:this.state.page+1})
    this.updatenewz()
   }
  render() {
    return (
      <div>
         <div className="container">
          {this.state.loading && <Spinner/> }
            <div className="row">
          {!this.state.loading && this.state.articles.map((e)=>{
                return <div className="col-md-4" key={e.url}>
                <Newsitem title = {e.title} des = {e.description+"..."} imgurl = {e.urlToImage} newsurl  = {e.url} author = {e.author} publishedAt = {e.publishedAt}/>
                </div>
              })}
            </div> 
        <div className="container mx-2 my-3 rounded d-flex m-auto justify-content-between bg-dark px-2 py-2">
          <button type = "button" className= "btn btn-sm btn-danger" onClick={this.handlePrev} disabled = {this.state.page<=1}>&larr; Previous</button>
          <button type = "button" className= "btn btn-sm btn-success" onClick={this.handleNext} disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} >Next &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}

export default News
